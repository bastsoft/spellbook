import { h, compile /*, toRaw*/ } from 'vue'
//import builderElements from './builder.js'

export const toStr = (fun) =>
  fun.toString().split('{').slice(1).join('{').split('}').slice(0, -1).join('}')

export function render(params, args, ctx) {
  const mainElem = ctx.moduleExport

  let components = params.components

  if (!params.components) {
    // если нет components то весь params это components
    components = params
  }

  const actions = mainElem.actions || {}

  return h({
    components,
    data: () => ({
      state: {},
      conditions: {}
    }),
    mounted() {
      this.action('mounted')
    },
    methods: {
      action(actionName, payload) {
        if (actions[actionName]) {
          let action = actions[actionName]

          if (typeof action === 'string') {
            action = new Function(['ctx', 'payload'], action)
          }

          const ctx = {
            action: this.action,
            state: this.state,
            conditions: this.conditions,
            ext: params.ext
          }

          action(ctx, payload)
        }
      }
    },
    render: compile(mainElem.tmpl)
  })
}
