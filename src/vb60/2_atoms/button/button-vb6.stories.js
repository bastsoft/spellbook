import ButtonVb6 from './button-vb6.vue'

export default {
  title: 'vb60/2_atoms/ButtonVb6',
  component: ButtonVb6,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: ``
      }
    },
    slots: {}
  },
  argTypes: {}
}

export const Default = {
  render: () => ({
    components: { ButtonVb6 },
    template: `
<ButtonVb6>
Click me
</ButtonVb6>
`
  })
}

export const Disabled = {
  render: () => ({
    components: { ButtonVb6 },
    template: `
<ButtonVb6 disabled>
Click me
</ButtonVb6>
`
  })
}

export const VariantIconClose = {
  render: () => ({
    components: { ButtonVb6 },
    template: `
<ButtonVb6 variant="icon" icon="close">
</ButtonVb6>
`
  })
}

export const VariantIconMaximize = {
  render: () => ({
    components: { ButtonVb6 },
    template: `
<ButtonVb6 variant="icon" icon="maximize">
</ButtonVb6>
`
  })
}

export const VariantIconMinimize = {
  render: () => ({
    components: { ButtonVb6 },
    template: `
  <ButtonVb6 variant="icon" icon="minimize">
  </ButtonVb6>
  `
  })
}

export const VariantIcon16Recycle = {
  render: () => ({
    components: { ButtonVb6 },
    template: `
  <ButtonVb6 variant="icon16" icon="recycle">
  </ButtonVb6>
  `
  })
}

export const VariantIcon16Run = {
  render: () => ({
    components: { ButtonVb6 },
    template: `
  <ButtonVb6 variant="icon16" icon="run">
  </ButtonVb6>
  `
  })
}
