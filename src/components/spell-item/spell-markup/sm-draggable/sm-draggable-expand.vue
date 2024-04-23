<template>
  <slot name="toolbar" :isExpand="isExpand" :isExpanded="isExpanded"  @clickExpanded="onClickExpanded" ></slot>
  <div v-if="isExpand && isExpanded">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    isExpand: Boolean,
  },
  setup() {
    const isExpanded = ref(true);
    return {
      isExpanded,
      onClickExpanded() {
        this.isExpanded = !this.isExpanded;
      },
    };
  },
});
</script>
