<template>
  <SmTabs :tabs="['TREE', 'HTML']" @update:tab="currentTab = $event">
    <template #default="{ nameClass, tab }">
      <div :class="nameClass" v-if="tab === 'HTML'">
        <button @click="onBeautify">beautify</button>
        <SmHtml v-model="tmplHtml" />
      </div>
      <div :class="nameClass" v-if="tab === 'TREE'">
        <div style="display: flex">
          <SmToolbar @add="onAddTag">
            <template #toolbar>
              <slot name="toolbar" :onSelectValueTree="onSelectValueTree"> </slot>
            </template>
          </SmToolbar>
          <SmDraggable
            style="width: 100%"
            v-model:selectedId="selectedId"
            :children="syntaxTree"
            @drop.stop="onChange"
          />
          <SmBarProp
            v-if="subArrIndex !== null"
            v-model:subArr="subArr"
            v-model:subArrIndex="subArrIndex"
            @keydown.stop="onChange"
            @change="onChange"
            :argTypesExtra="argTypes"
            :slotTypesExtra="slotTypes"
            :presets="presets"
            @selectPreset="onSelectPreset"
          />
        </div>
      </div>
    </template>
  </SmTabs>
</template>

<script>
import SmTabs from '../../../uikit/sm-tabs/sm-tabs.vue'
import SmHtml from '../sm-prism/sm-prism.vue'
import SmDraggable from './sm-draggable/sm-draggable.vue'

import beautify from 'js-beautify'
import spellSyntaxTree from '../../../spells-core/spell-converter/spell-syntax-tree.js'
import SmBarProp from './sm-bar-prop/sm-bar-prop.vue'
import SmToolbar from './sm-toolbar/sm-toolbar.vue'

export default {
  name: 'SpellMarkup',
  components: {
    SmHtml,
    SmDraggable,
    SmBarProp,
    SmTabs,
    SmToolbar
  },
  props: {
    tmpl: {
      type: String,
      default: ''
    },
    argTypes: {
      type: Object,
      default: () => ({})
    },
    presets: {
      type: Array,
      default: () => []
    },
    slotTypes: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: [Number, String],
      default: null
    },
    arr: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    selectedId: null,
    syntaxTree: [],
    currentTab: 'HTML'
  }),
  mounted() {
    console.log('MOUNTED!')
    const bc = new BroadcastChannel('test_channel')
    bc.addEventListener('message', (e) => {
      const m = e.data

      if (m.type === 'reselected') {
        console.log('reselected : ', m)
        this.selectedId = m.payload
        this.updateSelectedId()
      }
    })
  },
  computed: {
    subArrIndex: {
      get() {
        return this.index
      },
      set(value) {
        this.$emit('update:index', value)
      }
    },
    subArr: {
      get() {
        return this.arr
      },
      set(value) {
        this.$emit('update:arr', value)
      }
    },
    tmplHtml: {
      get() {
        return this.tmpl
      },
      set(value) {
        this.$emit('update:tmpl', value)
      }
    }
  },
  watch: {
    currentTab() {
      if (this.currentTab === 'TREE') {
        this.onParse()
      }
      if (this.currentTab === 'HTML') {
        this.onStringify()
      }
    },
    selectedId() {
      this.updateSelectedId()
    },
    subArrIndex() {
      if (this.subArrIndex === null) {
        this.selectedId = null
      }
    }
  },
  methods: {
    updateSelectedId() {
      const bc = new BroadcastChannel('test_channel')
      bc.postMessage({
        type: 'selected',
        payload: this.selectedId
      })
      // это кастыль, надо сделать нормальную подписку на syntaxTree
      this.onStringify()
      if (this.selectedId === null) {
        this.subArr = this.syntaxTree
        this.subArrIndex = null
        return
      }

      const arr = this.selectedId.split('-')

      let elements = this.syntaxTree
      let lastKey = arr[0]
      arr.splice(0, 1)

      arr.forEach((key) => {
        elements = elements[lastKey]
        lastKey = key
      })

      this.subArr = elements
      this.subArrIndex = lastKey
      this.$emit('update:selectedElement', elements[lastKey])
    },
    onSelectPreset(selectPreset) {
      this.$emit('selectPreset', selectPreset)
    },
    onAddTag(element) {
      console.log('onAddTag : ', element)
      // subArrIndex: null, //добавление элементов
      this.subArr.push(element)
      this.onChange()
    },
    onSelectValueTree(value){
      this.onAddTag({
        tag: value.title.split('/').pop(),
        argsBinded: [],
        args: {},
        slots: {}
      });
    },
    onBeautify() {
      this.tmplHtml = beautify.html(this.tmplHtml)
    },
    onStringify() {
      this.tmplHtml = beautify.html(spellSyntaxTree.stringify(this.syntaxTree))
    },
    onParse() {
      this.syntaxTree = spellSyntaxTree.parse(this.tmplHtml)
      this.subArr = this.syntaxTree
      this.subArrIndex = null
      this.selectedId = null
    },
    onChange() {
      setTimeout(() => {
        this.onStringify()
      }, 100)
    }
  }
}
</script>
