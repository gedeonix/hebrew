import { transcript } from './transcript'

describe('transcript', () => {
  test('alphabet', () => {
    expect(transcript('א')).toBe('') // alef
    expect(transcript('בּ')).toBe('b') // bet
    expect(transcript('ב')).toBe('w') // wet
    expect(transcript('גּ')).toBe('g') // gimel
    expect(transcript('ג')).toBe('g') // gimel
    expect(transcript('דּ')).toBe('d') // dalet
    expect(transcript('ד')).toBe('d') // dalet
    expect(transcript('ה')).toBe('h') // he
    expect(transcript('ו')).toBe('w') // waw
    expect(transcript('ז')).toBe('z') // zajin
    expect(transcript('ח')).toBe('ch') // chet
    expect(transcript('ט')).toBe('t') // tet
    expect(transcript('י')).toBe('j') // jod/jud
    expect(transcript('כּ')).toBe('k') // kaf
    expect(transcript('כ')).toBe('ch') // chaf
    expect(transcript('ך')).toBe('ch') // chaf
    expect(transcript('ל')).toBe('l') // lamed
    expect(transcript('מ')).toBe('m') // mem
    expect(transcript('ם')).toBe('m') // mem
    expect(transcript('נ')).toBe('n') // nun
    expect(transcript('ן')).toBe('n') // nun
    expect(transcript('ס')).toBe('s') // samech
    expect(transcript('ע')).toBe('-') // ajin
    expect(transcript('פּ')).toBe('p') // pe
    expect(transcript('פ')).toBe('f') // fe
    expect(transcript('ף')).toBe('f') // fe
    expect(transcript('צ')).toBe('c') // cadi
    expect(transcript('ץ')).toBe('c') // cadi
    expect(transcript('ק')).toBe('k') // kof
    expect(transcript('ר')).toBe('r') // resz
    expect(transcript('שׂ')).toBe('s') // sin
    expect(transcript('שׁ')).toBe('sz') // szin
    expect(transcript('תּ')).toBe('t') // taw
    expect(transcript('ת')).toBe('t') // taw
  })

  test('volwes (a, e, o, i, u)', () => {
    expect(transcript('שִׁ')).toBe('szi')
    expect(transcript('ְ')).toBe('ᵊ')

    expect(transcript('בְּ')).toBe('bᵊ')
    expect(transcript('בַּ')).toBe('ba')
    expect(transcript('בָּ')).toBe('ba')
    expect(transcript('בֶּ')).toBe('be')
    expect(transcript('בְּ')).toBe('bᵊ')

    expect(transcript('אִי')).toBe('i')
    expect(transcript('אֱ')).toBe('e')
    expect(transcript('לֹ')).toBe('lo')

    expect(transcript('ֹהִ')).toBe('ohi') // he pomiędzy samogłoskami
  })

  test('matres lectionis', () => {
    //TODO
  })

  test('simple words', () => {
    expect(transcript('אָב')).toBe('aw') // ojciec
    expect(transcript('גַב')).toBe('gaw') // plecy

    expect(transcript('דְּבַשׁ')).toBe('dᵊwasz') // miód

    expect(transcript('אָדָם')).toBe('adam')

    expect(transcript('שׁ')).toBe('sz')
    expect(transcript('שִׁ')).toBe('szi')
    // expect(transcript('שִׁי')).toBe('szi')

    expect(transcript('בְּרֵאשִׁית')).toBe('bᵊreszit')
  })

  test('patah furtivum', () => {
    // expect(transcript('רוּחַ')).toBe('ruah')
  })

  test('function', () => {
      expect(transcript('אֵת')).toBe('et') // po tym wyrazie bedzie dopełnienie w bierniku
  })

  test('verses', () => {
    // expect(transcript('לִשְׁלֹל שָׁלָל וְלָבֹז בַּז לְהָשִׁיב יָדְךָ עַל־חֳרָבוֹת נוֹשָׁבֹת וְאֶל־עַם מְאֻסָּף מִגּוֹיִם עֹשֶׂה מִקְנֶה וְקִנְיָן יֹשְׁבֵי עַל־טַבּוּר הָאָרֶץ')).toBe('lִsְׁlֹl sָׁlָl wְlָwֹz wַּz lְhָsִׁjw jָdְchָ -ַl־chֳrָwwֹt nwֹsָׁwֹt wְ-ֶl־-ַm mְ-ֻsָּf mִgּwֹjִm -ֹsֶׂh mִkְnֶh wְkִnְjָn jֹsְׁwֵj -ַl־tַwּwּr hָ-ָrֶc')
    // expect(transcript('לשלל שלל ולבז בז להשיב ידך על חרבות נושבת ואל עם מאסף מגוים עשה מקנה וקנין ישבי על טבור הארץ')).toBe('lsll sll wlwz wz lhsjw jdch -l chrwwt nwswt w-l -m m-sf mgwjm -sh mknh wknjn jswj -l twwr h-rc')
    // Ez 38:12
    // expect(transcript('לִשְׁלֹ֥ל שָׁלָ֖ל וְלָבֹ֣ז בַּ֑ז לְהָשִׁ֨יב יָדְךָ֜ עַל־חֳרָבֹ֣ות נֹושָׁבֹ֗ת וְאֶל־עַם֙ מְאֻסָּ֣ף מִגֹּויִ֔ם עֹשֶׂה֙ מִקְנֶ֣ה וְקִנְיָ֔ן יֹשְׁבֵ֖י עַל־טַבּ֥וּר הָאָֽרֶץ׃')).toBe('liszelֹ֥l szala֖l welawֹ֣z ba֑z lehaszi֨jw jadecha֜ -al־chֳrawֹ֣wt nֹwszawֹ֗t weel־-am֙ meֻs?a֣f mig?ֹwji֔m -ֹsׂeh֙ mikene֣h wekineja֔n jֹszewe֖j -al־tab֥w?r haaֽrec.') // TODO
  })

  test('various examples', () => {
    // expect(transcript('ניקוד')).toBe('nikud')
    expect(transcript('מלא כתיב')).toBe('ml chtjw')

    // expect(transcript('כּתב')).toBe('ktw') // pisać
    // expect(transcript('והיא')).toBe('whj') // matres lectionis

    // expect(transcript('|\u05dc|\u05b4|\u05e9|\u05c1|\u05b0|\u05dc|\u05b9|\u05a5|\u05dc')).toBe('|l|ִ|s|ׁ|ְ|l|ֹ|֥|l')
    // expect(transcript('לִשְׁלֹ֥ל')).toBe('l?s??l??l')
    // expect(transcript('לִשְׁלֹ֥ל')).toBe('l')
    // expect(transcript('לִלְלל')).toBe('lִlְll')
  })

  test('simple dictionary', () => {
    //TODO
  })
})
