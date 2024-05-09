/**
 * реальный код который используется в боевой анкете не трогать
 */
export default function ({ compile, h ,components, ctxExt }) {
  return {
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
    render() {
      const t = h(
        {
          emits: ['action'],
          components,
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
              if ((this.actions || {})[actionName]) {
                let action = new Function(['ctx', 'payload'], this.actions[actionName])
                action(
                  {
                    action: this.action,
                    state: this.state,
                    conditions: this.conditions,
                    $emit: (name, payload) => {
                      this.$emit(name, payload)
                    },
                    ...(ctxExt || {})
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
