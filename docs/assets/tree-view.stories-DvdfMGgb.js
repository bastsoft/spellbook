import{T as u}from"./tree-view-BEqjVU0X.js";import"./vue.esm-bundler-BeytHvJU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"vb60/3_molecules/TreeView",component:u,tags:["autodocs"],parameters:{docs:{description:{component:""}},slots:{}},argTypes:{}},e={args:{tree:{keyTree:{children:{},value:"treeValue"},details:{value:"У узлового элемента value бесполезно",children:{inerrValue:{children:{},value:"inerrValue"},valueAsObj:{children:{},value:{text:"keyValueAsObj"}}}}}},render:a=>({components:{TreeView:u},data(){return{...a}},methods:{onSelect(l){alert(JSON.stringify(l))}},template:`
      <TreeView :children="tree" @select="onSelect" />
    `})};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    tree: {
      keyTree: {
        children: {},
        value: 'treeValue'
      },
      details: {
        value: 'У узлового элемента value бесполезно',
        children: {
          inerrValue: {
            children: {},
            value: 'inerrValue'
          },
          valueAsObj: {
            children: {},
            value: {
              text: 'keyValueAsObj'
            }
          }
        }
      }
    }
  },
  render: args => ({
    components: {
      TreeView
    },
    data() {
      return {
        ...args
      };
    },
    methods: {
      onSelect(value) {
        alert(JSON.stringify(value));
      }
    },
    template: \`
      <TreeView :children="tree" @select="onSelect" />
    \`
  })
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,c as default};
