<template>
  <div class="sm-tabs">
    <slot name="add"></slot>
    <div
      v-for="(tab, index) in tabs"
      :key="tab.toString() + index"
      :class="['sm-tabs-tab', { _active: localCurrentTab === tab }]"
    >
      <SBtn
        :class="['sm-tabs-button']"
        variant="text"
        :text="tab"
        v-on:click="localCurrentTab = tab.toString()"
      >
      </SBtn>
      <slot name="del" :index="index" :tab="localCurrentTab"></slot>
    </div>
  </div>
  <slot nameClass="sm-tabs-content" :tab="localCurrentTab">
    {{ localCurrentTab }}
  </slot>
</template>

<script>
import SBtn from '../s-btn/s-btn.vue'

export default {
  name: 'SmTabs',
  components: {
    SBtn
  },
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => []
    },
    tab: {
      type: String
    }
  },
  data: () => ({
    localCurrentTab: null
  }),
  computed: {
    currentTab: {
      get() {
        return this.tab
      },
      set(value) {
        this.$emit('update:tab', value)
      }
    }
  },
  watch: {
    localCurrentTab(value) {
      this.currentTab = value
    },
    currentTab(value) {
      this.localCurrentTab = value
    }
  },
  mounted() {
    this.localCurrentTab = this.tabs[0]
  }
}
</script>

<style>
.sm-tabs {
  display: flex;
}
.sm-tabs-tab {
  display: inline-block;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
  padding: 6px 10px;
}
.sm-tabs-tab:hover {
  background: #e0e0e0;
}
.sm-tabs-tab._active {
  background: white;
  border-bottom: none;
  padding: 7px 10px;
}
.sm-tabs-button {
  background: transparent;
  border: none;
  cursor: pointer;
}
.sm-tabs-content {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
