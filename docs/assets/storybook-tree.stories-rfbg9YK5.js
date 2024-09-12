import{S as k}from"./s-btn-Bp_TzfJB.js";import{c as o,j as _,F as S,e as i,o as n,b as d,t as c,h as A,l as g,a as T,k as j,m as D,d as E}from"./vue.esm-bundler-BeytHvJU.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{S as C}from"./storybook-remoute-D_5Y4SCo.js";import"./s-icon-Ddfzw0Tx.js";const f={name:"StorybookElems",components:{SBtn:k},props:{children:{type:Object,default:()=>({})}},data:()=>({expand:{}}),methods:{onExpand(e){this.expand[e]=!this.expand[e]},onSelect(e){this.$emit("select",e);const l={tag:e.title.split("/").pop(),argsBinded:[],args:{},slots:{}};this.$emit("add",l)}}},P={class:"storybook-elems-row"},w=["onClick"],$={key:1},G={class:"storybook-elems__children"};function F(e,b,l,N,O,a){const y=i("SBtn"),v=i("StorybookElems");return n(!0),o(S,null,_(l.children,(r,t)=>(n(),o("div",{class:"storybook-elems",key:t},[d("div",P,[r.value?(n(),o("button",{key:0,onClick:B=>a.onSelect(r.value)},c(t),9,w)):(n(),o("div",$,c(t),1)),Object.keys(r.children).length?(n(),A(y,{key:2,class:"storybook-elems-row__expand",onClick:B=>a.onExpand(t),style:g(`transform: rotate(${e.expand[t]?90:0}deg);`),icon:"expand"},null,8,["onClick","style"])):T("",!0)]),j(d("div",G,[E(v,{children:r.children,onSelect:a.onSelect},null,8,["children","onSelect"])],512),[[D,e.expand[t]]])]))),128)}const V=x(f,[["render",F]]);f.__docgenInfo={displayName:"StorybookElems",exportName:"default",description:"",tags:{},props:[{name:"children",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],events:[{name:"select",type:{names:["undefined"]}},{name:"add",type:{names:["undefined"]}}],sourceFiles:["/Users/petr/project/zaymigo/spellbook/src/components/spell-storybook/storybook-tree/storybook-tree.vue"]};let m=new C;const q={title:"spell-storybook/storybook-tree",component:V,tags:["autodocs"],parameters:{docs:{description:{component:""}},slots:{}},argTypes:{}},s={render:()=>({components:{StorybookTree:V},template:`<label>
    url storybook
    <input v-model="url"/>
    </label>
    <button @click="action('load')">load</button>
    <StorybookTree :children="(entriesTree || {}).children || {}" @add="action('select', $event)"/>
    {{ selectedElem }}`,data:()=>({url:"http://localhost:6007/",selectedElem:null,entriesTree:{children:{VCard:{children:{},value:{type:"story",id:"vcard-vcard--default",name:["Default","Twitter"],title:"VCard",importPath:"./src/stories/VCard/VCard.stories.js",tags:["autodocs","story"]}},VBanner:{children:{VBannerActions:{children:{},value:{id:"vbanner-vbanneractions--default",name:["Default"],title:"VBanner/VBannerActions",importPath:"./src/stories/VBanner/VBannerActions.stories.js"}}}},VAlert:{children:{VAlertTitle:{children:{},value:{id:"valert-valerttitle--default",name:["Default"],title:"VAlert/VAlertTitle",importPath:"./src/stories/VAlert/VAlertTitle.stories.js"}}},value:{id:"valert--default",name:["Default"],title:"VAlert",importPath:"./src/stories/VAlert/VAlert.stories.js"}},form:{children:{VBtn:{children:{VBtnGroup:{children:{},value:{id:"form-vbtn-vbtngroup--default",name:["Default"],title:"form/VBtn/VBtnGroup",importPath:"./src/stories/form/VBtn/VBtnGroup.stories.js"}}},value:{id:"form-vbtn--default",name:["Default"],title:"form/VBtn",importPath:"./src/stories/form/VBtn/VBtn.stories.js"}}}}}}}),methods:{select:function(e){this.selectedElem=e},load:function(){m.loadStorybokIndex(this.url).then(()=>{this.entriesTree=m.getOnlyStoryFromEntries()})}}})};var u,p,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      StorybookTree
    },
    template: \`<label>
    url storybook
    <input v-model="url"/>
    </label>
    <button @click="action('load')">load</button>
    <StorybookTree :children="(entriesTree || {}).children || {}" @add="action('select', $event)"/>
    {{ selectedElem }}\`,
    data: () => ({
      url: 'http://localhost:6007/',
      selectedElem: null,
      entriesTree: {
        children: {
          VCard: {
            children: {},
            value: {
              type: 'story',
              id: 'vcard-vcard--default',
              name: ['Default', 'Twitter'],
              title: 'VCard',
              importPath: './src/stories/VCard/VCard.stories.js',
              tags: ['autodocs', 'story']
            }
          },
          VBanner: {
            children: {
              VBannerActions: {
                children: {},
                value: {
                  id: 'vbanner-vbanneractions--default',
                  name: ['Default'],
                  title: 'VBanner/VBannerActions',
                  importPath: './src/stories/VBanner/VBannerActions.stories.js'
                }
              }
            }
          },
          VAlert: {
            children: {
              VAlertTitle: {
                children: {},
                value: {
                  id: 'valert-valerttitle--default',
                  name: ['Default'],
                  title: 'VAlert/VAlertTitle',
                  importPath: './src/stories/VAlert/VAlertTitle.stories.js'
                }
              }
            },
            value: {
              id: 'valert--default',
              name: ['Default'],
              title: 'VAlert',
              importPath: './src/stories/VAlert/VAlert.stories.js'
            }
          },
          form: {
            children: {
              VBtn: {
                children: {
                  VBtnGroup: {
                    children: {},
                    value: {
                      id: 'form-vbtn-vbtngroup--default',
                      name: ['Default'],
                      title: 'form/VBtn/VBtnGroup',
                      importPath: './src/stories/form/VBtn/VBtnGroup.stories.js'
                    }
                  }
                },
                value: {
                  id: 'form-vbtn--default',
                  name: ['Default'],
                  title: 'form/VBtn',
                  importPath: './src/stories/form/VBtn/VBtn.stories.js'
                }
              }
            }
          }
        }
      }
    }),
    methods: {
      select: function (payload) {
        this.selectedElem = payload;
      },
      load: function () {
        storybookRemoute.loadStorybokIndex(this.url).then(() => {
          this.entriesTree = storybookRemoute.getOnlyStoryFromEntries();
        });
      }
    }
  })
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const H=["Default"];export{s as Default,H as __namedExportsOrder,q as default};
