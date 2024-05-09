function base64ToString(base64) {
  console.log(base64)
  const binString = atob(base64)

  return new TextDecoder().decode(Uint8Array.from(binString, (m) => m.codePointAt(0)))
}

export default {
  name: 'TestVue',
  // компонент spell будет глобальным
  // import spell from '../spell.js'
  // components: {
  //   Spell: spell({
  //     components,
  //     ctxExt: {}
  //   })
  // },
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
    const base64 = (searchObj['args'] || "").replace('base64:', '').replace(/%20/g, '+')
    const json = JSON.parse(base64ToString(base64) || "{}")

    this.tmpl = json.tmpl
    this.actions = json.actions
  },
  template: `
    <Spell
      :tmpl="tmpl"
      :actions="actions"
    />
    `
}
