<template>
  <div class="sm-toolbar">
    <div class="sm-toolbar-default">
      <button @click="addTag" title="добавить тег">
        <sIcon name="code" />
      </button>
      <button @click="addContent" title="добавить содержимое">
        <sIcon name="notes" />
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
import sIcon from '../../../../uikit/s-icon/s-icon.vue'

export default {
  name: 'SmToolbar',
  components: {
    sIcon
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
