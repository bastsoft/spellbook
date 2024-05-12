/** @type { import('@storybook/vue3').Preview } */

import { setup } from '@storybook/vue3'
import { compile, h } from 'vue'
import spell from '../src/spells-core/spell.js'

setup((app) => {
  app.use({
    install: function (vueApp, options) {
      vueApp.component(
        'Spell',
        spell({
          compile,
          h,
          components: {
            // add your components to this
          },
          ctxExt: {}
        })
      )
    }
  })
})

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
