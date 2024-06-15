import SIcon from './s-icon.vue'
import listIconOptions from './list-icon-options'
export default {
  title: 'uikit/SIcon',
  component: SIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ``
      }
    },
    slots: {}
  },
  argTypes: {
    name: {
      description: 'icon name',
      options: listIconOptions,
      control: {
        type: 'select'
      }
    }
  }
}

export const Default = {
  args: {
    name: ''
  }
}
