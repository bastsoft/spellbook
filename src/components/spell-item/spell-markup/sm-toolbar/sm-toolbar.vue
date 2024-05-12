<template>
  <div class="sm-toolbar">
    <div class="sm-toolbar-default">
      <button @click="addTag" title="добавить тег">
        <IconCode />
      </button>
      <button @click="addContent" title="добавить содержимое">
        <IconNotes />
      </button>
    </div>
    <slot name="toolbar"></slot>
  </div>
</template>

<style>
.sm-toolbar-default {
  display: flex;
  margin-bottom: 10px;
}
</style>

<script>
import IconCode from './icon-code.vue'
import IconNotes from './icon-notes.vue'

export default {
  name: 'SmToolbar',
  components: {
    IconCode,
    IconNotes
  },
  methods: {
    addTag() {
      const tag = prompt('Enter tag name', 'div')
      if (tag !== null) {
        this.$emit('add', {
          tag,
          argsBinded: [],
          args: {},
          slots: {}
        })
      }
    },
    addContent() {
      const content = prompt('Enter content', 'content')
      if (content !== null) {
        this.$emit('add', {
          args: {
            content
          }
        })
      }
    }
  }
}
</script>
