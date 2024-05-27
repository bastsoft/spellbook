<template>
  <SmTabs :tabs="Object.keys(this.actions || {})" v-model:tab="currentTab">
    <template #add><button @click="add">+</button></template>
    <template #del="{ tab }">
      <button @click="del(tab)">-</button>
    </template>
    <template #default="{ nameClass, tab }">
      <div :class="nameClass">
        <SmPrism v-model="actions[tab]" />
      </div>
    </template>
  </SmTabs>
</template>

<script>
import SmPrism from '../sm-prism/sm-prism.vue'
import SmTabs from '../../../uikit/sm-tabs/sm-tabs.vue'

export default {
  name: 'SpellItemActions',
  components: {
    SmTabs,
    SmPrism
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
  computed: {
    actions: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  watch: {
    actions(value, oldValue) {
      if (!Object.keys(oldValue || {}).length) {
        this.currentTab = Object.keys(value)[0]
        console.log('this.currentTab: ', this.actions, this.currentTab)
      }
    }
  },
  methods: {
    add() {
      const tabName = prompt('Enter tab name', 'tab')
      if (tabName !== null) {
        this.actions[tabName] = ''
        this.currentTab = tabName
      }
    },
    del(tabKey) {
      delete this.actions[tabKey]
      this.currentTab = Object.keys(this.actions)[0]
    }
  }
}
</script>
