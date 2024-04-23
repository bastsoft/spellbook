<template>
  <SmTabs :tabs="Object.keys(this.actions || {})" v-model:tab="currentTab">
    <template #add><button @click="add">+</button></template>
    <template #del="{tab}">
      <button @click="del(tab)">-</button>
    </template>
    <template #default="{ nameClass, tab }">
      <div :class="nameClass">
        <PrismEditor
          class="spell-item-actions"
          v-model="actions[tab]"
          :highlight="highlighter"
          line-numbers
        />
      </div>
    </template>
  </SmTabs>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

import SmTabs from '../../sm-tabs/sm-tabs.vue';

export default {
  name: 'SpellItemActions',
  components: {
    SmTabs,
    PrismEditor
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    currentTab: ''
  }),
  computed:{
    actions:{
      get(){
        return this.modelValue
      },
      set(value){
        this.$emit('update:modelValue', value)
      }
    }
  },
  watch:{
    actions(value, oldValue){
      if(!Object.keys(oldValue || {}).length){
        this.currentTab = Object.keys(value)[0];
        console.log("this.currentTab: ", this.actions, this.currentTab);
      }
    }
  },
  // mounted(){
  //   this.currentTab = Object.keys(this.actions)[0];
  //   console.log("this.currentTab: ", this.actions, this.currentTab);
  // },
  methods:{
    highlighter(code) {
      return highlight(code, languages.javascript);
    },
    add(){
      const tabName = prompt('Enter tab name', 'tab')
      if (tabName !== null) {
        this.actions[tabName] = "";
        this.currentTab = tabName
      }
    },
    del(tabKey){
      delete this.actions[tabKey];
      this.currentTab = Object.keys(this.actions)[0]
    }
  }
}
</script>

<style>
.spell-item-actions {
  background: #2d2d2d;
  color: #ccc;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>