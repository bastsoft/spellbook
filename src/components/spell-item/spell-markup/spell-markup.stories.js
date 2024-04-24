import SpellMarkup from './spell-markup.vue'
import {
  toStr,
  render as storybookExampleRender
} from '../../../spells-core/storybook-example-render.js'

const render = storybookExampleRender.bind(this, {
  SpellMarkup
})

export default {
  title: 'spell-item/spell-markup',
  component: SpellMarkup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ``
      }
    },
    slots: {}
  },
  argTypes: {},
  render
}

export const Default = {
  args: {},
  tmpl: `<SpellMarkup v-model:tmpl="state.tmpl"/>
  {{state.tmpl}}
  `,
  actions: {
    mounted: toStr(function (ctx) {
      ctx.state.tmpl = ``
    })
  }
}
