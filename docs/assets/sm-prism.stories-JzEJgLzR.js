import{S as r}from"./sm-prism-B2bmUpRw.js";import"./vue.esm-bundler-BeytHvJU.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={title:"spell-item/sm-prism",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"компонент для инкопцуляции логики prismjs"}},slots:{}},argTypes:{modelValue:{description:"html code",control:{type:"text"}}}},t={args:{modelValue:`<VDialog maxWidth="500">
    <template #activator="{ props: activatorProps }">
        <VBtn color="surface-variant" text="Open Dialog" variant="flat" v-bind="activatorProps"></VBtn>
    </template>

    <template #default="{ isActive }">
        <VCard title="Dialog">
            <VCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</VCardText>
            <VCardActions>
                <VSpacer></VSpacer>
                <VBtn text="Close Dialog" @click="isActive.value = false"></VBtn>
            </VCardActions>
        </VCard>
    </template>
</VDialog>`}};var a,e,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    modelValue: '<VDialog maxWidth="500">\\n    <template #activator="{ props: activatorProps }">\\n        <VBtn color="surface-variant" text="Open Dialog" variant="flat" v-bind="activatorProps"></VBtn>\\n    </template>\\n\\n    <template #default="{ isActive }">\\n        <VCard title="Dialog">\\n            <VCardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</VCardText>\\n            <VCardActions>\\n                <VSpacer></VSpacer>\\n                <VBtn text="Close Dialog" @click="isActive.value = false"></VBtn>\\n            </VCardActions>\\n        </VCard>\\n    </template>\\n</VDialog>'
  }
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,c as default};
