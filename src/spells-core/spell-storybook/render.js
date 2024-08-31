function base64ToString(base64) {
  console.log(base64)
  const binString = atob(base64)

  return new TextDecoder().decode(Uint8Array.from(binString, (m) => m.codePointAt(0)))
}

import Spell from '../spell'

export default {
  name: 'TestVue',
  components: {
    Spell
  },
  data: () => ({
    tmpl: '',
    actions: {}
  }),
  mounted() {
    const searchObj = window.location.search
      .substring(1)
      .split('&')
      .map((i) => i.split(/=(.*)/))
      .reduce((result, [key, val]) => Object.assign(result, { [key]: val }), {})
    const base64 = (searchObj['args'] || '').replace('base64:', '').replace(/%20/g, '+')
    const json = JSON.parse(base64ToString(base64) || '{}')

    this.tmpl = json.tmpl
    this.actions = json.actions
    this.idata = json.idata

    document.head.insertAdjacentHTML('beforeend', `<style id="stateStyleSelected"></style>`)

    const bc = new BroadcastChannel('test_channel')
    bc.addEventListener('message', (e) => {
      const m = e.data

      if (m.type === 'rerender') {
        this.tmpl = m.payload.tmpl
        this.actions = m.payload.actions
        this.idata = m.payload.idata
      }

      if (m.type === 'selected') {
        console.log(m.payload)
        if (!m.payload) {
          window.stateStyleSelected.innerHTML = ''
          return
        }

        const slots = m.payload.split('-slots-')

        if (!document.querySelector(`[data-spell-index='${m.payload}']`)) {
          slots.pop()
        }

        window.stateStyleSelected.innerHTML = `[data-spell-index='${slots.join('-slots-')}'] {border: 1px solid red;}`
      }
    })

    let selectionMode = 0

    document.addEventListener('keydown', function (event) {
      if (event.code == 'KeyM' && (event.ctrlKey || event.metaKey)) {
        const dataSpells = [...document.querySelectorAll('[data-spell]')]
        console.log('selectionMode : ', selectionMode)
        if (selectionMode === 0) {
          dataSpells.forEach((elem) => {
            elem.onmouseover = function () {
              const dataSpellIndex = elem.getAttribute('data-spell-index')

              if (dataSpellIndex) {
                console.log(dataSpellIndex)
                const bc = new BroadcastChannel('test_channel')
                bc.postMessage({
                  type: 'reselected',
                  payload: dataSpellIndex
                })

                // bc.addEventListener('reselected', (e) => { const m = e.data})
              }
            }
          })
          selectionMode = 1
          return
        }

        if (selectionMode === 1) {
          dataSpells.forEach((elem) => {
            elem.onmouseover = function () {}
          })
          selectionMode = 0
          return
        }

        //window.stateStyleSelected.innerHTML = `[data-spell]:hover {border: 1px solid red;}`
      }
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
