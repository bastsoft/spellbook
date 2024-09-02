import WindowForm from './window-form.vue'

export default {
  title: 'vb60/5_templates/WindowForm',
  component: WindowForm,
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
    title: 'WindowForm'
  },
  render: (args) => ({
    components: { WindowForm },
    setup() {
      return { args }
    },
    template: `<WindowForm v-bind="args">There's so much room for activities!</WindowForm>`
  })
}
