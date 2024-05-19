import StorybookTree from './storybook-tree.vue'
import StorybookRemoute from '../../../spells-core/storybook-remoute.js'

let storybookRemoute = new StorybookRemoute()

export default {
  title: 'spell-storybook/storybook-tree',
  component: StorybookTree,
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
    components: { StorybookTree },
    template: `<label>
    url storybook
    <input v-model="url"/>
    </label>
    <button @click="action('load')">load</button>
    <StorybookTree :children="(entriesTree || {}).children || {}" @add="action('select', $event)"/>
    {{ selectedElem }}`,
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
        this.selectedElem = payload
      },
      load: function () {
        storybookRemoute.loadStorybokIndex(this.url).then(() => {
          this.entriesTree = storybookRemoute.getOnlyStoryFromEntries()
        })
      }
    }
  })
}
