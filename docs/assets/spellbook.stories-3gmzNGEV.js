import{s as i}from"./spell-markup-YQHFLX9m.js";import{s as N}from"./vue.esm-bundler-BeytHvJU.js";import{S as $}from"./spell-storybook-DLDP-1Pd.js";import{B as J}from"./button-vb6-B3dMoNTe.js";import"./sm-tabs-BrqHXxQx.js";import"./s-btn-Bp_TzfJB.js";import"./s-icon-Ddfzw0Tx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./sm-prism-B2bmUpRw.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./sm-draggable-B2UJJk6D.js";import"./sm-bar-prop-DeQB1wcz.js";import"./select-vb6-D41bfB2u.js";import"./sm-toolbar-CxfPk-66.js";import"./spell-item-CY5g3-JZ.js";import"./spell-item-actions-7otto3Ij.js";import"./tree-view-BEqjVU0X.js";import"./storybook-remoute-D_5Y4SCo.js";function x(o){const t=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","activated","deactivated","beforeUnmount","unmounted"];return{name:"Spell",props:{tmpl:{type:String,default:()=>""},actions:{type:Object,default:()=>{}},idata:{type:String,default:()=>'{ "state": {} }'}},render(){const e={data:()=>new Function(["payload"]," return "+this.idata||'{ "state": {} }')(),methods:{},template:this.tmpl};return Object.keys(this.actions||{}).forEach(a=>{const n=new Function(["payload"],this.actions[a]);if(t.includes(a)){e[a]=n;return}e.methods[a]=n}),o(e)}}}function B(o){console.log(o);const t=atob(o);return new TextDecoder().decode(Uint8Array.from(t,e=>e.codePointAt(0)))}const V=x(N),j={name:"TestVue",components:{Spell:V},data:()=>({tmpl:"",actions:{}}),mounted(){const t=(window.location.search.substring(1).split("&").map(s=>s.split(/=(.*)/)).reduce((s,[l,r])=>Object.assign(s,{[l]:r}),{}).args||"").replace("base64:","").replace(/%20/g,"+"),e=JSON.parse(B(t)||"{}");this.tmpl=e.tmpl,this.actions=e.actions,this.idata=e.idata,document.head.insertAdjacentHTML("beforeend",'<style id="stateStyleSelected"></style>'),new BroadcastChannel("test_channel").addEventListener("message",s=>{const l=s.data;if(l.type==="rerender"&&(this.tmpl=l.payload.tmpl,this.actions=l.payload.actions,this.idata=l.payload.idata),l.type==="selected"){if(console.log(l.payload),!l.payload){window.stateStyleSelected.innerHTML="";return}const r=l.payload.split("-slots-");document.querySelector(`[data-spell-index='${l.payload}']`)||r.pop(),window.stateStyleSelected.innerHTML=`[data-spell-index='${r.join("-slots-")}'] {border: 1px solid red;}`}});let n=0;document.addEventListener("keydown",function(s){if(s.code=="KeyM"&&(s.ctrlKey||s.metaKey)){const l=[...document.querySelectorAll("[data-spell]")];if(console.log("selectionMode : ",n),n===0){l.forEach(r=>{r.onmouseover=function(){const u=r.getAttribute("data-spell-index");u&&(console.log(u),new BroadcastChannel("test_channel").postMessage({type:"reselected",payload:u}))}}),n=1;return}if(n===1){l.forEach(r=>{r.onmouseover=function(){}}),n=0;return}}})},template:`
    <Spell
      :tmpl="tmpl"
      :actions="actions"
      :idata="idata"
    />
    `},E=x(N),L={name:"TestVue",components:{Spell:E},data:()=>({tmpl:"",actions:{},idata:""}),mounted(){const o=new BroadcastChannel("test_channel");o.addEventListener("message",t=>{const e=t.data;e.type==="rerender"&&(this.tmpl=e.payload.tmpl,this.actions=e.payload.actions,this.idata=e.payload.idata)}),o.postMessage({type:"init"})},template:`
    <Spell
      :tmpl="tmpl"
      :actions="actions"
      :idata="idata"
    />
    `},ee={title:"spellbook"},O={beforeCreate:"",created:"",beforeMount:"onBeforeMount",mounted:"onMounted",beforeUpdate:"onBeforeUpdate",updated:"onUpdated",activated:"onActivated",deactivated:"onDeactivated",beforeUnmount:"onBeforeUnmount",unmounted:"onUnmounted"},y=Object.keys(O);function c(o,t){const e=new Blob([t],{type:"text/plain"}),a=URL.createObjectURL(e),n=document.createElement("a");n.download=o,n.href=a,document.body.appendChild(n),n.click(),document.body.removeChild(n)}function R(){return new Promise(o=>{const t=document.createElement("input");t.type="file",t.accept="text/plain, application/json, application/javascript",t.onchange=e=>{const a=e.target.files[0],n=new FileReader;n.onload=()=>{o({name:a.name,type:a.type,text:n.result})},n.readAsText(a)},t.click()})}const p={parameters:{layout:"fullscreen"},args:{},render:()=>({template:`
    <div class="spell-theme">
    <SpellStorybook 
      v-model="spell"
      v-model:storyUrl="storyUrl"
      v-model:storyTestId="storyTestId"
      @test="onTest"
    >
      <ButtonVb6 @click="onTestRemote">test</ButtonVb6>
      <ButtonVb6 @click="onSave">save</ButtonVb6>
      <ButtonVb6 @click="onLoad">load</ButtonVb6>
      <ButtonVb6 @click="onSaveLikeJs">save as js</ButtonVb6>
      <ButtonVb6 @click="onSaveLikeVue">save as vue</ButtonVb6>
      <ButtonVb6 @click="onSaveLikeVueSetup">save as vue setup</ButtonVb6>
    </SpellStorybook>
    
    </div>
    
    `,components:{SpellStorybook:$,ButtonVb6:J},data:()=>({spell:{tmpl:"",actions:{}},storyUrl:(window.location.origin+window.location.pathname).replace("iframe.html",""),storyTestId:"spellbook--render"}),methods:{onSave(){const o=prompt("Enter file name","spell.json");o!==null&&c(o,JSON.stringify(this.spell,null,2))},onLoad(){R().then(({text:o})=>{this.spell=JSON.parse(o)})},onSaveLikeJs(){const o=prompt("Enter file name","Spell.js"),t={components:{},data:{state:{}},methods:{},template:this.spell.tmpl};t.data=this.spell.idata||"{}",Object.keys(this.spell.actions||{}).forEach(e=>{const a=new Function(["payload"],this.spell.actions[e]);if(y.includes(e)){t[e]=a.toString();return}t.methods[e]=a.toString()}),o!==null&&c(o,"export default "+JSON.stringify(t,null,2).replace(/"template":\s*"(.*)"/,"template: `$1`").replace(/"(.*)":\s*"function anonymous(.*)"/g,"$1$2").replace(/\(payload\\n\)/g,"(payload)").replace(/\\n/g,`
`).replace(/\\"/g,'"').replace(/"data":\s*"{/,"data:()=>({").replace(/}",/,"}),"))},onSaveLikeVue(){const o=prompt("Enter file name","Spell.vue"),t={components:{},data:{state:{}},methods:{}};t.data=this.spell.idata||"{}",Object.keys(this.spell.actions||{}).forEach(e=>{const a=new Function(["payload"],this.spell.actions[e]);if(y.includes(e)){t[e]=a.toString();return}t.methods[e]=a.toString()}),o!==null&&c(o,`
<template>
${this.spell.tmpl.replace(/\\n/g,`
`).replace(/\\"/g,'"')}
</template>

<script>
export default`+JSON.stringify(t,null,2).replace(/"(.*)":\s*"function anonymous(.*)"/g,"$1$2").replace(/\(payload\\n\)/g,"(payload)").replace(/\\n/g,`
`).replace(/\\"/g,'"').replace(/"data":\s*"{/,"data:()=>({").replace(/}",/,"}),")+`
<\/script>`)},onSaveLikeVueSetup(){const o=prompt("Enter file name","Spell.vue"),t=[];Object.keys(this.spell.actions||{}).forEach(n=>{const s=new Function(["payload"],this.spell.actions[n]);if(y.includes(n)){t.push(O[n]+"("+s.toString().toString().replace(/\(payload\n\)/g,"(payload)").replace("anonymous","").replace(/this\.(\w+)/g,"$1.value")+");");return}t.push(`${s.toString().replace(/\(payload\n\)/g,"(payload)").replace("anonymous",n).replace(/this\.(\w+)/g,"$1.value")}`)});const e=[],a=JSON.parse(this.spell.idata||"{}");Object.keys(a).forEach(n=>{const s=a[n];typeof s=="object"&&e.push(`const ${n} = ref(${JSON.stringify(s,null,2)});`),typeof s=="string"&&e.push(`const ${n} = ref("${s}");`),["number","boolean"].includes(typeof s)&&e.push(`const ${n} = ref(${JSON.stringify(s)});`)}),o!==null&&c(o,`
<template>
${this.spell.tmpl.replace(/\\n/g,`
`).replace(/\\"/g,'"')}
</template>

<script setup>

${e.join(`
`)}


${t.join(`
`)}

<\/script>`)},onTest(o){const t=JSON.parse(JSON.stringify(this.spell));i.isTest=!0;const e=i.parse(t.tmpl);t.tmpl=i.stringify(e),i.isTest=!1;const a=JSON.stringify(t),n=String.fromCodePoint(...new TextEncoder().encode(a)),s=o+btoa(n);window.open(s,"spelltestbase64")},onTestRemote(){const o=`${this.storyUrl}iframe.html??args=&id=spellbook--render-sync&viewMode=story`,t=JSON.parse(JSON.stringify(this.spell));i.isTest=!0;const e=i.parse(t.tmpl);t.tmpl=i.stringify(e),i.isTest=!1;const a=new BroadcastChannel("test_channel");a.addEventListener("message",n=>{const s=n.data;console.log(s.type),s.type==="init"&&a.postMessage({type:"rerender",payload:t})}),window.open(o,"spelltest")}}})},d={parameters:{layout:"fullscreen"},argTypes:{base64:{description:"base64",control:{type:"text"}}},args:{},render:()=>({components:{RenderJS:j},template:"<RenderJS/>"})},m={parameters:{layout:"fullscreen"},render:()=>({components:{RenderSyncJS:L},template:"<RenderSyncJS/>"})};var f,S,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: {},
  render: () => ({
    template: \`
    <div class="spell-theme">
    <SpellStorybook 
      v-model="spell"
      v-model:storyUrl="storyUrl"
      v-model:storyTestId="storyTestId"
      @test="onTest"
    >
      <ButtonVb6 @click="onTestRemote">test</ButtonVb6>
      <ButtonVb6 @click="onSave">save</ButtonVb6>
      <ButtonVb6 @click="onLoad">load</ButtonVb6>
      <ButtonVb6 @click="onSaveLikeJs">save as js</ButtonVb6>
      <ButtonVb6 @click="onSaveLikeVue">save as vue</ButtonVb6>
      <ButtonVb6 @click="onSaveLikeVueSetup">save as vue setup</ButtonVb6>
    </SpellStorybook>
    
    </div>
    
    \`,
    components: {
      SpellStorybook,
      ButtonVb6
    },
    data: () => ({
      spell: {
        tmpl: '',
        actions: {}
      },
      storyUrl: (window.location.origin + window.location.pathname).replace('iframe.html', ''),
      storyTestId: 'spellbook--render'
    }),
    methods: {
      onSave() {
        const fileName = prompt('Enter file name', 'spell.json');
        if (fileName !== null) {
          saveTextFile(fileName, JSON.stringify(this.spell, null, 2));
        }
      },
      onLoad() {
        loadTextFile().then(({
          text
        }) => {
          this.spell = JSON.parse(text);
        });
      },
      onSaveLikeJs() {
        const fileName = prompt('Enter file name', 'Spell.js');
        const component = {
          components: {},
          data: {
            state: {}
          },
          methods: {},
          template: this.spell.tmpl
        };
        component.data = this.spell.idata || '{}';
        Object.keys(this.spell.actions || {}).forEach(actionName => {
          const action = new Function(['payload'], this.spell.actions[actionName]);
          //const action = '(){ ' + this.spell.actions[actionName] + '}'

          if (lifecycleHooks.includes(actionName)) {
            component[actionName] = action.toString();
            return;
          }
          component.methods[actionName] = action.toString();
        });
        if (fileName !== null) {
          saveTextFile(fileName, 'export default ' + JSON.stringify(component, null, 2).replace(/"template":\\s*"(.*)"/, 'template: \`$1\`').replace(/"(.*)":\\s*"function anonymous(.*)"/g, '$1$2').replace(/\\(payload\\\\n\\)/g, '(payload)').replace(/\\\\n/g, '\\n').replace(/\\\\"/g, '"').replace(/"data":\\s*"{/, 'data:()=>({').replace(/}",/, '}),'));
        }
      },
      onSaveLikeVue() {
        const fileName = prompt('Enter file name', 'Spell.vue');
        const component = {
          components: {},
          data: {
            state: {}
          },
          methods: {}
        };
        component.data = this.spell.idata || '{}';
        Object.keys(this.spell.actions || {}).forEach(actionName => {
          const action = new Function(['payload'], this.spell.actions[actionName]);
          //const action = '(){ ' + this.spell.actions[actionName] + '}'

          if (lifecycleHooks.includes(actionName)) {
            component[actionName] = action.toString();
            return;
          }
          component.methods[actionName] = action.toString();
        });
        if (fileName !== null) {
          saveTextFile(fileName, \`
<template>
\${this.spell.tmpl.replace(/\\\\n/g, '\\n').replace(/\\\\"/g, '"')}
</template>

<script>
export default\` + JSON.stringify(component, null, 2).replace(/"(.*)":\\s*"function anonymous(.*)"/g, '$1$2').replace(/\\(payload\\\\n\\)/g, '(payload)').replace(/\\\\n/g, '\\n').replace(/\\\\"/g, '"').replace(/"data":\\s*"{/, 'data:()=>({').replace(/}",/, '}),') + \`
<\/script>\`);
        }
      },
      onSaveLikeVueSetup() {
        const fileName = prompt('Enter file name', 'Spell.vue');
        const methods = [];
        Object.keys(this.spell.actions || {}).forEach(actionName => {
          const action = new Function(['payload'], this.spell.actions[actionName]);
          if (lifecycleHooks.includes(actionName)) {
            methods.push(lifecycleHooksObj[actionName] + '(' + action.toString().toString().replace(/\\(payload\\n\\)/g, '(payload)').replace('anonymous', '').replace(/this\\.(\\w+)/g, '$1.value') + ');');
            //component[actionName] = action.toString()
            return;
          }
          methods.push(\`\${action.toString().replace(/\\(payload\\n\\)/g, '(payload)').replace('anonymous', actionName).replace(/this\\.(\\w+)/g, '$1.value')}\`);
        });
        const dataToRefArr = [];
        const data = JSON.parse(this.spell.idata || '{}');
        Object.keys(data).forEach(key => {
          const value = data[key];
          if (typeof value === 'object') {
            dataToRefArr.push(\`const \${key} = ref(\${JSON.stringify(value, null, 2)});\`);
          }
          if (typeof value === 'string') {
            dataToRefArr.push(\`const \${key} = ref("\${value}");\`);
          }
          if (['number', 'boolean'].includes(typeof value)) {
            dataToRefArr.push(\`const \${key} = ref(\${JSON.stringify(value)});\`);
          }
        });
        if (fileName !== null) {
          saveTextFile(fileName, \`
<template>
\${this.spell.tmpl.replace(/\\\\n/g, '\\n').replace(/\\\\"/g, '"')}
</template>

<script setup>

\${dataToRefArr.join('\\n')}


\${methods.join('\\n')}

<\/script>\`);
        }
      },
      onTest(urlTest) {
        const spell = JSON.parse(JSON.stringify(this.spell));
        spellSyntaxTree.isTest = true;
        const syntaxTree = spellSyntaxTree.parse(spell.tmpl);
        spell.tmpl = spellSyntaxTree.stringify(syntaxTree);
        spellSyntaxTree.isTest = false;
        const str = JSON.stringify(spell);
        const binString = String.fromCodePoint(...new TextEncoder().encode(str));
        const url = urlTest + btoa(binString);
        window.open(url, 'spelltestbase64');
      },
      onTestRemote() {
        const url = \`\${this.storyUrl}iframe.html??args=&id=spellbook--render-sync&viewMode=story\`;
        //http://localhost:7086/iframe.html?args=&id=spellbook--render-sync&viewMode=story

        const spell = JSON.parse(JSON.stringify(this.spell));
        spellSyntaxTree.isTest = true;
        const syntaxTree = spellSyntaxTree.parse(spell.tmpl);
        spell.tmpl = spellSyntaxTree.stringify(syntaxTree);
        spellSyntaxTree.isTest = false;
        const bc = new BroadcastChannel('test_channel');
        bc.addEventListener('message', e => {
          const m = e.data;
          console.log(m.type);
          if (m.type === 'init') {
            bc.postMessage({
              type: 'rerender',
              payload: spell
            });
          }
        });
        window.open(url, 'spelltest');
      }
    }
  })
}`,...(h=(S=p.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var g,b,v;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    components: {
      RenderJS
    },
    template: '<RenderJS/>'
  })
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var T,k,w;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    components: {
      RenderSyncJS
    },
    template: '<RenderSyncJS/>'
  })
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const te=["Constructor","Render","RenderSync"];export{p as Constructor,d as Render,m as RenderSync,te as __namedExportsOrder,ee as default};
