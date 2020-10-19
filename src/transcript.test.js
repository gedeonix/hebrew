import {
  convertNumericWord,
  isBegedkephatLetter,
  isConsonantLetter,
  isGutturalLetter,
  isMatresLectionisLetter,
  isSoffitLetter,
  transcript, transcriptWord
} from './transcript'

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
    expect(transcript('ע')).toBe('') // ajin
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
    expect(transcript('איִ')).toBe('ji')
    expect(transcript('אֱ')).toBe('e')
    expect(transcript('לֹ')).toBe('lo')

    //waw
    expect(transcript('וְ')).toBe('wᵊ') // waw + szewa = we - oznacza spójnik i, oraz
    expect(transcript('וֹ')).toBe('o') // waw + cholam = o - na końcu (zaimek dzierżawczy jego)
    expect(transcript('וּ')).toBe('u') // waw + dagesz = u - na początku oznacza spójnik i

    expect(transcript('רְאוּבֵן')).toBe('rᵊuwen') // test na wyłączoną duplikację przez dagesz

    expect(transcript('ֶה')).toBe('e') // segol + he = e
    expect(transcript('ֵי')).toBe('e') // cere + jud = e

    expect(transcript('ֹהִ')).toBe('ohi') // he pomiędzy samogłoskami
    expect(transcript('האאא')).toBe('h') // he na początku (przedimek określony)

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

    expect(transcript('שּׁ')).toBe('szsz')
    expect(transcript('שּׂ')).toBe('ss')
    expect(transcript('שִׁי')).toBe('szi')

    expect(transcript('בְּרֵאשִׁית')).toBe('bᵊreszit')
    expect(transcript('שְׁמוֹת')).toBe('szᵊmot')
    expect(transcript('מִצְרָיְמָה')).toBe('micrajma')
    expect(transcript('וּבֵיתוֹ')).toBe('uweto')

    expect(transcript('בָּאוּ')).toBe('bau')
    expect(transcript('בָּאוּ׃')).toBe('bau.')
  })

  test('patah furtivum', () => {
    // expect(transcript('רוּחַ')).toBe('ruah')
  })

  test('dagesz', () => {
    expect(transcriptWord('הַשָּׁמַיִם', true)).toBe('haszszamajim')
    expect(transcriptWord('הַבָּאִים')).toBe('habbaim', true) // przybyli - imiesłów czynny (przybywający)
  })

  test('function', () => {
    expect(transcript('אֵת')).toBe('et') // po tym wyrazie będzie dopełnienie w bierniku (kogo? co?)
    expect(transcript('אֵת יַעֲקֹב')).toBe('et jaakow') // et - bliskość z wyrazem po - przyimek z, razem (z kimś, z czymś)
    expect(transcript('הַבָּאִים')).toBe('habbaim') // przybyli - imiesłów czynny (przybywający)
  })

  test('verses', () => {
    expect(transcript('בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃')).toBe('bᵊreszit bara elohim et haszszamajim wᵊet haarec.')
    expect(transcript('וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם׃')).toBe('wᵊhaarec hajta tohu wawohu wᵊchoszechᵊ al־pne tᵊhom wᵊrucha elohim mᵊrachefet al־pne hammajim.')

    expect(transcript('וְאֵלֶּה שְׁמוֹת בְּנֵי יִשְׂרָאֵל הַבָּאִים מִצְרָיְמָה אֵת יַעֲקֹב אִישׁ וּבֵיתוֹ בָּאוּ׃')).toBe('wᵊelle szᵊmot bᵊne jisrael habbaim micrajma et jaakow isz uweto bau.')
    expect(transcript('רְאוּבֵן שִׁמְעוֹן לֵוִי וִיהוּדָה׃')).toBe('rᵊuwen szimon lewi wihuda.')
    expect(transcript('יִשָּׂשכָר זְבוּלֻן וּבְנְיָמִן׃')).toBe('jissaschar zᵊwulun uwnjamin.')
    expect(transcript('דָּן וְנַפְתָּלִי גָּד וְאָשֵׁר׃')).toBe('dan wᵊnaftali gad wᵊaszer.')

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

  test('syllabe1', () => {
    // expect(transcript('מֶה')).toBe('me')
    expect(transcript('רְאוּבֵן')).toBe('rᵊuwen') // test na wyłączoną duplikację przez dagesz
  })

  test('syllabe', () => {

    // sylaba zaczyna się od spółgłoski (wyjątkiem jest szuruk (waw + dagesz = u) na początku)

    // spółgłoska + samogłoska
    expect(transcript('מָ')).toBe('ma')
    expect(transcript('מִי')).toBe('mi')
    expect(transcript('מֶה')).toBe('me')

    // spółgłoska + spółgłoska + samogłoska
    expect(transcript('בְּרִי')).toBe('bᵊri')  // przy podziale na sylaby nie bierzemy pod uwagę szewy

    // spółgłoska + samogłoska + spółgłoska
    expect(transcript('לֵב')).toBe('lew')
    expect(transcript('מִשְׁ|פָּט')).toBe('misz|pat')

    // spółgłoska + spółgłoska + samogłoska + spółgłoska
    expect(transcript('שְׁמוֹת')).toBe('szᵊmot')
    expect(transcript('קְטֹל')).toBe('kᵊtol')

    // spółgłoska + samogłoska + spółgłoska + spółgłoska
    expect(transcript('יֵשְׁתְּ')).toBe('jesztᵊ')

    // sylaba otwarta
    // - kończy się na samogłoskę lub bezdzwięczną spółgłoskę
    // - na ogół posiada samogłoskę długą (cere, kamac)
    // - może być samogłoska krótkam jeśli sylaba jest akcentowana (np. segol, patach)

    expect(transcript('בָּ')).toBe('ba')
    expect(transcript('בֵּ')).toBe('be')

    // sylaba zamknięta
    // - kończy się na dzwięczną spółgłoskę // mem, taw, cadi
    // - na ogół samogłoska krótka (segol, patach,...)
    // - może być samogłoska długa jeśli sylaba jest akcentowana (np. segol, patach)
    // - samogłoska w nieakcentowanej musi być krótka

    // TODO

  })

  test('dzwięczna szewa (wymawiana)', () => {
    // występuje pod pierwszą z dwóch spółgłosek rozpoczynających sylabę
    // TODO
  })

  test('bezdzwięczna szewa (nie wymawiana)', () => {
    // występuje pod spółgłoską kończącą zamkniętą sylabę
    // TODO
  })

  test('simple', () => {
    // expect(transcript('יַעֲקֹב')).toBe('jaakow')
  })

  test('isGutturalLetter', () => {
    expect(isGutturalLetter('א')).toBe(true)
    expect(isGutturalLetter('ה')).toBe(true)
    expect(isGutturalLetter('ח')).toBe(true)
    expect(isGutturalLetter('ע')).toBe(true)
    expect(isGutturalLetter('ר')).toBe(true)
    expect(isGutturalLetter('ת')).toBe(false)
  })

  test('isSoffitLetter', () => {
    expect(isSoffitLetter('ך')).toBe(true)
    expect(isSoffitLetter('ם')).toBe(true)
    expect(isSoffitLetter('ן')).toBe(true)
    expect(isSoffitLetter('ף')).toBe(true)
    expect(isSoffitLetter('ץ')).toBe(true)
    expect(isSoffitLetter('ת')).toBe(false)
  })

  test('isBegedkephatLetter', () => {
    expect(isBegedkephatLetter('ב')).toBe(true)
    expect(isBegedkephatLetter('ג')).toBe(true)
    expect(isBegedkephatLetter('ד')).toBe(true)
    expect(isBegedkephatLetter('כ')).toBe(true)
    expect(isBegedkephatLetter('פ')).toBe(true)
    expect(isBegedkephatLetter('ת')).toBe(true)
    expect(isBegedkephatLetter('א')).toBe(false)
  })

  test('isConsonantLetter', () => {
    expect(isConsonantLetter('א')).toBe(true)
    expect(isConsonantLetter('ת')).toBe(true)
    expect(isConsonantLetter('ּ')).toBe(false)
    expect(isConsonantLetter('ְ')).toBe(false)
    expect(isConsonantLetter('a')).toBe(false)
  })

  test('isMatresLectionisLetter', () => {
    expect(isMatresLectionisLetter('א')).toBe(true)
    expect(isMatresLectionisLetter('ה')).toBe(true)
    expect(isMatresLectionisLetter('ו')).toBe(true)
    expect(isMatresLectionisLetter('י')).toBe(true)
    expect(isMatresLectionisLetter('ב')).toBe(false)
  })

  test('convertNumericWord', () => {
    expect(convertNumericWord('א׳')).toBe('1')
    expect(convertNumericWord('׳א')).toBe('׳א')
    expect(convertNumericWord('אבג״ד')).toBe('10')
    expect(convertNumericWord('תרי״ג')).toBe('613') // taryag
    expect(convertNumericWord('1234')).toBe('1234')
  })

})
