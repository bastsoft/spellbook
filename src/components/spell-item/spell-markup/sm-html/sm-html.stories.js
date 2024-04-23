import SmHtml from './sm-html.vue'

export default {
  title: 'spell-item/spell-markup/sm-html',
  component: SmHtml,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `компонент для инкопцуляции логики prismjs и beautify`
      }
    },
    slots: {}
  },
  argTypes: {
    modelValue: {
      description: 'html code',
      control: {
        type: 'text'
      }
    }
  }
}

export const Default = {
  args: {
    modelValue:
      '<VDialog maxWidth="500">\n    <template #activator="{ props: activatorProps }">\n        <VBtn color="surface-variant" text="Open Dialog" variant="flat" v-bind="activatorProps"></VBtn>\n    </template>\n\n    <template #default="{ isActive }">\n        <VCard title="Dialog">\n            <VCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</VCardText>\n            <VCardActions>\n                <VSpacer></VSpacer>\n                <VBtn text="Close Dialog" @click="isActive.value = false"></VBtn>\n            </VCardActions>\n        </VCard>\n    </template>\n</VDialog>'
  }
}
