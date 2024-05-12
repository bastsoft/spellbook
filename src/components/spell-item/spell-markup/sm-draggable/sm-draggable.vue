<template>
  <draggable
    class="sm-draggable"
    tag="ul"
    :list="children"
    :group="{ name: 'g1' }"
    :item-key="parendIndex"
    handle=".sm-draggable__handle"
  >
    <template #item="{ element, index }">
      <li class="sm-draggable-item">
        <smDraggableExpand :isExpand="Boolean(Object.keys(element.slots || []).length)">
          <template #toolbar="{ isExpand, isExpanded, onClickExpanded }">
            <span class="sm-draggable-item__row">
              <svg
                class="sm-draggable__handle"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
              <div
                :class="['sm-draggable__text', { _selected: selectedId == pIndex + index }]"
                @click="$emit('update:selectedId', this.pIndex + index)"
              >
                <div
                  v-if="element.tag && element.tag !== element.tag.toLowerCase()"
                  class="sm-draggable-el-component"
                >
                  {{ element.tag }}
                  <span class="sm-draggable-el-args">
                    {{ element.args.label || element.args.class }}
                  </span>
                </div>
                <div
                  v-if="element.tag && element.tag === element.tag.toLowerCase()"
                  class="sm-draggable-el-html"
                >
                  {{ element.tag }}
                  <span class="sm-draggable-el-args">
                    {{ element.args.label || element.args.class }}
                  </span>
                </div>
                <div v-if="!element.tag" class="sm-draggable-el-content">
                  {{ 'content: ' + element.args.content }}
                </div>
              </div>
              <svg
                v-if="isExpand"
                @click="onClickExpanded"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
                :style="`transform: rotate(${isExpanded ? 90 : 0}deg);`"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </span>
          </template>
          <div v-for="(val, name, i) in element.slots" :key="name + i">
            <h6 class="sm-draggable-slot-name">{{ name }}</h6>
            <SmDraggable
              :children="val.children"
              v-model:selectedId="sId"
              :parendIndex="this.pIndex + index + '-slots-' + name + '-children'"
            />
          </div>
        </smDraggableExpand>
      </li>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import SmDraggableExpand from './sm-draggable-expand.vue'

export default {
  name: 'SmDraggable',
  components: {
    draggable,
    SmDraggableExpand
  },
  props: {
    selectedId: {
      type: String,
      default: ''
    },
    parendIndex: {
      type: String,
      default: ''
    },
    children: {
      required: true,
      type: Array
    }
  },
  computed: {
    pIndex() {
      return this.parendIndex + (this.parendIndex === '' ? '' : '-')
    },
    sId: {
      get() {
        return this.selectedId
      },
      set(val) {
        this.$emit('update:selectedId', val)
      }
    }
  }
}
</script>

<style>
.sm-draggable {
  min-height: 35px;
  outline: 1px dashed;
}

.sm-toolbar + .sm-draggable {
  max-height: 70vh;
  overflow: scroll;
}

.sm-draggable-item {
  list-style-type: none;
}

.sm-draggable-item__row {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
}

.sm-draggable__text {
  display: inline-block;
  vertical-align: super;
}

.sm-draggable__text._selected {
  color: red;
}

.sm-draggable-slot-name {
  font-family: 'Courier New', Courier, monospace;
  font-size: 10px;
  color: gainsboro;
  font-weight: 100;
  margin: 0;
  padding: 0;
}

.sm-draggable-el-content {
  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
  color: gray;
  font-weight: 100;
  margin: 0;
  padding: 0;
}

.sm-draggable__text._selected .sm-draggable-el-content {
  color: red;
}

.sm-draggable-el-html {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  color: darkslategray;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

.sm-draggable__text._selected .sm-draggable-el-html {
  color: red;
}
.sm-draggable-el-component {
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

.sm-draggable__text._selected .sm-draggable-el-component {
  color: red;
}

.sm-draggable-el-args {
  font-size: 10px;
  font-weight: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
