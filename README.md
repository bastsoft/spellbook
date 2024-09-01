## spell

```js
import { h } from 'vue'
import spell from '../spell'

const Spell = spell(h)
```

## spellbook

to work with spellbook, your storybook must be work on _vite_

## how to integrate with storybook 8.0.0

add in .storybook/main.js

```js
  stories: [
  	"../node_modules/my-spellbook/src/spells-core/spell-storybook/*.stories.@(js|jsx|mjs|ts|tsx)"
  	],
```

add in package.json

```js
"build": "npm run build-storybook && node node_modules/my-spellbook/src/spells-core/build-postprocessing.js",
```

# demo

https://bastsoft.github.io/spellbook
