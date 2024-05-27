import SmTabs from './sm-tabs.vue'

export default {
  title: 'uikit/SmTabs',
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

export const Generator = {
  tags: ['!autodocs', '!test', '!dev', '!docs'],
  argTypes: {
    names: {
      control: 'text',
      description: 'Перечислите название вкладок через запятую'
    },
    isBtnDel: {
      control: 'text',
      description: 'Добавить кнопку удаления вкладок? (1,0)'
    }
  },
  args: {
    names: 'VAL1,VAL2',
    isBtnDel: '1'
  },
  render: (args) => {
    const argNames = args.names.split(',')

    const contentTabs = argNames.reduce((acc, name) => {
      acc += ` <div :class="nameClass" v-if="tab === '${name}'">
      ${name}
    </div>`

      return acc
    }, '')

    let delBtn = ''
    let methods = {}

    if (Number(args.isBtnDel)) {
      delBtn = ` <template #add><button @click="add">+</button></template>
    <template #del="{index}">
      <button @click="del(index)">-</button>
    </template>`
      methods = {
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
    }

    return {
      components: { SmTabs },
      template: `<SmTabs :tabs="${JSON.stringify(argNames).replace(/"/g, "'")}" @update:tab="currentTab = $event">
    ${delBtn}
    <template #default="{ nameClass, tab }">
      ${contentTabs}
    </template>
  </SmTabs>
  {{ currentTab }}`,
      data: () => ({
        currentTab: argNames[0]
      }),
      methods
    }
  }
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
