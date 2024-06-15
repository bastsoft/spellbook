import SpellMarkup from './spell-markup.vue'

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
  argTypes: {}
}

export const Default = {
  render: () => ({
    components: { SpellMarkup },
    template: `<SpellMarkup 
    v-model:tmpl="tmpl"
    v-model:arr="subArr"
    v-model:index="subArrIndex"
    />
    {{tmpl}}`,
    data: () => ({
      tmpl: '',
      subArr: [],
      subArrIndex: null
    })
  })
}
