import SpellItem from './spell-item.vue'

import {
  toStr,
  render as storybookExampleRender
} from '../../spells-core/storybook-example-render.js'

const render = storybookExampleRender.bind(this, {
  SpellItem
})

export default {
  title: 'spell-item',
  component: SpellItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ``
      }
    },
    slots: {}
  },
  argTypes: {},
  render
}

export const Default = {
  tmpl: `<SpellItem v-model="state">
    <template #toolbar>
      template toolbar
    </template>
  </SpellItem>
  {{state}}
  `,
  actions: {
    mounted: toStr(function (ctx) {
      ctx.state = {}
    })
  }
}

export const ExampleForm = {
  args: {},
  tmpl: `<SpellItem v-model="state"/>
  {{state}}
  <button @click="action('test')">test</button>
  `,
  actions: {
    mounted: toStr(function (ctx) {
      const spell = {
        tmpl: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">\n</link>\n<form><label>First name\n <input name="first_name" placeholder="First name" autocomplete="given-name"></input></label>\n <fieldset>\n <legend>Gender:</legend>\n <input type="radio" id="male" name="gender" checked=""></input>\n <label htmlFor="male">male</label>\n <input type="radio" id="female" name="gender"></input>\n <label htmlFor="female">female</label>\n </fieldset>\n</form>\n<button @click="action(\'showAlert\')">{{ state.btnText }}</button>',
        actions: { mounted: 'ctx.state.btnText = "Нажми на меня"', showAlert: 'alert("Оно живет")' }
      }
      ctx.state.tmpl = spell.tmpl
      ctx.state.actions = spell.actions
    }),
    test: toStr(function (ctx) {
      //alert(JSON.stringify(ctx.state))
      const json = JSON.stringify(ctx.state)
      const base64 = btoa(unescape(encodeURIComponent(json)))
      const url =
        'http://localhost:6006/iframe.html?id=components-spell-base64--default&viewMode=story&'

      window.open(`${url}args=base64:${base64}`)
    })
  }
}
