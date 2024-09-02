<template>
  <div class="panel">
    <slot>  </slot>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    isToggle: Boolean
  })
</script>

<style>
  .panel {
    background: silver;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
    padding: 3px;
  }
</style>