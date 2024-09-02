<template>
  <ul class="tree-view">
    <li v-for="(val, key) in children" :key="key">
      <details v-if="Object.keys(val.children).length">
        <summary>
          <button v-if="val.value" @click="onSelect(val.value)">{{ key }}</button>
          <template v-else>
            {{ key }}
          </template>
        </summary>
        <TreeView :children="val.children" @select="onSelect" />
      </details>
      <button v-else-if="val.value" @click="onSelect(val.value)">{{ key }}</button>
      <template v-else>
        {{ key }}
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TreeView",
  props: {
    children: {
      name: String
    }
  },
  methods: {
    onSelect(value) {
      this.$emit('select', value)
    }
  }
};
</script>

<style>
.tree-view {
  background: #fff;
  font-family: "Pixelated MS Sans Serif",Arial;
  font-size: 11px;
  color: #222;
  margin: 0;
  padding: 0;
  margin-right: 2px;
}

.tree-view li {
  margin: 10px 0;
  list-style-type: none;
}

.tree-view ul {
  border-left: 1px dotted grey;
  margin-left: 5px;
  padding-left: 16px;
}

.tree-view ul > li {
  position: relative;
  white-space: nowrap;
}

.tree-view ul > li::before {
  position: absolute;
  border-bottom: 1px dotted grey;
  content: "";
  display: block;
  left: -16px;
  top: 6px;
  width: 12px;
}

.tree-view ul > li:last-child::after {
  background: #fff;
  bottom: 0;
  content: "";
  display: block;
  left: -20px;
  position: absolute;
  top: 7px;
  width: 8px;
}

.tree-view summary {
  user-select: none;
  cursor: pointer;
  display: inline;
  white-space: nowrap;
  display: inline-flex
}

.tree-view details > summary::before {
  background-color: #fff;
  border: 1px solid grey;
  content: "+";
  display: block;
  float: left;
  height: 9px;
  line-height: 8px;
  margin-right: 5px;
  padding-left: 1px;
  text-align: center;
  width: 8px;
}

.tree-view details[open] > summary::before {
  content: "-";
}

.tree-view button {
  font-family: "Pixelated MS Sans Serif",Arial;
  font-size: 11px;
  color: #222;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;
}


</style>