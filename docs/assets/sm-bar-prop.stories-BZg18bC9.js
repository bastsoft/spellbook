import{S as o}from"./sm-bar-prop-DeQB1wcz.js";import"./sm-tabs-BrqHXxQx.js";import"./s-btn-Bp_TzfJB.js";import"./s-icon-Ddfzw0Tx.js";import"./vue.esm-bundler-BeytHvJU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./select-vb6-D41bfB2u.js";const c={title:"spell-item/spell-markup/sm-bar-prop",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
#компонент для конфигурации определенного тэга        
`}},slots:{}},argTypes:{}},r={render:()=>({components:{SmBarProp:o},template:` <SmBarProp
    v-if="subArrIndex !== null"
    v-model:subArr="subArr"
    v-model:subArrIndex="subArrIndex"
  />
  <pre>
  {{ subArr }}
  </pre>`,data:()=>({subArrIndex:0,subArr:[{tag:"TEST",argsBinded:[],args:{color:"surface-variant"},slots:{default:{children:[],prop:"a"}}}]})})};var e,n,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SmBarProp
    },
    template: \` <SmBarProp
    v-if="subArrIndex !== null"
    v-model:subArr="subArr"
    v-model:subArrIndex="subArrIndex"
  />
  <pre>
  {{ subArr }}
  </pre>\`,
    data: () => ({
      subArrIndex: 0,
      subArr: [{
        tag: 'TEST',
        argsBinded: [],
        args: {
          color: 'surface-variant'
        },
        slots: {
          default: {
            children: [],
            prop: 'a'
          }
        }
      }]
    })
  })
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const i=["Default"];export{r as Default,i as __namedExportsOrder,c as default};
