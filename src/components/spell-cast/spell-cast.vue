<template>
  <div class="spell-cast">
    <dialog class="spell-cast-dialog" ref="dialog">
      <form method="dialog">
        <button class="spell-cast-dialog__close">✕</button>
      </form>
      <SpellStorybook
        v-if="isInit"
        v-model="code"
        v-model:storyUrl="storyUrl"
        v-model:storyTestId="storyTestId"
        @test="onTest"
      />
      <button class="spell-cast-dialog__save" @click="onSave">Save</button>
    </dialog>
    <button @click="onOpen">
      <slot></slot>
    </button>
  </div>
</template>

<style>
.spell-cast-dialog {
  width: 90vw;
  height: 90vh;
}

.spell-cast-dialog__close {
  float: right;
  border: none;
  background: transparent;
  cursor: pointer;
}

.spell-cast-dialog__save {
  float: right;
  font-size: 1.2em;
}
</style>

<script>
import SpellStorybook from '../spell-storybook/spell-storybook.vue'

function base64ToString(base64) {
  const binString = atob(base64)

  return new TextDecoder().decode(Uint8Array.from(binString, (m) => m.codePointAt(0)))
}

function stringToBase64(bytes) {
  const binString = String.fromCodePoint(...new TextEncoder().encode(bytes))

  return btoa(binString)
}

export default {
  name: 'SpellCast',
  components: {
    SpellStorybook
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    storybookUrl: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    storyUrl: '',
    storyTestId: 'spellbook--render',
    isInit: false,
    code: {}
  }),
  watch: {
    modelValue: {
      immediate: true,
      handler() {
        if (!this.isInit) {
          const str = base64ToString(this.modelValue)

          try {
            this.code = JSON.parse(str)
          } catch (e) {
            this.code = {}
          }
        }
      }
    }
  },
  mounted() {
    this.storyUrl = this.storybookUrl
  },
  methods: {
    onOpen() {
      this.isInit = true
      this.$refs.dialog.showModal()
    },
    onSave() {
      const str = JSON.stringify(this.code)
      this.$emit('update:modelValue', stringToBase64(str))
      this.$refs.dialog.close()
    },
    onTest(urlTest) {
      const str = JSON.stringify(this.code)
      const url = urlTest + stringToBase64(str)

      window.open(url)
    }
  }
}
</script>
