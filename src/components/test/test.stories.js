import TestVue from './test.vue'

export default {
  title: 'components/test',
  component: TestVue,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `компонент для тестирования spell по средствам передачи base64 через url story`
      }
    },
    slots: {}
  },
  argTypes: {
    base64: {
      description: 'base64',
      control: {
        type: 'text'
      }
    }
  }
}

export const Default = {
  args: {}
}
