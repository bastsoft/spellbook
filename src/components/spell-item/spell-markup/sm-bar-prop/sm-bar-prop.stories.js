import SmBarProp from './sm-bar-prop.vue'
import {
  toStr,
  render as storybookExampleRender
} from '../../../../spells-core/storybook-example-render.js'

const render = storybookExampleRender.bind(this, {
  SmBarProp
})

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
  argTypes: {},
  render
}

export const Default = {
  args: {},
  tmpl: `
  <SmBarProp
    v-if="state.subArrIndex !== null"
    v-model:subArr="state.subArr"
    v-model:subArrIndex="state.subArrIndex"
  />
  <pre>
  {{ state.subArr }}
  </pre>
  `,
  actions: {
    mounted: toStr(function (ctx) {
      ctx.state.subArrIndex = '0'
      ctx.state.subArr = [
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
  }
}
