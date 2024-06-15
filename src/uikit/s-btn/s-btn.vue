<template>
  <button
    :class="[
      's-btn',
      {
        _icon: icon,
        _variant_text: variant === 'text'
      }
    ]"
  >
    <SIcon v-if="icon" :name="icon" />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<script>
import SIcon from '../s-icon/s-icon.vue'
export default {
  name: 's-btn',
  components: {
    SIcon
  },
  props: {
    icon: String,
    text: String,
    variant: String
  }
}
</script>

<style>
.s-btn {
  cursor: pointer;
}

.s-btn._icon {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  outline: none;
}

.s-btn._variant_text {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  outline: none;
}
</style>
