<template>
  <main>
    <SmDraggable
      :children="syntaxTree"
      :selectedId="elementSelectId"
      @selectChild="onSelect"
    />
  </main>
</template>

<script>
import SmDraggable from '@/components/spell-markup/sm-draggable/sm-draggable.vue';

export default {
  name: 'IndexPage',
  components: {
    SmDraggable,
  },
  data:()=>({
    syntaxTree: [],
    elementSelectId: null,
  }),
  methods:{
    onSelect(id) {
      console.log("onSelect", id);
    },
  }
}
</script>