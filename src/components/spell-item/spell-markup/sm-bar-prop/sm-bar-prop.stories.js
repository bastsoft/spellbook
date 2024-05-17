import SmBarProp from './sm-bar-prop.vue'

export default {
  title: 'spell-item/spell-markup/sm-bar-prop',
  component: SmBarProp,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
#компонент для конфигурации определенного тэга        
`
      }
    },
    slots: {}
  },
  argTypes: {}
}

export const Default = {
  render: () => ({
    components: { SmBarProp },
    template: ` <SmBarProp
    v-if="subArrIndex !== null"
    v-model:subArr="subArr"
    v-model:subArrIndex="subArrIndex"
  />
  <pre>
  {{ subArr }}
  </pre>`,
    data: () => ({
      subArrIndex: 0,
      subArr: [
        {
          tag: 'TEST',
          argsBinded: [],
          args: {
            color: 'surface-variant'
          },
          slots: {
            default: {
              children: [],
              prop: 'a'
            }
          }
        }
      ]
    })
  })
}
