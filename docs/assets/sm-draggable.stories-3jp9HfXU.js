import{S as p}from"./sm-draggable-B2UJJk6D.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./vue.esm-bundler-BeytHvJU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./s-btn-Bp_TzfJB.js";import"./s-icon-Ddfzw0Tx.js";const C={title:"spell-item/spell-markup/sm-draggable",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"компонент для визуального построения и компоновки синтаксического дерева"}},slots:{}},argTypes:{onSelectChild:{action:"@selectChild"},children:{description:"syntaxTree",control:"object"},selectedId:{description:"selectedId",control:{type:"text"}}}},n={args:{children:[{tag:"VBtn",args:{"@click":"action('onClick')",text:"Click me"},argsBinded:[],slots:{}}],selectedId:null}},e={args:{children:[{tag:"VBtn",args:{"@click":"action('onClick')",text:"Click me"},argsBinded:[],slots:{}}],selectedId:"0"}},t={args:{children:[{tag:"VDialog",args:{maxWidth:"500"},argsBinded:[],slots:{activator:{children:[{tag:"VBtn",args:{color:"surface-variant",text:"Open Dialog",variant:"flat","v-bind":"activatorProps"},argsBinded:[],slots:{}}],prop:"{ props: activatorProps }"},default:{children:[{tag:"VCard",args:{title:"Dialog"},argsBinded:[],slots:{default:{children:[{tag:"VCardText",args:{},argsBinded:[],slots:{default:{children:[{args:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}}]}}},{tag:"VCardActions",args:{},argsBinded:[],slots:{default:{children:[{tag:"VSpacer",args:{},argsBinded:[],slots:{}},{tag:"VBtn",args:{text:"Close Dialog","@click":"isActive.value = false"},argsBinded:[],slots:{}}]}}}]}}}],prop:"{ isActive }"}}}],selectedId:"0"}};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [{
      tag: 'VBtn',
      args: {
        '@click': "action('onClick')",
        text: 'Click me'
      },
      argsBinded: [],
      slots: {}
    }],
    selectedId: null
  }
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var o,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [{
      tag: 'VBtn',
      args: {
        '@click': "action('onClick')",
        text: 'Click me'
      },
      argsBinded: [],
      slots: {}
    }],
    selectedId: '0'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,c,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: [{
      tag: 'VDialog',
      args: {
        maxWidth: '500'
      },
      argsBinded: [],
      slots: {
        activator: {
          children: [{
            tag: 'VBtn',
            args: {
              color: 'surface-variant',
              text: 'Open Dialog',
              variant: 'flat',
              'v-bind': 'activatorProps'
            },
            argsBinded: [],
            slots: {}
          }],
          prop: '{ props: activatorProps }'
        },
        default: {
          children: [{
            tag: 'VCard',
            args: {
              title: 'Dialog'
            },
            argsBinded: [],
            slots: {
              default: {
                children: [{
                  tag: 'VCardText',
                  args: {},
                  argsBinded: [],
                  slots: {
                    default: {
                      children: [{
                        args: {
                          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                      }]
                    }
                  }
                }, {
                  tag: 'VCardActions',
                  args: {},
                  argsBinded: [],
                  slots: {
                    default: {
                      children: [{
                        tag: 'VSpacer',
                        args: {},
                        argsBinded: [],
                        slots: {}
                      }, {
                        tag: 'VBtn',
                        args: {
                          text: 'Close Dialog',
                          '@click': 'isActive.value = false'
                        },
                        argsBinded: [],
                        slots: {}
                      }]
                    }
                  }
                }]
              }
            }
          }],
          prop: '{ isActive }'
        }
      }
    }],
    selectedId: '0'
  }
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const V=["Default","Select","Tree"];export{n as Default,e as Select,t as Tree,V as __namedExportsOrder,C as default};
