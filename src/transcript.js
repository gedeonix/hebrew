const numbers = {
  א: 1,
  ב: 2,
  ג: 3,
  ד: 4,
  ה: 5,
  ו: 6,
  ז: 7,
  ח: 8,
  ט: 9,
  י: 10,
  כ: 20,
  ל: 30,
  מ: 40,
  נ: 50,
  ס: 60,
  ע: 70,
  פ: 80,
  צ: 90,
  ק: 100,
  ר: 200,
  ש: 300,
  ת: 400,
  ך: 500,
  ם: 600,
  ן: 700,
  ף: 800,
  ץ: 900
}

const code = {
  // Accent
  /*
      '\u0591': '?',
      '\u0592': '?',
      '\u0593': '?',
      '\u0594': '?',\u05da
      '\u0595': '?',
      '\u0596': '?',
      '\u0597': '?',
      '\u0598': '?',
      '\u0599': '?',
      '\u059a': '?',
      '\u059b': '?',
      '\u059c': '?',

      '\u059d': '?',
      '\u059e': '?',
      '\u059f': '?',
      '\u05a0': '?',
      '\u05a1': '?',
      '\u05a2': '?',
      '\u05a3': '?',
      '\u05a4': '?',
      '\u05a5': '?',
      '\u05a6': '?',
      '\u05a7': '?',
      '\u05a8': '?',
      '\u05a9': '?',
      '\u05aa': '?',
      '\u05ab': '?',
      '\u05ac': '?',
      '\u05ad': '?',
      '\u05ae': '?',
      */

  // '\u05b4\u05d9': 'i', // TODO
  //'\u05af': '?', // masora circle

  // vowel type A
  'ָ': 'a',  // kamac = długie a
  'ָה': 'a', // kamac + he = = długie a (zwykle koniec słowa, he jest spółgłoską, gdy mapiqq)
  'ַ': 'a',  // patah = któtkie a
  'ַה': 'a', // patah + he = któtkie a (zwykle koniec słowa, he jest spółgłoską, gdy mapiqq)
  'ֲ': 'a',  // chataf-patach = krótkie a (tylko pod gardłowymi, zwykle część kolejnej sylaby)

  // vowel type E
  'ֵי': 'e', // cere + jud = e
  'ֵ': 'e',  // cere = długie e
  'ֶי': 'e', // segol + jud = e
  'ֶ': 'e',  // segol = któtkie e
  'ֱ': 'e',  // chataf-segol = bardzo krótkie e (tylko pod gardłowymi)

  // vowel type I
  'ִי': 'i', // chirk + jud = długie i (mamy tylko dwa przypadki utraty jud przy: chirik i cere)
  'ִ': 'i',  // chirik = krótkie i

  // vowel type O
  'ֹ': 'o', // cholam = długie o
  'וֹ': 'o', // waw + cholam = długie o
  'ֳ': 'o', // chataf-kamac = krótkie o (tylko pod gardłowymi, zwykle część kolejnej sylaby)
  'ׇ': 'o',  // kamac-katan = o (to jest bardzo rzadkie, sylaba zamknięta i nieakcentowana)

  // vowel type U
  'וּ': 'u', // szuruk -> waw + mapik (dagesz) = długie u (czasami używany na początku słowa)
  'ֻ': 'u', // kubuc = krótkie u

  'ְ': 'ᵊ', // szewa = bardzo krótkie e (szewa na - wokalna, szewa nach - cicha wskazuje koniec sylaby)

  // dyftong - (długa samogłoska) - todo
  'יִ': 'ji', // jud + chirk = ji (inna kolejność, najpierw jud)

  'ֺ': '?',
  'ּ': 'ּ', // dagesz
  'ֽ': '?',
  '־': '־',
  'ֿ': '?',
  '׀': '?',
  'ׁ': '?',
  'ׂ': '?',
  '׃': '.',
  'ׄ': '?',
  'ׅ': '?',
  '׆': '?', // nun hafukha

  // Letter
  א: '', // alef (a, e, i, o, u)
  בּ: 'b', // betּ
  ב: 'w', // wet
  גּ: 'g', // gimel
  ג: 'g',
  דּ: 'd', // dalet
  ד: 'd',
  ה: 'h', // he
  ו: 'w', // waw
  ז: 'z', // zajin
  ח: 'ch', // chet
  ט: 't', // tet
  י: 'j', // jod/jud
  כּ: 'k', // kaf
  כ: 'ch', //chaf
  ך: 'ch',
  ל: 'l', // lamed
  מ: 'm', // mem
  ם: 'm',
  נ: 'n', // nun
  ן: 'n',
  ס: 's', // samech
  ע: '', // ajin
  פּ: 'p', // pe
  פ: 'f', // fe
  ף: 'f',
  צ: 'c', // cadi
  ץ: 'c',
  ק: 'k', // kof
  ר: 'r', // resz
  שׁ: 'sz', // szi
  שׂ: 's', // sin
  ש: 's',
  תּ: 't', // taw
  ת: 't'

  // Ligature
  /*
      'װ': '?',
      'ױ': '?',
      'ײ': '?',
      '׳': '?',
      '״': '?'
      */
}

function isFirstConsonan(text, i) {
  if (i - 1 !== 0) {
    if (isConsonantLetter(text[i - 1])) {
      return false
    }
    if (i - 2 !== 0) {
      return false
    }
  }
  return true
}

/**
 * Consonant Letter
 */
export function isConsonantLetter(letter) {
  return letter >= '\u05d0' && letter <= '\u05ea'
}

export function isMatresLectionisLetter(letter) {
  return 'אהוי'.includes(letter)
}

export function isGutturalLetter(letter) {
  return 'אהחער'.includes(letter)
}

export function isBegedkephatLetter(letter) {
  return 'בגדכפת'.includes(letter) // with gadesh lene
}

export function isSoffitLetter(letter) {
  return 'ךםןףץ'.includes(letter)
}

export function isDageshChazak(letter, prev) {
  return false // TODO
}

function isDoubleLetterDagesh(text, index) {
  let letter = text[index]
  if (letter === 'ו') return false // pomijamy, gdy waw
  if (letter === 'ת') return false // pomijamy, gdy taw
  if (letter === 'פ') return false // pomijamy, gdy pe
  return true
}

/**
 * Vowel Letter
 */
export function isVowelATypeLetter(letter) {
  return 'ֲַָ'.includes(letter)
}

export function isVowelETypeLetter(letter) {
  return 'ֱֵֶ'.includes(letter)
}

export function isVowelITypeLetter(letter) {
  return null // TODO
}

export function isVowelOTypeLetter(letter) {
  return null // TODO
}

export function isVowelUTypeLetter(letter) {
  return null // TODO
}

export function isDageshInWord(word) {
  return word.includes('ּ')
}

export function isShevaInWord(word) {
  return word.includes('ְ')
}

/**
 * Numeric
 */
export function convertNumericWord(word, debug = false) {
  if (typeof word === 'string') {
    let size = word.length

    // geresh
    if (size === 2) {
      if (word[1] === '׳') {
        let value = numbers[word[0]]
        if (value !== undefined) {
          return value.toString()
        }
      }
    }

    // gerafhayim
    if (size > 2 && word[size - 2] === '״') {
      let sum = 0
      for (let i = 0; i < size - 2; i++) {
        let value = numbers[word[i]]
        if (value === undefined) {
          return word
        }
        sum = sum + value
      }
      let value = numbers[word[size - 1]]
      if (value === undefined) {
        return word
      }
      sum = sum + value
      return sum.toString()
    }
  }
  return word // not convert
}

// SZEWA (bezpośredni wpływ na podział słowa na sylaby)
// - gardłowe spółgłoski nie mogą mieć szewy wokalnej, za to mogą używac formy charaf-...
// - gardłowe mogą znieść cichą szewę
// - na końcu słowa szewa jest zawsze cicha

// szewa wokalna
//  - początek słowa
//  - gdy jest kolejna z rzędu (poprzedza ją inna szewa)
//  - pod spólgłoską z dagesz forte
//  - następujący po nim długa samogłoska
//  - jest pod pierwszą z dwóch takich samych spółgłosek
function isSilentSzewa(meta, text, index) {
  if (meta.szewa === true && meta.first === false && meta.last === false) {
    if (isFirstConsonan(text, index) === false) {
      return true // niema szewa jest w środku wyrazu
    }
  }
  return false
}

/**
 * bezdzwięczne spółgłoski
 */
function isVoicelessConsonant(char) {
  if (char === 'א') return false // alef
  if (char === 'ה') return false // he
  if (char === 'ו') return false // waw (gdy traci swoje brzmienie - szuruk oraz cholam)
  if (char === 'י') return false // jud (gdy traci swoje brzmienie - długie chirik i długie cere)
  return false
}

/**
 * 1) podwojenie środkowych samogłosek przez dagesz
 */
function ruleDagesz(meta, lex, word, index, list) {
  if (isDoubleLetterDagesh(word, index)) {
    if (meta.dagesz === true && meta.first === false) {

      if (lex.length === 1) {
        // TODO sprawdzić, czy wczesniej jest długa lub krótka samogłoska, ale nie szewa
        if (list.length > 0) {
          let prev = list[list.length - 2]
          meta.transcript = prev.transcript //podwojenie
        }
      }
      else {
        // dagesz z b
        meta.transcript = meta.transcript + meta.transcript
      }

    }
  }
}

/**
 * 2) nieme he na końcu
 */
function ruleLastHe(meta, lex) {
  if (lex === 'ה' && meta.first === false && meta.last === true) {
    meta.transcript = ''
  }
}

/**
 * 3) niema szewa wewnątrz wyrazów (szewa pod pierwszą spółgłoską jest wymawiana)
 */
function ruleSilentSzewa(meta, word, index) {
  if (isSilentSzewa(meta, word, index)) {
    meta.transcript = ''
  }
}

/**
 * 4) pomijam nieme - alef lex ajin
 */
function ruleEmpty(meta, lex) {
  meta.transcript = (meta.transcript === '') ? '' : meta.transcript || lex
}

export function parse(word, debug) {

  const re = new RegExp(Object.keys(code).join('|'), 'gi')

  let index = 0
  let result = []

  let match = word.match(re)
  if(match === null) {
    return result
  }

  for(let i = 0; i < match.length; i++) {
    let lex = match[i]

    let meta = {
      first: index === 0,
      last: index === word.length - 1 || word[index + lex.length] === '׃',
      lex: lex,
      size: lex.length,
      dagesz: isDageshInWord(lex),
      szewa: isShevaInWord(lex),
      transcript: code[lex]
    }
    result.push(meta)

    // rules
    ruleDagesz(meta, lex, word, index, result)
    ruleLastHe(meta, lex)
    ruleSilentSzewa(meta, word, index)
    ruleEmpty(meta, lex)

    if (debug) {
      console.log(lex, index, '[' + word + ']', meta, word[index + 1])
    }

    index = index + lex.length
  }
  return result;
}

export function transcript(text, debug = false) {
  if (text !== undefined) {
    let words = text.split(' ')

    let result = words
      .map(word => convertNumericWord(word, debug))
      .map(word => parse(word, debug))
      .map(list => list.map( meta => meta.transcript ).join('') )

    if (result !== undefined) {
      return result.join(' ')
    }
  }
  return ''
}

export function interline(text, debug = false) {
  if (text !== undefined) {
    let words = text.split(' ')

    let result = words
      .map(word => convertNumericWord(word, debug))
      .map(word => parse(word, debug))
      .map(list => list.map( meta => meta.transcript ).join('') )

  }
  return []
}