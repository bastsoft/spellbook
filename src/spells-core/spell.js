const lifecycleHooks = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'beforeUnmount',
  'unmounted'
]

export default function ({ compile, h, components }) {
  return {
    props: {
      tmpl: {
        type: String,
        default: () => ''
      },
      actions: {
        type: Object,
        default: () => {}
      },
      model: {
        type: Object,
        default: () => {}
      }
    },
    render() {
      const component = {
        components,
        data: () => ({
          state: {}
        }),
        methods: {},
        render: compile(this.tmpl)
      }

      Object.keys(this.actions || {}).forEach((actionName) => {
        const action = new Function(['payload'], this.actions[actionName])

        if (lifecycleHooks.includes(actionName)) {
          component[actionName] = action
          return
        }

        component.methods[actionName] = action
      })

      return h(component)
    }
  }
}
