/** @type { import('@storybook/vue3').Preview } */

import { setup } from '@storybook/vue3'

import SmTabs from '../src/uikit/sm-tabs/sm-tabs.vue'
import SBtn from '../src/uikit/s-btn/s-btn.vue'
import SIcon from '../src/uikit/s-icon/s-icon.vue'

setup((app) => {
  app.use({
    install: function (vueApp, options) {
      vueApp.component('SmTabs', SmTabs)
      vueApp.component('SBtn', SBtn)
      vueApp.component('SIcon', SIcon)
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
