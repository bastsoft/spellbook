export default {
  caseErrorSlot: {
    tmpl: `<VBtn
    :loading="loading"
    @click="loading = !loading"
  >
  Custom loader

  <template v-slot:loader>
    <VProgressLinear indeterminate></VProgressLinear>
  </template>
</VBtn>`,
    syntaxTree: [
      {
        args: {
          '@click': 'loading = !loading',
          loading: 'loading'
        },
        argsBinded: ['loading'],
        slots: {
          default: {
            children: [
              {
                args: {
                  content: 'Custom loader'
                }
              }
            ]
          },
          loader: {
            children: [
              {
                args: {
                  indeterminate: ''
                },
                argsBinded: [],
                slots: {},
                tag: 'VProgressLinear'
              }
            ]
          }
        },
        tag: 'VBtn'
      }
    ]
  },
  caseOneLevel: {
    tmpl: `<VBtn @click="action('onClick')" text="Click me"></VBtn>`,
    syntaxTree: [
      {
        tag: 'VBtn',
        args: {
          '@click': "action('onClick')",
          text: 'Click me'
        },
        argsBinded: [],
        slots: {}
      }
    ]
  },
  caseOneLevelText: {
    tmpl: `<VBtn @click="action('onClick')" text="Click me"></VBtn>
{{state}}`,
    syntaxTree: [
      {
        tag: 'VBtn',
        args: {
          '@click': "action('onClick')",
          text: 'Click me'
        },
        argsBinded: [],
        slots: {}
      },
      {
        args: {
          content: '{{state}}'
        }
      }
    ]
  },
  caseSlotDefault: {
    tmpl: `<VBtnToggle v-model="state.toggle" variant="outlined" :divided="true"><VBtn icon="mdi-format-align-left"></VBtn></VBtnToggle>`,
    syntaxTree: [
      {
        tag: 'VBtnToggle',
        args: {
          'v-model': 'state.toggle',
          variant: 'outlined',
          divided: 'true'
        },
        argsBinded: ['divided'],
        slots: {
          default: {
            children: [
              {
                tag: 'VBtn',
                args: {
                  icon: 'mdi-format-align-left'
                },
                argsBinded: [],
                slots: {}
              }
            ]
          }
        }
      }
    ]
  },
  caseSlotDefaultWithParams: {
    tmpl: `<VBtn >
<template #default="test"><VBtn ></VBtn></template></VBtn>`,
    syntaxTree: [
      {
        tag: 'VBtn',
        argsBinded: [],
        args: {},
        slots: {
          default: {
            children: [{ tag: 'VBtn', argsBinded: [], args: {}, slots: {} }],
            prop: 'test'
          }
        }
      }
    ]
  },
  caseTwoSlotNotDefault: {
    tmpl: `<VListItem v-for="(todo, index) in conditions.todos" :key="index" :title="todo.text" :subtitle="todo.id">
<template #append><VBtn icon="mdi-delete" @click="action('delTodo', todo)"></VBtn></template>

<template #prepend><VBtn icon="mdi-delete" @click="action('delTodo', todo)"></VBtn></template></VListItem>`,
    syntaxTree: [
      {
        tag: 'VListItem',
        args: {
          'v-for': '(todo, index) in conditions.todos',
          key: 'index',
          title: 'todo.text',
          subtitle: 'todo.id'
        },
        argsBinded: ['key', 'title', 'subtitle'],
        slots: {
          append: {
            children: [
              {
                tag: 'VBtn',
                args: {
                  icon: 'mdi-delete',
                  '@click': "action('delTodo', todo)"
                },
                argsBinded: [],
                slots: {}
              }
            ]
          },
          prepend: {
            children: [
              {
                tag: 'VBtn',
                args: {
                  icon: 'mdi-delete',
                  '@click': "action('delTodo', todo)"
                },
                argsBinded: [],
                slots: {}
              }
            ]
          }
        }
      }
    ]
  },
  caseSlotWithParams: {
    tmpl: `<VDialog maxWidth="500">
<template #activator="{ props: activatorProps }"><VBtn color="surface-variant" text="Open Dialog" variant="flat" v-bind="activatorProps"></VBtn></template>

<template #default="{ isActive }"><VCard title="Dialog"><VCardText >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</VCardText>
<VCardActions ><VSpacer ></VSpacer>
<VBtn text="Close Dialog" @click="isActive.value = false"></VBtn></VCardActions></VCard></template></VDialog>`,
    syntaxTree: [
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
    ]
  }
}
