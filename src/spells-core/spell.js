import { h } from 'vue'

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

export default {
  name: 'Spell',
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
    const component = {
      data: () => new Function(['payload'], ' return ' + this.idata || '{ "state": {} }')(),
      methods: {},
      template: this.tmpl
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
