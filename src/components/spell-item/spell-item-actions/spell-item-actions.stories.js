import SpellItemActions from './spell-item-actions.vue'
import {
  toStr,
  render as storybookExampleRender
} from '../../../spells-core/storybook-example-render.js'

const render = storybookExampleRender.bind(this, {
  SpellItemActions
})

export default {
  title: 'spell-item/spell-item-actions',
  component: SpellItemActions,
  render,
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
  args: {},
  tmpl: `<SpellItemActions v-model="state.actions"/>
  {{state.actions}}
  `,
  actions: {
    mounted: toStr(function (ctx) {
      ctx.state.actions = {
        mounted: ''
      }
    })
  }
}
