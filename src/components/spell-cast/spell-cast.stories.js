import SpellCast from './spell-cast.vue'
import sIcon from '../../uikit/s-icon/s-icon.vue'

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
      sIcon
    },
    template: `<SpellCast 
    style="margin: 0 20px;"
    :modelValue="code"
    @keydown.stop
    @drop.stop
    @update:model-value="onUpdateCode"
    storybookUrl="http://localhost:6006/"
    >
      <sIcon name="wizard"/>
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
