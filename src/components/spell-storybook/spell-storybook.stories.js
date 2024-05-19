import SpellStorybook from './spell-storybook.vue'

export default {
  title: 'spell-storybook',
  component: SpellStorybook,
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
    components: { SpellStorybook },
    template: ` <SpellStorybook 
    v-model="spell"
    v-model:storyUrl="storyUrl"
    v-model:storyTestId="storyTestId"
    @test="onTest"
  "/>
  
  {{state}}`,
    data: () => ({
      spell: {
        tmpl: `<button @click="action('onClick')">{{state.val}}</button>`,
        actions: {
          mounted: 'ctx.state.val = 1;',
          onClick: 'ctx.state.val += 1;'
        }
      },
      storyUrl: window.location.origin + '/',
      storyTestId: 'components-test--default'
    }),
    methods: {
      onTest: function (payload) {
        const stringToBase64 = function (bytes) {
          const binString = String.fromCodePoint(...new TextEncoder().encode(bytes))

          return btoa(binString)
        }
        const str = JSON.stringify(this.spell)
        const url = payload + stringToBase64(str)
        window.open(url)
      }
    }
  })
}
