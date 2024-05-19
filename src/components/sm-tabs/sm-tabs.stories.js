import SmTabs from './sm-tabs.vue'

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
  }
}

export const Default = {
  render: () => ({
    components: { SmTabs },
    template: `<SmTabs :tabs="['HTML', 'TREE']" @update:tab="currentTab = $event">
    <template #default="{ nameClass, tab }">
      <div :class="nameClass" v-if="tab === 'HTML'">
        HTML
      </div>
      <div :class="nameClass" v-if="tab === 'TREE'">
        TREE
      </div>
    </template>
  </SmTabs>
  {{ currentTab }}`,
    data: () => ({
      currentTab: 'HTML'
    })
  })
}

export const SlotBtn = {
  render: () => ({
    components: { SmTabs },
    template: `<SmTabs :tabs="tabs" v-model:tab="currentTab">
    <template #add><button @click="add">+</button></template>
    <template #del="{index}">
      <button @click="del(index)">-</button>
    </template>
    <template #default="{ nameClass, tab }">
      <div :class="nameClass">
        {{ tab }}
      </div>
    </template>
  </SmTabs>
  {{ tabs }}
  {{ currentTab }}`,
    data: () => ({
      tabs: ['HTML', 'TREE'],
      currentTab: 'HTML'
    }),
    methods: {
      add() {
        const tabName = prompt('Enter tab name', 'tab')
        if (tabName !== null) {
          this.tabs.push(tabName)
          this.currentTab = tabName
        }
      },
      del(payload) {
        this.tabs.splice(payload, 1)
        this.currentTab = this.tabs[0]
      }
    }
  })
}
