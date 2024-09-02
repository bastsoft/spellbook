<template>
  <select class="select-vb6" v-model="optionKey">
		<option v-for="(key, index) in options" :key="key + ' ' + index">
      {{ key }}
    </option>
  </select>
</template>

<script>
export default {
	props: {
		options: Array,
		modelValue: String
	},
	computed: {
		optionKey: {
			get() {
				return this.modelValue
			},
			set(value) {
				this.$emit('update:modelValue', value)
			}
		}
	}
}
</script>

<style>
select.select-vb6 {
	appearance: none;

	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 0H0v16h1V1h14V0z' fill='%23DFDFDF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 1H1v14h1V2h12V1H2z' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 17H0v-1h15V0h1v17z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15 1h-1v14H1v1h14V1z' fill='gray'/%3E%3Cpath fill='silver' d='M2 2h12v13H2z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 6H4v1h1v1h1v1h1v1h1V9h1V8h1V7h1V6z' fill='%23000'/%3E%3C/svg%3E");
	background-position: top 2px right 2px;
	background-repeat: no-repeat;
	border-radius: 0;
	padding-right: 32px;
	position: relative;

	height: 21px;
	background-color: #fff;
  box-shadow: inset -1px -1px #fff,inset 1px 1px grey,inset -2px -2px #dfdfdf,inset 2px 2px #0a0a0a;
  box-sizing: border-box;
  padding: 3px 32px 3px 4px;

	font-family: "Pixelated MS Sans Serif",Arial;
  font-size: 11px;

	color: #222;
}

select.select-vb6:focus {
  outline: none;
	border: none;
}
</style>