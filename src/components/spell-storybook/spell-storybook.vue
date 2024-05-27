<template>
  <label>
    url storybook
    <input v-model="url" />
  </label>
  <button @click="onLoad">load</button>
  <SpellItem
    ref="SpellItem"
    v-model="spell"
    v-model:arr="subArr"
    v-model:index="subArrIndex"
    @update:selectedElement="onSelectedElement"
    @selectPreset="onSelectPreset"
    :argTypes="argTypes"
    :slotTypes="slotTypes"
    :presets="Object.keys(presets)"
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
    presets: {},
    entriesTree: {},
    argTypes: {},
    slotTypes: {},
    subArr: [],
    subArrIndex: null
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
      this.presets = {}
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
            acc[key] = {
              tag,
              render: res[key].render,
              args: res[key].args || {},
              argTypes: res[key].argTypes
            }

            return acc
          }, {})
        })
      }
    },
    onSelectPreset(key) {
      const extend = function (target, source) {
        for (let key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source[key] === 'object' && source[key] !== null) {
              if (!target[key]) {
                target[key] = Array.isArray(source[key]) ? [] : {}
              }
              extend(target[key], source[key])
            } else {
              target[key] = source[key]
            }
          }
        }
        return target
      }

      const getBody = (string) => string.substring(string.indexOf('{') + 1, string.lastIndexOf('}'))

      const selectPreset = this.presets[key]

      const elem = {
        tag: selectPreset.tag,
        argsBinded: [],
        args: selectPreset.argTypes ? {} : selectPreset.args,
        slots: {}
      }
      let data = ''
      let actions = {}
      let renderArgs = JSON.parse(JSON.stringify(selectPreset.args))

      if (selectPreset.argTypes) {
        Object.keys(selectPreset.argTypes).forEach((key) => {
          renderArgs[key] = window.prompt(selectPreset.argTypes[key].description, renderArgs[key])
        })
      }

      if (selectPreset.render) {
        const renderObj = selectPreset.render(renderArgs)
        console.log('renderObj : ', renderObj)
        const parseElemArr = spellSyntaxTree.parse(renderObj.template.replace('v-bind="args"', ''))

        if (renderObj.data && typeof renderObj.data === 'function') {
          data = JSON.stringify(renderObj.data())
        }

        if (renderObj.methods && Object.keys(renderObj.methods).length) {
          Object.keys(renderObj.methods).forEach((key) => {
            actions[key] = getBody(renderObj.methods[key].toString())
          })
        }

        ;[
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
        ].forEach((key) => {
          if (renderObj[key]) {
            actions[key] = getBody(renderObj[key].toString())
          }
        })

        elem.args = { ...parseElemArr[0].args, ...elem.args }
        elem.argsBinded = parseElemArr[0].argsBinded
        elem.slots = parseElemArr[0].slots
      }

      this.subArr[this.subArrIndex] = elem

      if (data && confirm('расширить idata?')) {
        const selectPresetData = new Function(['payload'], ' return ' + data)()
        let idata = new Function(['payload'], ' return ' + (this.spell.idata || '{}'))()
        idata = extend(idata, selectPresetData)
        this.spell.idata = JSON.stringify(idata, null, 2)
      }

      if (actions && confirm('расширить actions?')) {
        Object.keys(actions).forEach((key) => {
          if (!this.spell.actions[key]) {
            this.spell.actions[key] = actions[key]
          }
        })
      }

      this.$refs.SpellItem.onChange()
    },
    goTest() {
      let isDev = process.env.NODE_ENV === 'development'
      let iframe = isDev ? 'iframe.html' : 'iframe'

      const url = `${this.url}${iframe}?id=${this.storyTestId}&viewMode=story&args=base64:`
      this.$emit('test', url)
    }
  }
}
</script>
