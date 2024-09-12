import{S as r}from"./sm-tabs-BrqHXxQx.js";import"./s-btn-Bp_TzfJB.js";import"./s-icon-Ddfzw0Tx.js";import"./vue.esm-bundler-BeytHvJU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const C={title:"uikit/SmTabs",component:r,tags:["autodocs"],parameters:{docs:{description:{component:""}},slots:{}},argTypes:{tabs:{description:"tabs",control:{type:"object"}}}},e={render:()=>({components:{SmTabs:r},template:`<SmTabs :tabs="['HTML', 'TREE']" @update:tab="currentTab = $event">
    <template #default="{ nameClass, tab }">
      <div :class="nameClass" v-if="tab === 'HTML'">
        HTML
      </div>
      <div :class="nameClass" v-if="tab === 'TREE'">
        TREE
      </div>
    </template>
  </SmTabs>
  {{ currentTab }}`,data:()=>({currentTab:"HTML"})})},n={tags:["!autodocs","!test","!dev","!docs"],argTypes:{names:{control:"text",description:"Перечислите название вкладок через запятую"},isBtnDel:{control:"text",description:"Добавить кнопку удаления вкладок? (1,0)"}},args:{names:"VAL1,VAL2",isBtnDel:"1"},render:t=>{const u=t.names.split(","),E=u.reduce((a,l)=>(a+=` <div :class="nameClass" v-if="tab === '${l}'">
      ${l}
    </div>`,a),"");let b="",m={};return Number(t.isBtnDel)&&(b=` <template #add><button @click="add">+</button></template>
    <template #del="{index}">
      <button @click="del(index)">-</button>
    </template>`,m={add(){const a=prompt("Enter tab name","tab");a!==null&&(this.tabs.push(a),this.currentTab=a)},del(a){this.tabs.splice(a,1),this.currentTab=this.tabs[0]}}),{components:{SmTabs:r},template:`<SmTabs :tabs="tabs" @update:tab="currentTab = $event">
    ${b}
    <template #default="{ nameClass, tab }">
      ${E}
    </template>
  </SmTabs>
  {{ currentTab }}`,data:()=>({currentTab:u[0],tabs:u,otehrObj:{testObj:["1","2"],t:!1},test:!0,count:100}),mounted(){this.currentTab!==this.tabs[0]&&(this.currentTab=this.tabs[0])},methods:m}}},s={render:()=>({components:{SmTabs:r},template:`<SmTabs :tabs="tabs" v-model:tab="currentTab">
    <template #add><button @click="add">+</button></template>
    <template #del="{index}">
      <button @click="del(index)">-</button>
    </template>
    <template #default="{ nameClass, tab }">
      <div :class="nameClass">
        {{ tab }}
      </div>
    </template>
  </SmTabs>
  {{ tabs }}
  {{ currentTab }}`,data:()=>({tabs:["HTML","TREE"],currentTab:"HTML"}),methods:{add(){const t=prompt("Enter tab name","tab");t!==null&&(this.tabs.push(t),this.currentTab=t)},del(t){this.tabs.splice(t,1),this.currentTab=this.tabs[0]}}})};var o,d,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SmTabs
    },
    template: \`<SmTabs :tabs="['HTML', 'TREE']" @update:tab="currentTab = $event">
    <template #default="{ nameClass, tab }">
      <div :class="nameClass" v-if="tab === 'HTML'">
        HTML
      </div>
      <div :class="nameClass" v-if="tab === 'TREE'">
        TREE
      </div>
    </template>
  </SmTabs>
  {{ currentTab }}\`,
    data: () => ({
      currentTab: 'HTML'
    })
  })
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,T;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!autodocs', '!test', '!dev', '!docs'],
  argTypes: {
    names: {
      control: 'text',
      description: 'Перечислите название вкладок через запятую'
    },
    isBtnDel: {
      control: 'text',
      description: 'Добавить кнопку удаления вкладок? (1,0)'
    }
  },
  args: {
    names: 'VAL1,VAL2',
    isBtnDel: '1'
  },
  render: args => {
    const argNames = args.names.split(',');
    const contentTabs = argNames.reduce((acc, name) => {
      acc += \` <div :class="nameClass" v-if="tab === '\${name}'">
      \${name}
    </div>\`;
      return acc;
    }, '');
    let delBtn = '';
    let methods = {};
    if (Number(args.isBtnDel)) {
      delBtn = \` <template #add><button @click="add">+</button></template>
    <template #del="{index}">
      <button @click="del(index)">-</button>
    </template>\`;
      methods = {
        add() {
          const tabName = prompt('Enter tab name', 'tab');
          if (tabName !== null) {
            this.tabs.push(tabName);
            this.currentTab = tabName;
          }
        },
        del(payload) {
          this.tabs.splice(payload, 1);
          this.currentTab = this.tabs[0];
        }
      };
    }
    return {
      components: {
        SmTabs
      },
      template: \`<SmTabs :tabs="tabs" @update:tab="currentTab = $event">
    \${delBtn}
    <template #default="{ nameClass, tab }">
      \${contentTabs}
    </template>
  </SmTabs>
  {{ currentTab }}\`,
      data: () => ({
        currentTab: argNames[0],
        tabs: argNames,
        otehrObj: {
          testObj: ['1', '2'],
          t: false
        },
        test: true,
        count: 100
      }),
      mounted() {
        if (this.currentTab !== this.tabs[0]) {
          this.currentTab = this.tabs[0];
        }
      },
      methods
    };
  }
}`,...(T=(p=n.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var h,v,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SmTabs
    },
    template: \`<SmTabs :tabs="tabs" v-model:tab="currentTab">
    <template #add><button @click="add">+</button></template>
    <template #del="{index}">
      <button @click="del(index)">-</button>
    </template>
    <template #default="{ nameClass, tab }">
      <div :class="nameClass">
        {{ tab }}
      </div>
    </template>
  </SmTabs>
  {{ tabs }}
  {{ currentTab }}\`,
    data: () => ({
      tabs: ['HTML', 'TREE'],
      currentTab: 'HTML'
    }),
    methods: {
      add() {
        const tabName = prompt('Enter tab name', 'tab');
        if (tabName !== null) {
          this.tabs.push(tabName);
          this.currentTab = tabName;
        }
      },
      del(payload) {
        this.tabs.splice(payload, 1);
        this.currentTab = this.tabs[0];
      }
    }
  })
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const x=["Default","Generator","SlotBtn"];export{e as Default,n as Generator,s as SlotBtn,x as __namedExportsOrder,C as default};
