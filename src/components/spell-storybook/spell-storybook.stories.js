import SpellStorybook from './spell-storybook.vue'
import { render as storybookExampleRender } from '../../spells-core/storybook-example-render.js'

const render = storybookExampleRender.bind(this, {
  components: {
    SpellStorybook
  },
  ext: {
    stringToBase64: function (bytes) {
      const binString = String.fromCodePoint(...new TextEncoder().encode(bytes))

      return btoa(binString)
    }
  }
})

export default {
  render,
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
  tmpl: `
  <SpellStorybook 
    v-model="state.spell"
    v-model:storyUrl="state.storyUrl"
    v-model:storyTestId="state.storyTestId"
    @test="e=>action('onTest', e)"
  "/>
  
  {{state}}
  `,
  actions: {
    mounted: function (ctx) {
      ctx.state.spell = {
        tmpl: `<button @click="action('onClick')">{{state.val}}</button>`,
        actions: {
          mounted: 'ctx.state.val = 1;',
          onClick: 'ctx.state.val += 1;'
        }
      }
      ctx.state.storyUrl = window.location.origin + '/'
      ctx.state.storyTestId = 'components-test--default'
    },
    onTest: function (ctx, urlTest) {
      const str = JSON.stringify(ctx.state.spell)
      const url = urlTest + ctx.ext.stringToBase64(str)
      window.open(url)
    }
  }
}
