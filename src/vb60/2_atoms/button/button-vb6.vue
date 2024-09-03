<template>
  <button :class="['button-vb6', '_variant_' + variant, '_icon_' + icon]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonVb6',
  props: {
    variant: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.button-vb6 {
  border: 0;
  background: silver;
  box-shadow:
    inset -1px -1px #0a0a0a,
    inset 1px 1px #fff,
    inset -2px -2px grey,
    inset 2px 2px #dfdfdf;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  color: transparent;
  min-height: 23px;
  min-width: 75px;
  padding: 0 12px;
  text-shadow: 0 0 #222;
  font-family: 'Pixelated MS Sans Serif', Arial;
  font-size: 11px;
}

.button-vb6:active {
  box-shadow:
    inset -1px -1px #ffffff,
    inset 1px 1px #0a0a0a,
    inset -2px -2px #dfdfdf,
    inset 2px 2px #808080;
}

.button-vb6:disabled {
  color: grey;
  text-shadow: 1px 1px 0 #fff;
}

.button-vb6:focus {
  outline: 1px dotted #000000;
  outline-offset: -4px;
}

.button-vb6._variant_icon {
  margin-left: 2px;
  display: block;
  min-height: 14px;
  min-width: 16px;
  padding: 0;
  background-repeat: no-repeat;
}

.button-vb6._variant_icon16 {
  margin-left: 2px;
  display: block;
  min-height: 20px;
  min-width: 20px;
  padding: 0;
  background-repeat: no-repeat;
}

.button-vb6._variant_icon._icon_close {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E");
  background-position: top 3px left 4px;
}

.button-vb6._variant_icon._icon_minimize {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E");
  background-position: bottom 3px left 5px;
}

.button-vb6._variant_icon._icon_maximize {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E");
  background-position: top 2px left 4px;
}

/* иконки можно брать тут https://win98icons.alexmeub.com/ */
.button-vb6.button-vb6._variant_icon16._icon_recycle {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAM1BMVEUAAACGhoZVVVX4+PgAAACtqZDMzMxNTU3n59YzmTNmZmYAgADAwMB3d3dmmWYpKSn////Nz7fpAAAAAXRSTlMAQObYZgAAAAFiS0dEEJWyDSwAAAAHdElNRQfiBhoAMBmckcxBAAAAeUlEQVQY003PWxbDIAgEUEYtYLDN/nebQT2m8wVXfIkwYOQNUFDrIaC1UvA5xMUlugma1RRWMIF7VnXOYIF776TccpmkxHDEUPYLesSIcGXfJgxOMPolzIu9j/DIAdvgEfEjrD5f4jxBL9sgZpo5/SaY3X9fNq7PgQfsmQQmcjO+TgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0ODoyNS0wNDowMDNj5BkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDg6MjUtMDQ6MDBCPlylAAAAAElFTkSuQmCC');
  background-position: top 2px left 2px;
}

.button-vb6.button-vb6._variant_icon16._icon_run {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEUAAACAgID////AwMAAAAAAAID/AAAAgIAAAP///wD/AP+AgADhJ5jCAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfiBhgXBw2lLMV2AAAAWElEQVQI12MQBAIBBiAQUlJSMoQxjASgDBcXKEPJBJUB0icoAmSIhoYGO7sAGVBJICNFvagVzJii6lRigiI1S3tSpgmDsLHQEm0nERMGFxdhYyAAGekCBgBt3hPFIrY50gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzowNzoxMy0wNDowMETqc88AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MDc6MTMtMDQ6MDA1t8tzAAAAAElFTkSuQmCC');
  background-position: top 2px left 2px;
}
</style>
