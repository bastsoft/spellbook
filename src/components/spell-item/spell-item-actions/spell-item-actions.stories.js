import SpellItemActions from './spell-item-actions.vue'

export default {
  title: 'spell-item/spell-item-actions',
  component: SpellItemActions,
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
    components: { SpellItemActions },
    template: `<SpellItemActions v-model="actions"/>
    {{actions}}`,
    data: () => ({
      actions: {
        mounted: ''
      }
    })
  })
}
