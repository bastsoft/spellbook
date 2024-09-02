import TreeView from './tree-view.vue'

export default {
  title: 'vb60/3_molecules/TreeView',
  component: TreeView,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ``
      }
    },
    slots: {}
  },
  argTypes: {}
}

export const Default = {
  args: {
    tree: {
      keyTree: {
        children: {},
        value: 'treeValue'
      },
      details: {
        value: 'У узлового элемента value бесполезно',
        children: {
          inerrValue: {
            children: {},
            value: 'inerrValue'
          },
          valueAsObj: {
            children: {},
            value: {
              text: 'keyValueAsObj'
            }
          }
        }
      }
    }
  },
  render: (args) => ({
    components: { TreeView },
    data() {
      return { ...args }
    },
    methods: {
      onSelect(value) {
        alert(JSON.stringify(value))
      }
    },
    template: `
      <TreeView :children="tree" @select="onSelect" />
    `
  })
}
