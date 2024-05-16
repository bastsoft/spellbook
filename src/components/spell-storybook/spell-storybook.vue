<template>
  <label>
    url storybook
    <input v-model="url" />
  </label>
  <button @click="onLoad">load</button>
  <SpellItem
    v-model="spell"
    @update:selectedElement="onSelectedElement"
    :argTypes="argTypes"
    :slotTypes="slotTypes"
    :presets="presets"
  >
    <template #toolbar="{ onAddTag }">
      <StorybookTree :children="(entriesTree || {}).children || {}" @add="onAddTag" />
    </template>
  </SpellItem>
  <details>
    <summary>test</summary>
    <label>
      id-story-test
      <input v-model="testId" />
      <button @click="goTest">test</button>
    </label>
  </details>
</template>

<script>
import SpellItem from '../spell-item/spell-item.vue'
import StorybookTree from './storybook-tree/storybook-tree.vue'
import StorybookRemoute from '../../spells-core/storybook-remoute.js'
import spellSyntaxTree from '../../spells-core/spell-converter/spell-syntax-tree.js'

let storybookRemoute = new StorybookRemoute()

export default {
  name: 'SpellStorybook',
  components: {
    SpellItem,
    StorybookTree
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    storyUrl: {
      type: String,
      default: 'http://localhost:6007/'
    },
    storyTestId: {
      type: String,
      default: 'components-test--default'
    }
  },
  data: () => ({
    presets: [],
    entriesTree: {},
    argTypes: {},
    slotTypes: {}
  }),
  computed: {
    testId: {
      get() {
        return this.storyTestId
      },
      set(value) {
        this.$emit('update:storyTestId', value)
      }
    },
    url: {
      get() {
        return this.storyUrl
      },
      set(value) {
        this.$emit('update:storyUrl', value)
      }
    },
    spell: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    onLoad() {
      storybookRemoute.loadStorybokIndex(this.url).then(() => {
        this.entriesTree = storybookRemoute.getOnlyStoryFromEntriesTree()
      })
    },
    onSelectedElement(elem) {
      this.argTypes = {}
      this.presets = []
      let importPath = null

      storybookRemoute.getOnlyStoryFromEntries().forEach((entry) => {
        const keys = entry.title.split('/')
        if (elem.tag === keys[keys.length - 1]) {
          importPath = entry.importPath
        }
      })

      if (importPath) {
        storybookRemoute.importFn(importPath).then((res) => {
          const tag = res.default.title.split('/').pop()
          this.argTypes = res.default.argTypes
          this.slotTypes = (res.default.parameters || {}).slots
          const presetKeys = Object.keys(res).filter(
            (i) => !['default', '__namedExportsOrder'].includes(i)
          )
          this.presets = presetKeys.reduce((acc, key) => {
            const getBody = (string) =>
              string.substring(string.indexOf('{') + 1, string.lastIndexOf('}'))
            const args = res[key].args || {}
            let data = ''
            let actions = {}
            const elem = {
              tag,
              argsBinded: [],
              args,
              slots: {}
            }

            if (res[key].render) {
              const renderObj = res[key].render(args)
              const parseElemArr = spellSyntaxTree.parse(
                renderObj.template.replace('v-bind="args"', '')
              )

              if (renderObj.data && typeof renderObj.data === 'function') {
                data = JSON.stringify(renderObj.data())
              }

              if (renderObj.methods && Object.keys(renderObj.methods).length) {
                Object.keys(renderObj.methods).forEach((key) => {
                  actions[key] = getBody(renderObj.methods[key].toString())
                })
              }

              elem.args = { ...parseElemArr[0].args, ...args }
              elem.argsBinded = parseElemArr[0].argsBinded
              elem.slots = parseElemArr[0].slots
            }

            acc.push({
              name: key,
              elem: [elem],
              data,
              actions
            })

            return acc
          }, [])
        })
      }
    },
    goTest() {
      const url = `${this.url}iframe.html?id=${this.storyTestId}&viewMode=story&args=base64:`
      this.$emit('test', url)
    }
  }
}
</script>
