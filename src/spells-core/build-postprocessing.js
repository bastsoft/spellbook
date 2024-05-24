//node ./src/spells-core/build-postprocessing.js

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
var storybookBuildDir = path.join(__dirname, '../../storybook-static/')

console.log('start build-postprocessing')

fs.promises
  .readdir(storybookBuildDir + 'assets')
  .then((files) => {
    let iframeAssetsFile = null

    files.forEach((file) => {
      if (file.includes('iframe-')) {
        iframeAssetsFile = file
      }
    })

    return iframeAssetsFile
  })
  .then((iframeAssetsFile) => {
    return fs.promises.readFile(storybookBuildDir + 'assets/' + iframeAssetsFile)
  })
  .then((fileBuffer) => {
    return fileBuffer.toString()
  })
  .then((fileData) => {
    const data = fileData
      .replace(/window\./g, 'localGlobal.')
      .replace('export { e as _ }', '')
      .replace('import"../sb-preview/runtime.js"', 'import"../../../sb-preview/runtime.js"')
      .replace('=>__vite__fileDeps', '=>"../../../assets/"+__vite__fileDeps')
      .replace(/\(\)=>import\("\./g, '()=>import("../../../assets/')

    const newFileDAta = `
const localGlobal = {}
const __STORYBOOK_MODULE_PREVIEW_API__ = {
PreviewWeb: function () {},
ClientApi: function () {},
addons: {
  setChannel: () => {},
  getChannel: () => {},
  getParameter: () => {},
  on: () => {},
  off: () => {}
}
}
const __STORYBOOK_MODULE_CHANNELS__ = {
Addons: {},
createBrowserChannel: () => {}
}

${data}
  
export async function importFn(path) {
return y(path);
}

`

    if (!fs.existsSync(storybookBuildDir + 'virtual:')) {
      fs.mkdirSync(storybookBuildDir + 'virtual:')
    }

    if (!fs.existsSync(storybookBuildDir + 'virtual:/@storybook')) {
      fs.mkdirSync(storybookBuildDir + 'virtual:/@storybook')
    }

    const dir = storybookBuildDir + 'virtual:/@storybook/builder-vite/'

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }

    fs.writeFileSync(dir + 'storybook-stories.js', newFileDAta)
  })
