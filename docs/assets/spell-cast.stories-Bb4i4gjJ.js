import{S as f}from"./spell-storybook-DLDP-1Pd.js";import{c as S,b as n,h as g,a as h,r as U,e as b,o as l}from"./vue.esm-bundler-BeytHvJU.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as C}from"./s-icon-Ddfzw0Tx.js";import"./spell-item-CY5g3-JZ.js";import"./spell-markup-YQHFLX9m.js";import"./sm-tabs-BrqHXxQx.js";import"./s-btn-Bp_TzfJB.js";import"./sm-prism-B2bmUpRw.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./sm-draggable-B2UJJk6D.js";import"./sm-bar-prop-DeQB1wcz.js";import"./select-vb6-D41bfB2u.js";import"./sm-toolbar-CxfPk-66.js";import"./spell-item-actions-7otto3Ij.js";import"./tree-view-BEqjVU0X.js";import"./storybook-remoute-D_5Y4SCo.js";import"./button-vb6-B3dMoNTe.js";function I(e){const o=atob(e);return new TextDecoder().decode(Uint8Array.from(o,r=>r.codePointAt(0)))}function d(e){const o=String.fromCodePoint(...new TextEncoder().encode(e));return btoa(o)}const c={name:"SpellCast",components:{SpellStorybook:f},props:{modelValue:{type:String,default:""},storybookUrl:{type:String,default:""}},data:()=>({storyUrl:"",storyTestId:"spellbook--render",isInit:!1,code:{}}),watch:{modelValue:{immediate:!0,handler(){if(!this.isInit){const e=I(this.modelValue);try{this.code=JSON.parse(e)}catch{this.code={}}}}}},mounted(){this.storyUrl=this.storybookUrl},methods:{onOpen(){this.isInit=!0,this.$refs.dialog.showModal()},onSave(){const e=JSON.stringify(this.code);this.$emit("update:modelValue",d(e)),this.$refs.dialog.close()},onTest(e){const o=JSON.stringify(this.code),r=e+d(o);window.open(r)}}},T={class:"spell-cast"},V={class:"spell-cast-dialog",ref:"dialog"},v=n("form",{method:"dialog"},[n("button",{class:"spell-cast-dialog__close"},"✕")],-1);function w(e,o,r,_,N,s){const y=b("SpellStorybook");return l(),S("div",T,[n("dialog",V,[v,e.isInit?(l(),g(y,{key:0,modelValue:e.code,"onUpdate:modelValue":o[0]||(o[0]=t=>e.code=t),storyUrl:e.storyUrl,"onUpdate:storyUrl":o[1]||(o[1]=t=>e.storyUrl=t),storyTestId:e.storyTestId,"onUpdate:storyTestId":o[2]||(o[2]=t=>e.storyTestId=t),onTest:s.onTest},null,8,["modelValue","storyUrl","storyTestId","onTest"])):h("",!0),n("button",{class:"spell-cast-dialog__save",onClick:o[3]||(o[3]=(...t)=>s.onSave&&s.onSave(...t))},"Save")],512),n("button",{onClick:o[4]||(o[4]=(...t)=>s.onOpen&&s.onOpen(...t))},[U(e.$slots,"default")])])}const u=k(c,[["render",w]]);c.__docgenInfo={displayName:"SpellCast",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"storybookUrl",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/Users/petr/project/zaymigo/spellbook/src/components/spell-cast/spell-cast.vue"]};const Q={title:"components/spell-cast",component:u,tags:["autodocs"],parameters:{docs:{description:{component:""}},slots:{}},argTypes:{}},a={render:()=>({components:{SpellCast:u,sIcon:C},template:`<SpellCast 
    style="margin: 0 20px;"
    :modelValue="code"
    @keydown.stop
    @drop.stop
    @update:model-value="onUpdateCode"
    storybookUrl="http://localhost:6006/"
    >
      <sIcon name="wizard"/>
    </SpellCast>
    {{code}}`,data:()=>({code:""}),methods:{onUpdateCode(e){this.code=e}}})};var p,i,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SpellCast,
      sIcon
    },
    template: \`<SpellCast 
    style="margin: 0 20px;"
    :modelValue="code"
    @keydown.stop
    @drop.stop
    @update:model-value="onUpdateCode"
    storybookUrl="http://localhost:6006/"
    >
      <sIcon name="wizard"/>
    </SpellCast>
    {{code}}\`,
    data: () => ({
      code: ''
    }),
    methods: {
      onUpdateCode(payload) {
        this.code = payload;
      }
    }
  })
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,Q as default};
