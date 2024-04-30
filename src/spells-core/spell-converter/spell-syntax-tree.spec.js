import spellSyntaxTree from './spell-syntax-tree.js'
import matchObj from './spell-syntax-tree.match.js'
/*
npx jest ./src/spells-core/spell-converter/spell-syntax-tree.spec.js --watch
*/

describe('простой тэг без вложенний', () => {
  it('stringify', () => {
    const tmpl = spellSyntaxTree.stringify(matchObj.caseOneLevel.syntaxTree)
    expect(tmpl).toStrictEqual(matchObj.caseOneLevel.tmpl)
  })
  it('parse', () => {
    const syntaxTree = spellSyntaxTree.parse(matchObj.caseOneLevel.tmpl)
    expect(syntaxTree).toStrictEqual(matchObj.caseOneLevel.syntaxTree)
  })
})

describe('простой тэг без вложенний c текстом', () => {
  it('stringify', () => {
    const tmpl = spellSyntaxTree.stringify(matchObj.caseOneLevelText.syntaxTree)
    expect(tmpl).toStrictEqual(matchObj.caseOneLevelText.tmpl)
  })
  it('parse', () => {
    const syntaxTree = spellSyntaxTree.parse(matchObj.caseOneLevelText.tmpl)
    expect(syntaxTree).toStrictEqual(matchObj.caseOneLevelText.syntaxTree)
  })
})

describe('тэг с вложенным тэгом', () => {
  it('stringify', () => {
    const tmpl = spellSyntaxTree.stringify(matchObj.caseSlotDefault.syntaxTree)
    expect(tmpl).toStrictEqual(matchObj.caseSlotDefault.tmpl)
  })
  it('parse', () => {
    const syntaxTree = spellSyntaxTree.parse(matchObj.caseSlotDefault.tmpl)
    expect(syntaxTree).toStrictEqual(matchObj.caseSlotDefault.syntaxTree)
  })
})

describe('тэг с двумя темплайт', () => {
  it('stringify', () => {
    const tmpl = spellSyntaxTree.stringify(matchObj.caseTwoSlotNotDefault.syntaxTree)
    expect(tmpl).toStrictEqual(matchObj.caseTwoSlotNotDefault.tmpl)
  })
  it('parse', () => {
    const syntaxTree = spellSyntaxTree.parse(matchObj.caseTwoSlotNotDefault.tmpl)
    expect(syntaxTree).toStrictEqual(matchObj.caseTwoSlotNotDefault.syntaxTree)
  })
})

describe('тэг с параматизированным темплейтом', () => {
  it('stringify', () => {
    const tmpl = spellSyntaxTree.stringify(matchObj.caseSlotWithParams.syntaxTree)
    expect(tmpl).toStrictEqual(matchObj.caseSlotWithParams.tmpl)
  })
  it('parse', () => {
    const syntaxTree = spellSyntaxTree.parse(matchObj.caseSlotWithParams.tmpl)
    expect(syntaxTree).toStrictEqual(matchObj.caseSlotWithParams.syntaxTree)
  })
})

describe('тэг с default и праметром', () => {
  it('stringify', () => {
    const tmpl = spellSyntaxTree.stringify(matchObj.caseSlotDefaultWithParams.syntaxTree)
    expect(tmpl).toStrictEqual(matchObj.caseSlotDefaultWithParams.tmpl)
  })
  it('parse', () => {
    const syntaxTree = spellSyntaxTree.parse(matchObj.caseSlotDefaultWithParams.tmpl)
    expect(syntaxTree).toStrictEqual(matchObj.caseSlotDefaultWithParams.syntaxTree)
  })
})

describe('слот через v-slot', () => {
  it('parse', () => {
    const syntaxTree = spellSyntaxTree.parse(matchObj.caseErrorSlot.tmpl)
    expect(syntaxTree).toStrictEqual(matchObj.caseErrorSlot.syntaxTree)
  })
})
