<template>
  <Panel>
    <div class="vb60-form1-bar">
      <div class="vb60-form1-bar__text">
        {{ title }}
      </div>
      <div class="vb60-form1-bar-controls">
        <button v-if="isToggle" class="vb60-form1-bar-controls__button _minimize"></button>
        <button v-if="isToggle" class="vb60-form1-bar-controls__button _maximize"></button>
        <button
          v-if="$attrs.onClose"
          @clik="$emit('close')"
          class="vb60-form1-bar-controls__button _close"
        ></button>
      </div>
    </div>
    <div class="vb60-form1-body">
      <slot></slot>
    </div>
  </Panel>
</template>

<script setup>
import Panel from '../../../vb60/2_atoms/panel/panel.vue'

defineProps({
  title: String,
  isToggle: Boolean
})
</script>

<style>
.vb60-form1-bar {
  align-items: center;
  background: linear-gradient(90deg, navy, #1084d0);
  display: flex;
  justify-content: space-between;
  padding: 3px 2px 3px 3px;
}

.vb60-form1-bar__text {
  color: #fff;
  font-weight: 700;
  letter-spacing: 0;
  margin-right: 24px;
  -webkit-font-smoothing: none;
  font-family: 'Pixelated MS Sans Serif', Arial;
  font-size: 11px;
}

.vb60-form1-bar-controls {
  display: flex;
}

.vb60-form1-bar-controls__button {
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: transparent;
  min-height: 23px;
  min-width: 75px;
  padding: 0 12px;
  text-shadow: 0 0 #222;
  margin-left: 2px;
  display: block;
  min-height: 14px;
  min-width: 16px;
  padding: 0;
  box-shadow:
    inset -1px -1px #0a0a0a,
    inset 1px 1px #fff,
    inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
}

.vb60-form1-bar-controls__button._minimize {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E");
  background-position: bottom 3px left 4px;
  background-repeat: no-repeat;
}

.vb60-form1-bar-controls__button._maximize {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E");
  background-position: top 2px left 3px;
  background-repeat: no-repeat;
}

.vb60-form1-bar-controls__button._close {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E");
  background-position: top 3px left 4px;
  background-repeat: no-repeat;
}

.vb60-form1-body {
  /* margin: 8px; */
  -webkit-font-smoothing: none;
  font-family: 'Pixelated MS Sans Serif', Arial;
  font-size: 11px;
  color: #222;
}
</style>
