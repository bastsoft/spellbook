import{S as m}from"./s-btn-Bp_TzfJB.js";import{c as a,b,r as s,F as o,j as c,e as p,o as n,i as l,d as f,f as g,t as T}from"./vue.esm-bundler-BeytHvJU.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";const i={name:"SmTabs",components:{SBtn:m},props:{tabs:{type:Array,required:!0,default:()=>[]},tab:{type:String}},data:()=>({localCurrentTab:null}),computed:{currentTab:{get(){return this.tab},set(e){this.$emit("update:tab",e)}}},watch:{localCurrentTab(e){this.currentTab=e},currentTab(e){this.localCurrentTab=e}},mounted(){this.localCurrentTab=this.tabs[0]}},S={class:"sm-tabs"};function y(e,h,u,v,_,$){const d=p("SBtn");return n(),a(o,null,[b("div",S,[s(e.$slots,"add"),(n(!0),a(o,null,c(u.tabs,(t,r)=>(n(),a("div",{key:t.toString()+r,class:l(["sm-tabs-tab",{_active:e.localCurrentTab===t}])},[f(d,{class:l(["sm-tabs-button"]),variant:"text",text:t,onClick:k=>e.localCurrentTab=t.toString()},null,8,["text","onClick"]),s(e.$slots,"del",{index:r,tab:e.localCurrentTab})],2))),128))]),s(e.$slots,"default",{nameClass:"sm-tabs-content",tab:e.localCurrentTab},()=>[g(T(e.localCurrentTab),1)])],64)}const F=C(i,[["render",y]]);i.__docgenInfo={displayName:"SmTabs",exportName:"default",description:"",tags:{},props:[{name:"tabs",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"tab",type:{name:"string"}}],events:[{name:"update:tab",type:{names:["undefined"]}}],slots:[{name:"add"},{name:"del",scoped:!0,bindings:[{name:"index",title:"binding"},{name:"tab",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"nameClass",title:"binding"},{name:"tab",title:"binding"}]}],sourceFiles:["/Users/petr/project/zaymigo/spellbook/src/uikit/sm-tabs/sm-tabs.vue"]};export{F as S};