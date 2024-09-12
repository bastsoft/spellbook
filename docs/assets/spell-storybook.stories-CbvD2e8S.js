import{S as s}from"./spell-storybook-DLDP-1Pd.js";import"./spell-item-CY5g3-JZ.js";import"./spell-markup-YQHFLX9m.js";import"./sm-tabs-BrqHXxQx.js";import"./s-btn-Bp_TzfJB.js";import"./s-icon-Ddfzw0Tx.js";import"./vue.esm-bundler-BeytHvJU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./sm-prism-B2bmUpRw.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./sm-draggable-B2UJJk6D.js";import"./sm-bar-prop-DeQB1wcz.js";import"./select-vb6-D41bfB2u.js";import"./sm-toolbar-CxfPk-66.js";import"./spell-item-actions-7otto3Ij.js";import"./tree-view-BEqjVU0X.js";import"./storybook-remoute-D_5Y4SCo.js";import"./button-vb6-B3dMoNTe.js";const E={title:"spell-storybook",component:s,tags:["autodocs"],parameters:{docs:{description:{component:""}},slots:{}},argTypes:{}},t={render:()=>({components:{SpellStorybook:s},template:` <SpellStorybook 
    v-model="spell"
    v-model:storyUrl="storyUrl"
    v-model:storyTestId="storyTestId"
    @test="onTest"
  "/>
  
  {{state}}`,data:()=>({spell:{tmpl:`<button @click="action('onClick')">{{state.val}}</button>`,actions:{mounted:"ctx.state.val = 1;",onClick:"ctx.state.val += 1;"}},storyUrl:window.location.origin+"/",storyTestId:"components-test--default"}),methods:{onTest:function(r){const i=function(p){const c=String.fromCodePoint(...new TextEncoder().encode(p));return btoa(c)},l=JSON.stringify(this.spell),a=r+i(l);window.open(a)}}})};var o,n,e;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SpellStorybook
    },
    template: \` <SpellStorybook 
    v-model="spell"
    v-model:storyUrl="storyUrl"
    v-model:storyTestId="storyTestId"
    @test="onTest"
  "/>
  
  {{state}}\`,
    data: () => ({
      spell: {
        tmpl: \`<button @click="action('onClick')">{{state.val}}</button>\`,
        actions: {
          mounted: 'ctx.state.val = 1;',
          onClick: 'ctx.state.val += 1;'
        }
      },
      storyUrl: window.location.origin + '/',
      storyTestId: 'components-test--default'
    }),
    methods: {
      onTest: function (payload) {
        const stringToBase64 = function (bytes) {
          const binString = String.fromCodePoint(...new TextEncoder().encode(bytes));
          return btoa(binString);
        };
        const str = JSON.stringify(this.spell);
        const url = payload + stringToBase64(str);
        window.open(url);
      }
    }
  })
}`,...(e=(n=t.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,E as default};
