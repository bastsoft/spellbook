import SpellCast from './spell-cast.vue'
import IconWizard from './icon-wizard.vue'

export default {
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
  render: () => ({
    components: {
      SpellCast,
      IconWizard
    },
    template: `<SpellCast 
    style="margin: 0 20px;"
    :modelValue="code"
    @keydown.stop
    @drop.stop
    @update:model-value="onUpdateCode"
    storybookUrl="http://localhost:6006/"
    >
      <IconWizard/>
    </SpellCast>
    {{code}}`,
    data: () => ({
      code: ''
    }),
    methods: {
      onUpdateCode(payload) {
        this.code = payload
      }
    }
  })
}
