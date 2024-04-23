import SmTabs from './sm-tabs.vue'
import {
  toStr,
  render as storybookExampleRender
} from '../../spells-core/storybook-example-render.js'

const render = storybookExampleRender.bind(this, {
  SmTabs
})

export default {
  title: 'sm-tabs',
  component: SmTabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ``
      }
    },
    slots: {}
  },
  argTypes: {
    tabs: {
      description: 'tabs',
      control: {
        type: 'object'
      }
    }
  },
  render
}

export const Default = {
  tmpl: `<SmTabs :tabs="['HTML', 'TREE']" @update:tab="state.currentTab = $event">
  <template #default="{ nameClass, tab }">
    <div :class="nameClass" v-if="tab === 'HTML'">
      HTML
    </div>
    <div :class="nameClass" v-if="tab === 'TREE'">
      TREE
    </div>
  </template>
</SmTabs>
{{ state.currentTab }}
  `,
  actions: {
    mounted: toStr(function (ctx) {
      ctx.state.currentTab = 'HTML'
    })
  }
}

export const SlotBtn = {
  tmpl: `<SmTabs :tabs="state.tabs" v-model:tab="state.currentTab">
  <template #add><button @click="action('add')">+</button></template>
  <template #del="{index}">
    <button @click="action('del', index)">-</button>
  </template>
  <template #default="{ nameClass, tab }">
    <div :class="nameClass">
      {{ tab }}
    </div>
  </template>
</SmTabs>
{{ state.tabs }}
{{ state.currentTab }}
  `,
  actions: {
    mounted: toStr(function (ctx) {
      ctx.state.tabs = ['HTML', 'TREE']
      ctx.state.currentTab = 'HTML'
    }),
    add: toStr(function (ctx) {
      const tabName = prompt('Enter tab name', 'tab')
      if (tabName !== null) {
        ctx.state.tabs.push(tabName)
        ctx.state.currentTab = tabName
      }
    }),
    del: toStr(function (ctx, payload) {
      ctx.state.tabs.splice(payload, 1)
      ctx.state.currentTab = ctx.state.tabs[0]
    })
  }
}
