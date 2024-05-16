import RenderJS from './render.js'
import SpellStorybook from '../../components/spell-storybook/spell-storybook.vue'

export default {
  title: 'spellbook'
}

const lifecycleHooks = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'beforeUnmount',
  'unmounted'
]

function saveTextFile(filename, content) {
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = filename
  link.href = url
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function loadTextFile() {
  return new Promise((resolve) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'text/plain, application/json, application/javascript'
    input.onchange = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        resolve({
          name: file.name,
          type: file.type,
          text: reader.result
        })
      }
      reader.readAsText(file)
    }
    input.click()
  })
}

export const Constructor = {
  parameters: {
    layout: 'fullscreen'
  },
  args: {},
  render: () => ({
    template: `
    <SpellStorybook 
      v-model="spell"
      v-model:storyUrl="storyUrl"
      v-model:storyTestId="storyTestId"
      @test="onTest"
    />
    <details>
      <summary>save/load</summary>
      <button @click="onSave">save</button>
      <button @click="onLoad">load</button>
      <button @click="onSaveLikeJs">save as js</button>
    </details>
    
    `,
    components: { SpellStorybook },
    data: () => ({
      spell: {
        tmpl: `<button @click="onClick">{{state.val}}</button>`,
        actions: {
          mounted: 'this.state.val = 1;',
          onClick: 'this.state.val += 1;'
        }
      },
      storyUrl: window.location.origin + '/',
      storyTestId: 'spellbook--render'
    }),
    methods: {
      onSave() {
        const fileName = prompt('Enter file name', 'spell.json')

        if (fileName !== null) {
          saveTextFile(fileName, JSON.stringify(this.spell, null, 2))
        }
      },
      onLoad() {
        loadTextFile().then(({ text }) => {
          this.spell = JSON.parse(text)
        })
      },
      onSaveLikeJs() {
        const fileName = prompt('Enter file name', 'Spell.js')

        const component = {
          components: {},
          data: () => ({
            state: {}
          }),
          methods: {},
          template: this.spell.tmpl
        }

        Object.keys(this.spell.actions || {}).forEach((actionName) => {
          const action = new Function(['payload'], this.spell.actions[actionName])
          //const action = '(){ ' + this.spell.actions[actionName] + '}'

          if (lifecycleHooks.includes(actionName)) {
            component[actionName] = action.toString()
            return
          }

          component.methods[actionName] = action.toString()
        })

        if (fileName !== null) {
          saveTextFile(fileName, JSON.stringify(component, null, 2))
        }
      },
      onTest(urlTest) {
        const str = JSON.stringify(this.spell)
        const binString = String.fromCodePoint(...new TextEncoder().encode(str))
        const url = urlTest + btoa(binString)
        window.open(url)
      }
    }
  })
}

export const Render = {
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    base64: {
      description: 'base64',
      control: {
        type: 'text'
      }
    }
  },
  args: {},
  render: () => ({
    components: { RenderJS },
    template: '<RenderJS/>'
  })
}
