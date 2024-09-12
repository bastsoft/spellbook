import{S as n}from"./select-vb6-D41bfB2u.js";import"./vue.esm-bundler-BeytHvJU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"vb60/2_atoms/SelectVB6",component:n,tags:["autodocs"],parameters:{docs:{description:{component:""}},slots:{}},argTypes:{}},e={args:{options:["5 - Incredible!","4 - Great!","3 - Pretty good","2 - Not so great","1 - Unfortunate"],selectKey:"3 - Pretty good"},render:s=>({components:{SelectVB6:n},data(){return{...s}},template:`
    <SelectVB6 v-model="selectKey" :options="options" />
    `})};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    options: ['5 - Incredible!', '4 - Great!', '3 - Pretty good', '2 - Not so great', '1 - Unfortunate'],
    selectKey: '3 - Pretty good'
  },
  render: args => ({
    components: {
      SelectVB6
    },
    data() {
      return {
        ...args
      };
    },
    template: \`
    <SelectVB6 v-model="selectKey" :options="options" />
    \`
  })
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,l as default};
