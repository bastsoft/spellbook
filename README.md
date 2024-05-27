# spellbook

to work with spellbook, your storybook must be work on _vite_

## how to integrate with storybook 8.0.0

add in .storybook/main.js

```js
  stories: [
  	"../node_modules/my-spellbook/src/spells-core/spell-storybook/*.stories.@(js|jsx|mjs|ts|tsx)"
  	],
```

add in .storybook/preview.js

```js
import { setup } from '@storybook/vue3'
import { compile, h } from 'vue'
import spell from 'my-spellbook/src/spells-core/spell.js'

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
```

add in package.json

```js
"build": "npm run build-storybook && node node_modules/my-spellbook/src/spells-core/build-postprocessing.js",
```
