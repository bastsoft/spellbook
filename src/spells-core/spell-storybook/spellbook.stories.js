import RenderJS from './render.js'
import SpellStorybook from '../../components/spell-storybook/spell-storybook.vue'

export default {
  title: 'spellbook'
}

export const Constructor = {
  args: {},
  render: () => ({
    template: `
    <SpellStorybook 
      v-model="spell"
      v-model:storyUrl="storyUrl"
      v-model:storyTestId="storyTestId"
      @test="onTest"
    />
    `,
    components: { SpellStorybook },
    data: () => ({
      spell: {
        tmpl: `<button @click="action('onClick')">{{state.val}}</button>`,
        actions: {
          mounted: 'ctx.state.val = 1;',
          onClick: 'ctx.state.val += 1;'
        }
      },
      storyUrl: window.location.origin + '/',
      storyTestId: 'spellbook--render'
    }),
    methods: {
      onTest(urlTest) {
        const str = JSON.stringify(this.spell)
        const binString = String.fromCodePoint(...new TextEncoder().encode(str))
        const url = urlTest + btoa(binString)
        window.open(url)
      }
    }
  })
}

export const Render = {
  argTypes: {
    base64: {
      description: 'base64',
      control: {
        type: 'text'
      }
    }
  },
  args: {},
  render: () => ({
    components: { RenderJS },
    template: '<RenderJS/>'
  })
}
