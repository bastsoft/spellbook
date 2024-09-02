<template>
  <div class="sm-bar-prop">
    <div class="sm-bar-prop-tools">
      <button @click="unSelect" title="cнять выделение">
        <sIcon name="unselect" />
      </button>
      <button @click="onRemove" title="удалить элемент">
        <sIcon name="remove" />
      </button>
      <button @click="onDuplicate" title="продублировать элемент">
        <sIcon name="duplicate" />
      </button>
    </div>
    <SmTabs v-if="selectedElement.tag" :tabs="['args', 'slots']" @update:tab="currentTab = $event">
      <template #default="{ nameClass, tab }">
        <div :class="nameClass" v-if="tab === 'slots'">
          <label>
            <input v-model="slotTypeValue" type="text" list="slotTypes" />
            <datalist id="slotTypes">
              <optgroup label="default">
                <option v-for="(value, name, index) in slotTypes" :key="name + index" :value="name">
                  {{ value.description }}
                </option>
              </optgroup>
            </datalist>
            <button @click="onAddSlot" title="добавить слот">+</button>
          </label>
          <label
            class="sm-bar-prop-item"
            v-for="(value, name, index) in selectedElement.slots"
            :key="'slot' + name + index + selectedElement.tag"
          >
            <div>
              {{ name }}
            </div>
            <div class="sm-bar-prop-item__elem">
              <input style="width: 100%" v-model="selectedElement.slots[name].prop" />
              <button
                @click="
                  () => {
                    delete selectedElement.slots[name]
                  }
                "
              >
                x
              </button>
            </div>
          </label>
        </div>
        <div :class="nameClass" v-if="tab === 'args'">
          <label>
            <input v-model="argTypeValue" type="text" list="argTypes" />
            <datalist id="argTypes">
              <optgroup label="default">
                <option v-for="(value, name, index) in argTypes" :key="name + index" :value="name">
                  {{ value.description }}
                </option>
              </optgroup>
            </datalist>
            <button @click="onAddArg" title="добавить аргумент">+</button>
          </label>
          <label
            class="sm-bar-prop-item"
            v-for="(key, i) in argKeys || []"
            :key="key + i + (selectedElement || {}).tag"
          >
            <div>
              {{ key }}
            </div>
            <div class="sm-bar-prop-item__elem">
              <input
                style="width: 100%"
                v-model="selectedElement.args[key]"
                :list="'argTypes' + key"
              />
              <button @click="onDeleteArg(key)">x</button>
              <input type="checkbox" :value="key" v-model="selectedElement.argsBinded" />
            </div>
            <div v-if="argTypes[key]" class="sm-bar-prop-item__desc">
              {{ (argTypes[key] || {}).description }}
              <datalist :id="'argTypes' + key">
                <option
                  v-for="(value, name, index) in (argTypes[key] || {}).options"
                  :key="'argTypes' + key + name + index"
                  :value="value"
                />
              </datalist>
            </div>
          </label>
        </div>
      </template>
    </SmTabs>
    <textarea
      v-if="!selectedElement.tag"
      v-model="selectedElement.args.content"
      style="height: 80%; width: 100%"
    ></textarea>
    <label v-if="presets.length">
      presets: <SelectVB6 v-model="presetKey" :options="presets"/>
      <button @click="onSetPreset">+</button>
    </label>
  </div>
</template>

<script>
import SmTabs from '../../../../uikit/sm-tabs/sm-tabs.vue'
import sIcon from '../../../../uikit/s-icon/s-icon.vue'
import SelectVB6 from '../../../../vb60/2_atoms/select/select-vb6.vue'

export default {
  name: 'SmBarProp',
  components: {
    SmTabs,
    sIcon,
    SelectVB6
  },
  data: () => ({
    presetKey: null,
    argTypeValue: '',
    argTypesDefault: {
      class: {
        control: 'text'
      },
      'v-for': {
        control: 'select',
        description: 'цикл vue для создания списка',
        options: [
          'item in items',
          '(item, index) in items',
          'item of items',
          'value in object',
          '(value, name) in object',
          '(value, name, index) in object',
          'n in 10'
        ]
      },
      key: {
        control: 'text'
      },
      'v-if': {
        description: 'условие для отображения элемента',
        control: 'text'
      },
      'v-else-if': {
        description: 'условие для отображения элемента',
        control: 'text'
      },
      'v-else': {
        description: 'условие для отображения элемента',
        control: 'text'
      },
      'v-show': {
        description: 'условие для отображения элемента',
        control: 'text'
      },
      'v-model': {
        control: 'text'
      },
      'v-bind': {
        control: 'text'
      }
    },
    slotTypeValue: '',
    slotTypesDefault: {
      default: {
        name: 'default',
        description: 'The default Vue slot.'
      }
    }
  }),
  props: {
    subArr: {
      type: Array,
      default: () => []
    },
    subArrIndex: {
      type: [null, String],
      default: null
    },
    argTypesExtra: {
      type: Object,
      default: () => {}
    },
    slotTypesExtra: {
      type: Object,
      default: () => {}
    },
    presets: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    slotTypes() {
      return { ...this.slotTypesDefault, ...this.slotTypesExtra }
    },
    argTypes() {
      return { ...this.argTypesDefault, ...this.argTypesExtra }
    },
    index: {
      get() {
        return this.subArrIndex
      },
      set(v) {
        this.$emit('update:subArrIndex', v)
      }
    },
    arr: {
      get() {
        return this.subArr
      },
      set(v) {
        this.$emit('update:subArr', v)
      }
    },
    selectedElement() {
      return this.arr[this.index] || { args: {}, slots: {} }
    },
    argKeys() {
      return Object.keys((this.selectedElement || {}).args || {}).filter((i) =>
        i.includes(this.argTypeValue)
      )
    }
  },
  watch: {
    selectedElement() {
      this.argTypeValue = ''
    }
  },
  methods: {
    unSelect() {
      this.index = null
      const bc = new BroadcastChannel('test_channel')
      bc.postMessage({
        type: 'selected',
        payload: ''
      })
    },
    onRemove() {
      this.arr.splice(this.index, 1)
      this.index = null
    },
    onDuplicate() {
      const newElem = JSON.parse(JSON.stringify(this.arr[this.index]))
      this.arr.splice(this.index + 1, 0, newElem)
      this.index = null
    },
    onAddArg() {
      this.selectedElement.args[this.argTypeValue] = ''
      this.$emit('change')
    },
    onDeleteArg(key) {
      delete this.selectedElement.args[key]
      this.$emit('change')
    },
    onAddSlot() {
      this.selectedElement.slots[this.slotTypeValue] = {
        children: [],
        prop: ''
      }
    },
    onSetPreset() {
      this.$emit('selectPreset', this.presetKey)
    }
  }
}
</script>

<style>
.sm-bar-prop {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 5px;
  border: 1px solid black;
}

.sm-bar-prop-tools {
  margin-bottom: 10px;
}

.sm-bar-prop-item {
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
}

.sm-bar-prop-item__elem {
  display: flex;
}
</style>
