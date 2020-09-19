const transcript = require('./transcript')

describe('transcript', () => {

    test('alphabet', () => {

        expect(transcript('א')).toBe('') // alef

        expect(transcript('ב')).toBe('w') // wet [u05d1]
        expect(transcript('בּ')).toBe('b') // bet [ufb31]
        expect(transcript('בּ')).toBe('b') // bet [u05d1+u05bc]

        expect(transcript('ג')).toBe('g') // gimel
        expect(transcript('ד')).toBe('d') // dalet
        expect(transcript('ה')).toBe('h') // he
        expect(transcript('ו')).toBe('w') // waw
        expect(transcript('ז')).toBe('z') // zajin
        expect(transcript('ח')).toBe('ch') // chet
        expect(transcript('ט')).toBe('t') // tet
        expect(transcript('י')).toBe('j') // jod
        expect(transcript('כ')).toBe('ch') // chaf
        expect(transcript('ך')).toBe('ch') // chaf
        expect(transcript('כּ')).toBe('k') // kaf
        expect(transcript('ל')).toBe('l') // lamed
        expect(transcript('מ')).toBe('m') // mem
        expect(transcript('ם')).toBe('m') // mem
        expect(transcript('נ')).toBe('n') // nun
        expect(transcript('ן')).toBe('n') // nun
        expect(transcript('ס')).toBe('s') // samech
        expect(transcript('ע')).toBe('-') // ajin
        expect(transcript('פ')).toBe('f') // fe
        expect(transcript('ף')).toBe('f') // fe
        expect(transcript('פּ')).toBe('p') // pe
        expect(transcript('צ')).toBe('c') // cade
        expect(transcript('ץ')).toBe('c') // cade
        expect(transcript('ק')).toBe('k') // kof
        expect(transcript('ר')).toBe('r') // resz

        expect(transcript('שׁ')).toBe('sz') // szin
        expect(transcript('שׁ')).toBe('sz') //

        expect(transcript('שׂ')).toBe('s') // sin
        expect(transcript('שׂ')).toBe('s') // sin
        expect(transcript('ת')).toBe('t') // taw
    })

    test('volwes (a, e, o, i, u)', () => {

        expect(transcript('שִׁ')).toBe('szi')
        expect(transcript('ְ')).toBe('e')

        // HEBREW LETTER BET + HEBREW POINT DAGESH OR MAPIQ + HEBREW POINT SHEVA
        expect(transcript('\u05d1\u05bc\u05b0')).toBe('be')

        expect(transcript('בַּ')).toBe('ba')
        expect(transcript('בָּ')).toBe('ba')
        expect(transcript('בֶּ')).toBe('be')
        expect(transcript('בְּ')).toBe('be')
        // TODO

    })

    test('matres lectionis', () => {

        //TODO
    })

    test('simple words', () => {

        expect(transcript('אָדָם')).toBe('adam')

        expect(transcript('שׁ')).toBe('sz')
        expect(transcript('שִׁ')).toBe('szi')
        expect(transcript('שִׁי')).toBe('szi')

        expect(transcript('בְּרֵאשִׁית')).toBe('bereszit')
    })

    test('patah furtivum', () => {
        // expect(transcript('רוּחַ')).toBe('ruah')
    })

    test('verses', () => {

        // expect(transcript('לִשְׁלֹל שָׁלָל וְלָבֹז בַּז לְהָשִׁיב יָדְךָ עַל־חֳרָבוֹת נוֹשָׁבֹת וְאֶל־עַם מְאֻסָּף מִגּוֹיִם עֹשֶׂה מִקְנֶה וְקִנְיָן יֹשְׁבֵי עַל־טַבּוּר הָאָרֶץ')).toBe('lִsְׁlֹl sָׁlָl wְlָwֹz wַּz lְhָsִׁjw jָdְchָ -ַl־chֳrָwwֹt nwֹsָׁwֹt wְ-ֶl־-ַm mְ-ֻsָּf mִgּwֹjִm -ֹsֶׂh mִkְnֶh wְkִnְjָn jֹsְׁwֵj -ַl־tַwּwּr hָ-ָrֶc')
        // expect(transcript('לשלל שלל ולבז בז להשיב ידך על חרבות נושבת ואל עם מאסף מגוים עשה מקנה וקנין ישבי על טבור הארץ')).toBe('lsll sll wlwz wz lhsjw jdch -l chrwwt nwswt w-l -m m-sf mgwjm -sh mknh wknjn jswj -l twwr h-rc')

        // Ez 38:12
        expect(transcript('לִשְׁלֹ֥ל שָׁלָ֖ל וְלָבֹ֣ז בַּ֑ז לְהָשִׁ֨יב יָדְךָ֜ עַל־חֳרָבֹ֣ות נֹושָׁבֹ֗ת וְאֶל־עַם֙ מְאֻסָּ֣ף מִגֹּויִ֔ם עֹשֶׂה֙ מִקְנֶ֣ה וְקִנְיָ֔ן יֹשְׁבֵ֖י עַל־טַבּ֥וּר הָאָֽרֶץ׃')).toBe('liszelֹ֥l szala֖l welawֹ֣z ba֑z lehaszi֨jw jadecha֜ -al־chֳrawֹ֣wt nֹwszawֹ֗t weel־-am֙ meֻs?a֣f mig?ֹwji֔m -ֹsׂeh֙ mikene֣h wekineja֔n jֹszewe֖j -al־tab֥w?r haaֽrec.') // TODO
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
