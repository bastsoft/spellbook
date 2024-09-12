import{S as l}from"./spell-item-CY5g3-JZ.js";import"./spell-markup-YQHFLX9m.js";import"./sm-tabs-BrqHXxQx.js";import"./s-btn-Bp_TzfJB.js";import"./s-icon-Ddfzw0Tx.js";import"./vue.esm-bundler-BeytHvJU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./sm-prism-B2bmUpRw.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./sm-draggable-B2UJJk6D.js";import"./sm-bar-prop-DeQB1wcz.js";import"./select-vb6-D41bfB2u.js";import"./sm-toolbar-CxfPk-66.js";import"./spell-item-actions-7otto3Ij.js";const w={title:"spell-item",component:l,tags:["autodocs"],parameters:{docs:{description:{component:""}},slots:{}},argTypes:{}},e={args:{},render:n=>({components:{SpellItem:l},data:()=>({state:{}}),setup(){return{args:n}},template:`<SpellItem v-model="state">
    <template #toolbar>
      template toolbar
    </template>
  </SpellItem>
  {{state}}`})},t={args:{},render:n=>({components:{SpellItem:l},data:()=>({spell:{tmpl:`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
</link>
<form><label>{{i18n['First name']}}
 <input v-model="state.fName" name="first_name" :placeholder="i18n['First name']" autocomplete="given-name"></input></label>
 <fieldset>
 <legend>Gender:</legend>
 <input type="radio" id="male" name="gender" checked=""></input>
 <label htmlFor="male">male</label>
 <input type="radio" id="female" name="gender"></input>
 <label htmlFor="female">female</label>
 </fieldset>
</form>
<button @click="showAlert">{{ state.btnText }}</button>`,idata:`{
  state:{},
  i18n:{
    "First name": "Имя"
  }
}`,actions:{mounted:'this.state.btnText = "Нажми на меня"',showAlert:"alert(JSON.stringify(this.state))"}},storyUrl:window.location.origin+"/",storyTestId:"spellbook--render"}),setup(){return{args:n}},template:`<SpellItem v-model="spell"/>
    <pre>{{spell}}</pre>`})};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      SpellItem
    },
    data: () => ({
      state: {}
    }),
    setup() {
      return {
        args
      };
    },
    template: \`<SpellItem v-model="state">
    <template #toolbar>
      template toolbar
    </template>
  </SpellItem>
  {{state}}\`
  })
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var o,m,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      SpellItem
    },
    data: () => ({
      spell: {
        tmpl: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">\\n</link>\\n<form><label>{{i18n[\\'First name\\']}}\\n <input v-model="state.fName" name="first_name" :placeholder="i18n[\\'First name\\']" autocomplete="given-name"></input></label>\\n <fieldset>\\n <legend>Gender:</legend>\\n <input type="radio" id="male" name="gender" checked=""></input>\\n <label htmlFor="male">male</label>\\n <input type="radio" id="female" name="gender"></input>\\n <label htmlFor="female">female</label>\\n </fieldset>\\n</form>\\n<button @click="showAlert">{{ state.btnText }}</button>',
        idata: '{\\n  state:{},\\n  i18n:{\\n    "First name": "Имя"\\n  }\\n}',
        actions: {
          mounted: 'this.state.btnText = "Нажми на меня"',
          showAlert: 'alert(JSON.stringify(this.state))'
        }
      },
      storyUrl: window.location.origin + '/',
      storyTestId: 'spellbook--render'
    }),
    setup() {
      return {
        args
      };
    },
    template: \`<SpellItem v-model="spell"/>
    <pre>{{spell}}</pre>\`
  })
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const x=["Default","ExampleForm"];export{e as Default,t as ExampleForm,x as __namedExportsOrder,w as default};
