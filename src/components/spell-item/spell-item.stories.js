import SpellItem from './spell-item.vue'

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
  argTypes: {}
}

export const Default = {
  args: {},
  render: (args) => ({
    components: { SpellItem },
    data: () => ({
      state: {}
    }),
    setup() {
      return { args }
    },
    template: `<SpellItem v-model="state">
    <template #toolbar>
      template toolbar
    </template>
  </SpellItem>
  {{state}}`
  })
}

export const ExampleForm = {
  args: {},
  render: (args) => ({
    components: { SpellItem },
    data: () => ({
      spell: {
        tmpl: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">\n</link>\n<form><label>{{i18n[\'First name\']}}\n <input v-model="state.fName" name="first_name" :placeholder="i18n[\'First name\']" autocomplete="given-name"></input></label>\n <fieldset>\n <legend>Gender:</legend>\n <input type="radio" id="male" name="gender" checked=""></input>\n <label htmlFor="male">male</label>\n <input type="radio" id="female" name="gender"></input>\n <label htmlFor="female">female</label>\n </fieldset>\n</form>\n<button @click="showAlert">{{ state.btnText }}</button>',
        idata: '{\n  "state":{},\n  "i18n":{\n    "First name": "Имя"\n  }\n}',
        actions: {
          mounted: 'this.state.btnText = "Нажми на меня"',
          showAlert: 'alert(JSON.stringify(this.state))'
        }
      },
      storyUrl: window.location.origin + '/',
      storyTestId: 'spellbook--render'
    }),
    setup() {
      return { args }
    },
    methods: {
      onTest() {
        const json = JSON.stringify(this.spell)
        const base64 = btoa(unescape(encodeURIComponent(json)))
        const url = `${this.storyUrl}iframe.html?id=${this.storyTestId}&viewMode=story&`

        window.open(`${url}args=base64:${base64}`)
      }
    },
    template: `<SpellItem v-model="spell"/>
    <pre>{{spell}}</pre>
    <button @click="onTest">test</button>`
  })
}
