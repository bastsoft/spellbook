import SpellCast from './spell-cast.vue'
import IconWizard from './icon-wizard.vue'
import { render as storybookExampleRender } from '../../spells-core/storybook-example-render.js'

const render = storybookExampleRender.bind(this, {
  SpellCast,
  IconWizard
})

export default {
  render,
  title: 'components/spell-cast',
  component: SpellCast,
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
  tmpl: `
  <SpellCast @keydown.stop v-model="state.code">
    <IconWizard/>
  </SpellCast>
  {{state}}
  `,
  actions: {
    mounted: function () {}
  }
}
