import SmDraggable from './sm-draggable.vue'

export default {
  title: 'spell-item/spell-markup/sm-draggable',
  component: SmDraggable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `компонент для визуального построения и компоновки синтаксического дерева`
      }
    },
    slots: {}
  },
  argTypes: {
    onSelectChild: {
      action: '@selectChild'
    },
    children: {
      description: 'syntaxTree',
      control: 'object'
    },
    selectedId: {
      description: 'selectedId',
      control: {
        type: 'text'
      }
    }
  }
}

export const Default = {
  args: {
    children: [
      {
        tag: 'VBtn',
        args: {
          '@click': "action('onClick')",
          text: 'Click me'
        },
        argsBinded: [],
        slots: {}
      }
    ],
    selectedId: null
  }
}

export const Select = {
  args: {
    children: [
      {
        tag: 'VBtn',
        args: {
          '@click': "action('onClick')",
          text: 'Click me'
        },
        argsBinded: [],
        slots: {}
      }
    ],
    selectedId: '0'
  }
}

export const Tree = {
  args: {
    children: [
      {
        tag: 'VDialog',
        args: {
          maxWidth: '500'
        },
        argsBinded: [],
        slots: {
          activator: {
            children: [
              {
                tag: 'VBtn',
                args: {
                  color: 'surface-variant',
                  text: 'Open Dialog',
                  variant: 'flat',
                  'v-bind': 'activatorProps'
                },
                argsBinded: [],
                slots: {}
              }
            ],
            prop: '{ props: activatorProps }'
          },
          default: {
            children: [
              {
                tag: 'VCard',
                args: {
                  title: 'Dialog'
                },
                argsBinded: [],
                slots: {
                  default: {
                    children: [
                      {
                        tag: 'VCardText',
                        args: {},
                        argsBinded: [],
                        slots: {
                          default: {
                            children: [
                              {
                                args: {
                                  content:
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                }
                              }
                            ]
                          }
                        }
                      },
                      {
                        tag: 'VCardActions',
                        args: {},
                        argsBinded: [],
                        slots: {
                          default: {
                            children: [
                              {
                                tag: 'VSpacer',
                                args: {},
                                argsBinded: [],
                                slots: {}
                              },
                              {
                                tag: 'VBtn',
                                args: {
                                  text: 'Close Dialog',
                                  '@click': 'isActive.value = false'
                                },
                                argsBinded: [],
                                slots: {}
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            prop: '{ isActive }'
          }
        }
      }
    ],
    selectedId: '0'
  }
}
