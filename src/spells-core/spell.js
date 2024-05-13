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
      idata: {
        type: String,
        default: () => '{ "state": {} }'
      }
    },
    render() {
      let idata = {
        state: {}
      }
      const component = {
        components,
        data: () => idata,
        methods: {},
        render: compile(this.tmpl)
      }

      idata = JSON.parse((this.idata || '{ "state": {} }').replace(/\n/g, ''))

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
