<template>
  <WindowForm title="wizzard" @close="onCloseWizzard">
    <Panel>
      one1 | one2
    </Panel>
    <Panel>
      btn1
    </Panel>
    <WindowForm title="tmpl" isToggle>
      tmpl
    </WindowForm>
    <WindowForm title="data" :isToggle="true">
      data
    </WindowForm>
    <WindowForm title="actions" :isToggle="true">
      actions
    </WindowForm>
  </WindowForm>
</template>

<script setup>
import WindowForm from '../../../vb60/5_templates/window-form/window-form.vue';
import Panel from "../../../vb60/2_atoms/panel/panel.vue";

function onCloseWizzard(){
  alert("onCloseWizzard");
}
</script>