import spellSyntaxTree from '../../spells-core/spell-converter/spell-syntax-tree.js'

import RenderJS from './render.js'
import SpellStorybook from '../../components/spell-storybook/spell-storybook.vue'
import './spell-theme.css'
export default {
  title: 'spellbook'
}

const lifecycleHooksObj = {
  beforeCreate: '',
  created: '',
  beforeMount: 'onBeforeMount',
  mounted: 'onMounted',
  beforeUpdate: 'onBeforeUpdate',
  updated: 'onUpdated',
  activated: 'onActivated',
  deactivated: 'onDeactivated',
  beforeUnmount: 'onBeforeUnmount',
  unmounted: 'onUnmounted'
}
const lifecycleHooks = Object.keys(lifecycleHooksObj)

function saveTextFile(filename, content) {
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.download = filename
  link.href = url
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function loadTextFile() {
  return new Promise((resolve) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'text/plain, application/json, application/javascript'
    input.onchange = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        resolve({
          name: file.name,
          type: file.type,
          text: reader.result
        })
      }
      reader.readAsText(file)
    }
    input.click()
  })
}

export const Constructor = {
  parameters: {
    layout: 'fullscreen'
  },
  args: {},
  render: () => ({
    template: `
    <div class="spell-theme">
    <SpellStorybook 
      v-model="spell"
      v-model:storyUrl="storyUrl"
      v-model:storyTestId="storyTestId"
      @test="onTest"
    />
    <details>
      <summary>save/load</summary>
      <button @click="onSave">save</button>
      <button @click="onLoad">load</button>
      <button @click="onSaveLikeJs">save as js</button>
      <button @click="onSaveLikeVue">save as vue</button>
      <button @click="onSaveLikeVueSetup">save as vue setup</button>
    </details>
    </div>
    
    `,
    components: { SpellStorybook },
    data: () => ({
      spell: {
        tmpl: '',
        actions: {}
      },
      storyUrl: window.location.origin + '/',
      storyTestId: 'spellbook--render'
    }),
    methods: {
      onSave() {
        const fileName = prompt('Enter file name', 'spell.json')

        if (fileName !== null) {
          saveTextFile(fileName, JSON.stringify(this.spell, null, 2))
        }
      },
      onLoad() {
        loadTextFile().then(({ text }) => {
          this.spell = JSON.parse(text)
        })
      },
      onSaveLikeJs() {
        const fileName = prompt('Enter file name', 'Spell.js')

        const component = {
          components: {},
          data: {
            state: {}
          },
          methods: {},
          template: this.spell.tmpl
        }

        component.data = this.spell.idata || '{}'

        Object.keys(this.spell.actions || {}).forEach((actionName) => {
          const action = new Function(['payload'], this.spell.actions[actionName])
          //const action = '(){ ' + this.spell.actions[actionName] + '}'

          if (lifecycleHooks.includes(actionName)) {
            component[actionName] = action.toString()
            return
          }

          component.methods[actionName] = action.toString()
        })

        if (fileName !== null) {
          saveTextFile(
            fileName,
            'export default ' +
              JSON.stringify(component, null, 2)
                .replace(/"template":\s*"(.*)"/, 'template: `$1`')
                .replace(/"(.*)":\s*"function anonymous(.*)"/g, '$1$2')
                .replace(/\(payload\\n\)/g, '(payload)')
                .replace(/\\n/g, '\n')
                .replace(/\\"/g, '"')
                .replace(/"data":\s*"{/, 'data:()=>({')
                .replace(/}",/, '}),')
          )
        }
      },
      onSaveLikeVue() {
        const fileName = prompt('Enter file name', 'Spell.vue')

        const component = {
          components: {},
          data: {
            state: {}
          },
          methods: {}
        }

        component.data = this.spell.idata || '{}'

        Object.keys(this.spell.actions || {}).forEach((actionName) => {
          const action = new Function(['payload'], this.spell.actions[actionName])
          //const action = '(){ ' + this.spell.actions[actionName] + '}'

          if (lifecycleHooks.includes(actionName)) {
            component[actionName] = action.toString()
            return
          }

          component.methods[actionName] = action.toString()
        })

        if (fileName !== null) {
          saveTextFile(
            fileName,
            `
<template>
${this.spell.tmpl.replace(/\\n/g, '\n').replace(/\\"/g, '"')}
</template>

<script>
export default` +
              JSON.stringify(component, null, 2)
                .replace(/"(.*)":\s*"function anonymous(.*)"/g, '$1$2')
                .replace(/\(payload\\n\)/g, '(payload)')
                .replace(/\\n/g, '\n')
                .replace(/\\"/g, '"')
                .replace(/"data":\s*"{/, 'data:()=>({')
                .replace(/}",/, '}),') +
              `
</script>`
          )
        }
      },
      onSaveLikeVueSetup() {
        const fileName = prompt('Enter file name', 'Spell.vue')

        const methods = []

        Object.keys(this.spell.actions || {}).forEach((actionName) => {
          const action = new Function(['payload'], this.spell.actions[actionName])

          if (lifecycleHooks.includes(actionName)) {
            methods.push(
              lifecycleHooksObj[actionName] +
                '(' +
                action
                  .toString()
                  .toString()
                  .replace(/\(payload\n\)/g, '(payload)')
                  .replace('anonymous', '')
                  .replace(/this\.(\w+)/g, '$1.value') +
                ');'
            )
            //component[actionName] = action.toString()
            return
          }

          methods.push(
            `${action
              .toString()
              .replace(/\(payload\n\)/g, '(payload)')
              .replace('anonymous', actionName)
              .replace(/this\.(\w+)/g, '$1.value')}`
          )
        })

        const dataToRefArr = []
        const data = JSON.parse(this.spell.idata || '{}')
        Object.keys(data).forEach((key) => {
          const value = data[key]

          if (typeof value === 'object') {
            dataToRefArr.push(`const ${key} = ref(${JSON.stringify(value, null, 2)});`)
          }

          if (typeof value === 'string') {
            dataToRefArr.push(`const ${key} = ref("${value}");`)
          }

          if (['number', 'boolean'].includes(typeof value)) {
            dataToRefArr.push(`const ${key} = ref(${JSON.stringify(value)});`)
          }
        })

        if (fileName !== null) {
          saveTextFile(
            fileName,
            `
<template>
${this.spell.tmpl.replace(/\\n/g, '\n').replace(/\\"/g, '"')}
</template>

<script setup>

${dataToRefArr.join('\n')}


${methods.join('\n')}

</script>`
          )
        }
      },
      onTest(urlTest) {
        const spell = JSON.parse(JSON.stringify(this.spell))
        spellSyntaxTree.isTest = true
        const syntaxTree = spellSyntaxTree.parse(spell.tmpl)
        spell.tmpl = spellSyntaxTree.stringify(syntaxTree)
        spellSyntaxTree.isTest = false
        const str = JSON.stringify(spell)
        const binString = String.fromCodePoint(...new TextEncoder().encode(str))
        const url = urlTest + btoa(binString)
        window.open(url)
      }
    }
  })
}

export const Render = {
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    base64: {
      description: 'base64',
      control: {
        type: 'text'
      }
    }
  },
  args: {},
  render: () => ({
    components: { RenderJS },
    template: '<RenderJS/>'
  })
}
