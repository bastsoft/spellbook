import { compile, h } from 'vue'

export default {
  props: {
    tmpl: {
      type: String,
      default: () => ''
    },
    actions: {
      type: Object,
      default: () => {}
    }
  },
  render: function () {
    if (!this.tmpl) {
      return h('div', {}, ['Loading...'])
    } else {
      const t = h(
        {
          // тут как обычный компонент
          emits: ['action'],
          components: {}, // нужно передовать как параметр
          props: {
            actions: {
              type: Object,
              default: () => {}
            }
          },
          data: () => ({
            state: {},
            conditions: {}
          }),
          mounted() {
            this.action('mounted')
          },
          methods: {
            action(actionName, payload) {
              if (this.actions[actionName]) {
                let action = new Function(['ctx', 'payload'], this.actions[actionName])
                action(
                  {
                    action: this.action,
                    state: this.state,
                    conditions: this.conditions
                  },
                  payload
                )
              }
            }
          },
          render: compile(this.tmpl)
        },
        {
          actions: this.actions
        }
      )

      return t
    }
  }
}
