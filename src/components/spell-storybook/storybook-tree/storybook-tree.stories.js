import StorybookTree from './storybook-tree.vue'
import { render as storybookExampleRender } from '../../../spells-core/storybook-example-render.js'
import StorybookRemoute from '../../../spells-core/storybook-remoute.js'
const render = storybookExampleRender.bind(this, {
  StorybookTree
})

let storybookRemoute = new StorybookRemoute()

export default {
  render,
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
  tmpl: `
  <label>
  url storybook
  <input v-model="state.url"/>
  </label>
  <button @click="action('load')">load</button>
  <StorybookTree :children="(state.entriesTree || {}).children || {}" @add="action('select', $event)"/>
  {{ state.selectedElem }}
  `,
  actions: {
    select: function (ctx, payload) {
      ctx.state.selectedElem = payload
    },
    mounted: function (ctx) {
      ctx.state.url = 'http://localhost:6007/'
      ctx.state.selectedElem = null
      ctx.state.entriesTree = {
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
    },
    load: function (ctx) {
      storybookRemoute.loadStorybokIndex(ctx.state.url).then(() => {
        ctx.state.entriesTree = storybookRemoute.getOnlyStoryFromEntries()
      })
    }
  }
}
