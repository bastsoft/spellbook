/** @type { import('@storybook/vue3').Preview } */

import { setup } from '@storybook/vue3'
import { compile, h } from 'vue'
import spell from '../src/spells-core/spell.js'

import SmTabs from '../src/uikit/sm-tabs/sm-tabs.vue'
import SBtn from '../src/uikit/s-btn/s-btn.vue'
import SIcon from '../src/uikit/s-icon/s-icon.vue'

setup((app) => {
  app.use({
    install: function (vueApp, options) {
      vueApp.component(
        'Spell',
        spell({
          compile,
          h,
          components: {
            SmTabs,
            SBtn,
            SIcon
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
