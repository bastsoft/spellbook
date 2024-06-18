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
              <sBtn class="sm-draggable__handle" icon="draggable"> </sBtn>
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
                    {{ element.args.title || element.args.label || element.args.class }}
                  </span>
                </div>
                <div
                  v-if="element.tag && element.tag === element.tag.toLowerCase()"
                  class="sm-draggable-el-html"
                >
                  {{ element.tag }}
                  <span class="sm-draggable-el-args">
                    {{ element.args.title || element.args.label || element.args.class }}
                  </span>
                </div>
                <div v-if="!element.tag" class="sm-draggable-el-content">
                  {{ 'content: ' + element.args.content }}
                </div>
              </div>
              <sBtn
                v-if="isExpand"
                @click="onClickExpanded"
                :style="`transform: rotate(${isExpanded ? 90 : 0}deg);`"
                icon="expand"
              >
              </sBtn>
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
import sBtn from '../../../../uikit/s-btn/s-btn.vue'

export default {
  name: 'SmDraggable',
  components: {
    draggable,
    SmDraggableExpand,
    sBtn
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
  padding-inline-start: 20px;
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
  color: blue;
  font-weight: 100;
  margin: 0;
  padding: 0;
  height: 19px;
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
