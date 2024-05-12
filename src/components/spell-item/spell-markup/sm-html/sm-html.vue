<template>
  <PrismEditor class="sm-html" v-model="tmpl" :highlight="highlighter" line-numbers />
</template>

<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  name: 'SmHtml',
  components: {
    PrismEditor
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    tmpl: {
      get() {
        return this.modelValue //beautify.html(this.modelValue);
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.javascript)
    }
  }
}
</script>

<style>
.sm-html {
  background: #2d2d2d;
  color: #ccc;
  font-family:
    Fira code,
    Fira Mono,
    Consolas,
    Menlo,
    Courier,
    monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>
