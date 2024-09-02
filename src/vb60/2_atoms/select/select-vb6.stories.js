import SelectVB6 from './select-vb6.vue'

export default {
  title: 'vb60/2_atoms/SelectVB6',
  component: SelectVB6,
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
    options: [
      '5 - Incredible!',
      '4 - Great!',
      '3 - Pretty good',
      '2 - Not so great',
      '1 - Unfortunate'
    ],
    selectKey: '3 - Pretty good'
  },
  render: (args) => ({
    components: { SelectVB6 },
    data() {
      return {
        ...args
      }
    },
    template: `
    <SelectVB6 v-model="selectKey" :options="options" />
    `
  })
}
