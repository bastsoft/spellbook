import SBtn from './s-btn.vue'
import listIconOptions from '../s-icon/list-icon-options'

export default {
  title: 'uikit/SBtn',
  component: SBtn,
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
    icon: {
      description: 'icon name',
      options: listIconOptions,
      control: {
        type: 'select'
      }
    }
  }
}

export const Icon = {
  args: {
    icon: 'code'
  }
}

export const VariantText = {
  args: {
    variant: 'text',
    text: 'Ok'
  }
}
