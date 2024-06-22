const htmlVoidElements = [
  'area',
  'base',
  'basefont',
  'bgsound',
  'br',
  'col',
  'command',
  'embed',
  'frame',
  'hr',
  'image',
  'img',
  'input',
  'isindex',
  'keygen',
  'link',
  'menuitem',
  'meta',
  'nextid',
  'param',
  'source',
  'track',
  'wbr'
]

const attrRE = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g
const tagRE = /<[a-zA-Z0-9\-!/](?:"[^"]*"|'[^']*'|[^'">])*>/g
const whitespaceRE = /^\s*$/

const parseTag = (tag) => {
  const res = {
    type: 'tag',
    name: '',
    voidElement: false,
    attrs: {},
    children: []
  }

  const tagMatch = tag.match(/<\/?([^\s]+?)[/\s>]/)
  if (tagMatch) {
    res.name = tagMatch[1]
    res.voidElement = htmlVoidElements.includes(tagMatch[1]) || tag.charAt(tag.length - 2) === '/'

    if (res.name.startsWith('!--')) {
      const endIndex = tag.indexOf('-->')
      return {
        type: 'comment',
        comment: endIndex !== -1 ? tag.slice(4, endIndex) : ''
      }
    }
  }

  const reg = new RegExp(attrRE)
  let result = null
  for (;;) {
    result = reg.exec(tag)

    if (result === null) {
      break
    }

    if (!result[0].trim()) {
      continue
    }

    if (result[1]) {
      const attr = result[1].trim()
      let arr = [attr, '']

      if (attr.indexOf('=') > -1) {
        arr = attr.split('=')
      }

      res.attrs[arr[0]] = arr[1]
      reg.lastIndex--
    } else if (result[2]) {
      res.attrs[result[2]] = result[3].trim().substring(1, result[3].length - 1)
    }
  }

  return res
}

const htmlToAstParse = (html, options = {}) => {
  options || (options = {})
  options.components || (options.components = {})
  const result = []
  const arr = []
  let current
  let level = -1
  let inComponent = false

  if (html.indexOf('<') !== 0) {
    var end = html.indexOf('<')
    result.push({
      type: 'text',
      content: end === -1 ? html : html.substring(0, end)
    })
  }

  html.replace(tagRE, function (tag, index) {
    if (inComponent) {
      if (tag !== '</' + current.name + '>') {
        return ''
      } else {
        inComponent = false
      }
    }
    const isOpen = tag.charAt(1) !== '/'
    const isComment = tag.startsWith('<!--')
    const start = index + tag.length
    const nextChar = html.charAt(start)

    let parent

    if (isComment) {
      const comment = parseTag(tag)

      if (level < 0) {
        result.push(comment)
        return result
      }
      parent = arr[level]
      if (parent && parent.children && Array.isArray(parent.children)) {
        parent.children.push(comment)
      }
      return result
    }

    if (isOpen) {
      level++

      current = parseTag(tag)
      if (
        current.type === 'tag' &&
        current.name &&
        options.components &&
        options.components[current.name]
      ) {
        current.type = 'component'
        inComponent = true
      }

      if (
        !current.voidElement &&
        !inComponent &&
        nextChar &&
        nextChar !== '<' &&
        Array.isArray(current.children)
      ) {
        current.children.push({
          type: 'text',
          content: html.slice(start, html.indexOf('<', start))
        })
      }

      if (level === 0) {
        result.push(current)
      }

      parent = arr[level - 1]

      if (parent && parent.children) {
        parent.children.push(current)
      }

      arr[level] = current
    }

    if (!isOpen || current.voidElement) {
      if (level > -1 && (current.voidElement || current.name === tag.slice(2, -1))) {
        level--
        current = level === -1 ? result : arr[level]
      }
      if (!inComponent && nextChar !== '<' && nextChar) {
        parent = level === -1 ? result : arr[level].children

        const end = html.indexOf('<', start)
        let content = html.slice(start, end === -1 ? undefined : end)

        if (whitespaceRE.test(content)) {
          content = ' '
        }

        if ((end > -1 && level + parent.length >= 0) || content !== ' ') {
          if (parent && Array.isArray(parent)) {
            parent.push({
              type: 'text',
              content: content
            })
          }
        }
      }
    }
  })

  return result
}

export default {
  stringify(syntaxTree) {
    return this.builderElements(syntaxTree)
  },
  parse(tmpl) {
    var ast = htmlToAstParse(tmpl)
    return this._astToSyntaxTreeArr(ast)
  },
  _astToSyntaxTreeArr(ast) {
    return ast
      .map((item) => {
        if (item.type === 'tag') {
          delete item.type
          item.tag = item.name
          delete item.name
          delete item.voidElement
          this._processingArgs(item)
          //item.slots = {};
          item.slots = this._astToSyntaxTreeToSlot(item.children)
          delete item.children
        }

        if (item.type === 'text') {
          const _item = item
          const content = _item.content.trim()
          item = {
            args: {
              content
            }
          }

          if (!content) {
            item = null
          }
        }

        return item
      })
      .filter(Boolean)
  },
  _processingArgs(item) {
    item.argsBinded = []
    item.args = Object.keys(item.attrs).reduce((acc, key) => {
      let newKey = key

      if (key.startsWith(':')) {
        newKey = key.slice(1)
        item.argsBinded.push(newKey)
      }

      acc[newKey] = item.attrs[key]

      return acc
    }, {})
    delete item.attrs
  },
  _astToSyntaxTreeToSlot(astArr) {
    const slots = {}

    const astArrLast = astArr
      .map((item) => {
        if (item.name === 'template' && Object.keys(item.attrs).length) {
          const slotKey = Object.keys(item.attrs)[0]
            .replace(/#/g, '')
            .replace(/v-slot:/g, '')

          slots[slotKey] = {
            children: this._astToSyntaxTreeArr(item.children)
          }

          if (slots[slotKey].children.length && Object.values(item.attrs)[0]) {
            slots[slotKey].prop = Object.values(item.attrs)[0]
          }

          return null
        }

        return item
      })
      .filter(Boolean)

    if (!((slots.default || {}).children || []).length) {
      slots.default = {
        children: this._astToSyntaxTreeArr(astArrLast)
      }
    }

    if (!slots.default.children.length) {
      delete slots.default
    }

    return slots
  },

  builderElements(syntaxTree, deepIndex = '') {
    return syntaxTree
      .map((element, index) => {
        if (!element.tag /*=== 'CONTENT'*/) {
          return element.args.content
        }

        const args = Object.keys(element.args)
          .map((key) => {
            let keyMy = key

            if (element.argsBinded.includes(key)) {
              keyMy = `:${key}`
            }

            let value = element.args[key]

            if ((value || {}).replace) {
              value = value.replace(/"/g, "'")
            }

            return `${keyMy}="${value}"`
          })
          .filter(Boolean)
          .join(' ')

        let slots = ''
        const elementSlots = element.slots || {}
        const elementSlotsKey = Object.keys(elementSlots)
        const iOnlyDefault =
          elementSlotsKey.length == 1 && element.slots.default && !element.slots.default.prop

        if (elementSlotsKey.length && !iOnlyDefault) {
          slots = elementSlotsKey
            .map((key) => {
              let templateSlot = `#${key}`

              if (element.slots[key].prop) {
                templateSlot += `="${element.slots[key].prop.replace(/"/g, "'")}"`
              }

              return `<template ${templateSlot}>
${this.builderElements(element.slots[key].children, deepIndex + index + '-slots-' + key + '-children')}
</template>`
            })
            .join('\n')
        } else if (elementSlots.default) {
          slots = this.builderElements(elementSlots.default.children, deepIndex + index)
        }

        let tag = element.tag

        return `<${tag} ${args}${this.isTest ? ` data-spell data-spell-index="${deepIndex}-${index}"` : ''}>${slots ? '\n' + slots + '\n' : ''}</${tag}>`
      })
      .join('\n')
  }
}
