import { h } from 'vue'
import spell from '../spell'

const Spell = spell(h)

export default {
  name: 'TestVue',
  components: {
    Spell
  },
  data: () => ({
    tmpl: '',
    actions: {},
    idata: ''
  }),
  mounted() {
    // const searchObj = window.location.search
    //   .substring(1)
    //   .split('&')
    //   .map((i) => i.split(/=(.*)/))
    //   .reduce((result, [key, val]) => Object.assign(result, { [key]: val }), {})
    // const base64 = (searchObj['args'] || '').replace('base64:', '').replace(/%20/g, '+')
    // const json = JSON.parse(base64ToString(base64) || '{}')

    // this.tmpl = json.tmpl
    // this.actions = json.actions
    // this.idata = json.idata

    const bc = new BroadcastChannel('test_channel')
    bc.addEventListener('message', (e) => {
      const m = e.data

      if (m.type === 'rerender') {
        this.tmpl = m.payload.tmpl
        this.actions = m.payload.actions
        this.idata = m.payload.idata
      }
    })
    bc.postMessage({
      type: 'init'
    })
  },
  template: `
    <Spell
      :tmpl="tmpl"
      :actions="actions"
      :idata="idata"
    />
    `
}
