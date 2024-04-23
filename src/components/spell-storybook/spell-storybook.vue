<template>
  <label>
    url storybook
    <input v-model="url"/>
  </label>
  <button @click="onLoad">load</button>
  <SpellItem v-model="spell" @update:selectedElement="onSelectedElement" :argTypes="argTypes">
    <template #toolbar="{ onAddTag }">
      <StorybookTree 
        :children="(entriesTree || {}).children || {}" 
        @add="onAddTag"
      />
    </template>
  </SpellItem>
  <details>
    <summary>test</summary>
    <label>
      id-story-test
      <input v-model="testId"/>
      <button @click="goTest">test</button>
    </label>
  </details>
</template>

<script>
import SpellItem from '../spell-item/spell-item.vue';
import StorybookTree from './storybook-tree/storybook-tree.vue'
import StorybookRemoute from '../../spells-core/storybook-remoute.js'

let storybookRemoute = new StorybookRemoute()

export default {
  name: 'SpellStorybook',
  components: {
    SpellItem,
    StorybookTree,
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    storyUrl: {
      type: String,
      default: "http://localhost:6007/",
    },
    storyTestId: {
      type: String,
      default: "components-test--default",
    },
  },
  data: ()=>({
    entriesTree: {},
    argTypes: {},
  }),
  computed: {
    testId:{
      get() {
        return this.storyTestId;
      },
      set(value) {
        this.$emit('update:storyTestId', value);
      }
    },
    url:{
      get() {
        return this.storyUrl;
      },
      set(value) {
        this.$emit('update:storyUrl', value);
      }
    },
    spell: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  methods: {
    onLoad(){
      storybookRemoute.loadStorybokIndex(this.url).then(() => {
        this.entriesTree = storybookRemoute.getOnlyStoryFromEntriesTree();
      })
    },
    onSelectedElement(elem) {
      this.argTypes = {};
      let importPath = null;

      storybookRemoute.getOnlyStoryFromEntries().forEach((entry) => {
        const keys = entry.title.split('/');
        if (elem.tag === keys[keys.length - 1]) {
          importPath = entry.importPath;
        }
      });

      if (importPath) {
        storybookRemoute.importFn(importPath).then((res) => {
          this.argTypes = res.default.argTypes;
        });
      }
    },
    goTest(){
      const url = `${this.url}iframe.html?id=${this.storyTestId}&viewMode=story&args=base64:`;
      this.$emit("test", url);
    }
  }
};
</script>