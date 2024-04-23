/*
Этот класс предназначени для удаленной работы с storybook
для работы класса нужно что storybook сборшик работал через vite
провера на 
Storybook 7.6.15
*/
export default class StorybookRemoute {
  storybookUrl = null
  storybokIndex = {
    entries: {
      key: { tags: [] }
    }
  }
  importFn = null
  constructor() {
    this._initGlobalStorybookProperties()
  }

  _initGlobalStorybookProperties() {
    window.__STORYBOOK_MODULE_CLIENT_LOGGER__ = { logger: {} }
    window.__STORYBOOK_MODULE_PREVIEW_API__ = {}
    window.__STORYBOOK_MODULE_CORE_EVENTS__ = {}
    window.__STORYBOOK_MODULE_GLOBAL__ = {}
    window.global = {}
  }

  loadStorybokIndex(storybookUrl) {
    this.storybookUrl = storybookUrl
    console.log('loadStorybokIndex : ', this.storybookUrl)
    return fetch(this.storybookUrl + 'index.json')
      .then((r) => r.json())
      .then((r) => {
        this.storybokIndex = r
        return r
      })
      .then(() => {
        return import(this.storybookUrl + 'virtual:/@storybook/builder-vite/storybook-stories.js')
      })
      .then((exp) => {
        this.importFn = exp.importFn
      })
  }

  getOnlyStoryFromEntries() {
    const elements = {}

    Object.values(this.storybokIndex.entries).forEach((entry) => {
      if (entry.type !== 'story') {
        return
      }

      if (!elements[entry.title]) {
        elements[entry.title] = {
          ...entry,
          name: [entry.name]
        }
      } else {
        elements[entry.title].name.push(entry.name)
      }
    })

    return Object.values(elements)
  }

  getOnlyStoryFromEntriesTree() {
    return this.getOnlyStoryFromEntries().reduce(
      (acc, entry) => {
        const keys = entry.title.split('/')
        let subObj = acc
        keys.forEach((key) => {
          if (!subObj.children[key]) {
            subObj.children[key] = { children: {} }
          }
          subObj = subObj.children[key]
        })
        subObj.value = entry

        return acc
      },
      { children: {} }
    )
  }

  getIframeLink() {
    // <iframe src="http://localhost:6006/iframe.html?args=label:name&id=example-vtextfield--primary"/>
    return 'http://localhost:6006/iframe.html?args=text:OK;size:large;density:compact;loading:!false;stacked:!false;ripple:!false;variant:outlined;elevation:6&id=example-vbtn--primary'
  }
}
