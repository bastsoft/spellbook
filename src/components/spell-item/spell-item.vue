<template>
  <SpellMarkup
    ref="SpellMarkup"
    v-model:tmpl="spell.tmpl"
    v-model:arr="subArr"
    v-model:index="subArrIndex"
    @update:selectedElement="$emit('update:selectedElement', $event)"
    @selectPreset="$emit('selectPreset', $event)"
    :argTypes="argTypes"
    :slotTypes="slotTypes"
    :presets="presets"
  >
    <template #toolbar="vbind">
      <slot name="toolbar" v-bind="vbind"> </slot>
    </template>
  </SpellMarkup>
  <details>
    <summary>idata</summary>
    <SmPrism v-model="spell.idata" />
  </details>
  <SpellItemActions v-model="spell.actions" />
</template>

<script>
import SpellMarkup from './spell-markup/spell-markup.vue'
import SpellItemActions from './spell-item-actions/spell-item-actions.vue'
import SmPrism from './sm-prism/sm-prism.vue'

export default {
  name: 'SpellItem',
  components: {
    SpellMarkup,
    SpellItemActions,
    SmPrism
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        tmpl: '',
        idata: JSON.stringify({ state: {} }),
        actions: {}
      })
    },
    argTypes: {
      type: Object,
      default: () => ({})
    },
    slotTypes: {
      type: Object,
      default: () => ({})
    },
    presets: {
      type: Array,
      default: () => []
    },
    index: {
      type: [Number, String],
      default: null
    },
    arr: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    spell: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    subArrIndex: {
      get() {
        return this.index
      },
      set(value) {
        this.$emit('update:index', value)
      }
    },
    subArr: {
      get() {
        return this.arr
      },
      set(value) {
        this.$emit('update:arr', value)
      }
    }
  },
  watch: {
    spell: {
      deep: true,
      immediate: true,
      handler(spell) {
        // инфиализируем spell если она пустая
        if (Object.keys(spell || {}).length === 0) {
          this.$emit('update:modelValue', {
            tmpl: '',
            actions: {
              mounted: ''
            }
          })
        }
      }
    }
  },
  methods: {
    onChange() {
      this.$refs.SpellMarkup.onChange()
    }
  }
}
</script>
