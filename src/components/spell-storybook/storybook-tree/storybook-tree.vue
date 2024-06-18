<template>
  <div class="storybook-elems" v-for="(val, key) in children" :key="key">
    <div class="storybook-elems-row">
      <button v-if="val.value" @click="onSelect(val.value)">{{ key }}</button>
      <div v-else>
        {{ key }}
      </div>
      <SBtn
        v-if="Object.keys(val.children).length"
        class="storybook-elems-row__expand"
        @click="onExpand(key)"
        :style="`transform: rotate(${expand[key] ? 90 : 0}deg);`"
        icon="expand"
      ></SBtn>
    </div>
    <div v-show="expand[key]" class="storybook-elems__children">
      <StorybookElems :children="val.children" @select="onSelect" />
    </div>
  </div>
</template>

<style>
.storybook-elems {
  display: block;
}

.storybook-elems__children {
  margin-left: 20px;
}

.storybook-elems-row {
  display: flex;
}
</style>

<script>
import SBtn from '../../../uikit/s-btn/s-btn.vue'
export default {
  name: 'StorybookElems',
  components: { SBtn },
  props: {
    children: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    expand: {}
  }),
  methods: {
    onExpand(key) {
      this.expand[key] = !this.expand[key]
    },
    onSelect(value) {
      this.$emit('select', value)
      const tag = value.title.split('/').pop()

      const elem = {
        tag,
        argsBinded: [],
        args: {},
        slots: {}
      }

      this.$emit('add', elem)
    }
  }
}
</script>
