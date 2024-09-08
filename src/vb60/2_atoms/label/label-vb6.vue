<template>
  <label class="label-vb6">
    <div class="label-vb6__caption">{{ caption }}</div>
    <div class="label-vb6__stacked">
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  name: 'LabelVb6',
  props: {
    caption: String
  }
}
</script>

<style>
.label-vb6__caption{
  font-family: "Pixelated MS Sans Serif",Arial;
  font-size: 11px;
}

.label-vb6__stacked {
  display: flex;
  flex-direction: row;
}
</style>