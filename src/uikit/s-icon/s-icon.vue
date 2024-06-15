<template>
  <iconCode v-if="name === 'code'" />
  <iconNotes v-if="name === 'notes'" />
  <iconDuplicate v-if="name === 'duplicate'" />
  <iconRemove v-if="name === 'remove'" />
  <iconUnselect v-if="name === 'unselect'" />
  <iconWizard v-if="name === 'wizard'" />
  <iconDraggable v-if="name === 'draggable'" />
  <iconExpand v-if="name === 'expand'" />
</template>

<script>
import iconCode from './icon-code.vue'
import iconNotes from './icon-notes.vue'
import iconDuplicate from './icon-duplicate.vue'
import iconRemove from './icon-remove.vue'
import iconUnselect from './icon-unselect.vue'
import iconWizard from './icon-wizard.vue'
import iconDraggable from './icon-draggable.vue'
import iconExpand from './icon-expand.vue'
export default {
  name: 'SIcon',
  props: {
    name: String
  },
  components: {
    iconCode,
    iconNotes,
    iconDuplicate,
    iconRemove,
    iconUnselect,
    iconWizard,
    iconDraggable,
    iconExpand
  }
}
</script>
