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
      '֑': '?',
      '֒': '?',
      '֓': '?',
      '֔': '?',ך
      '֕': '?',
      '֖': '?',
      '֗': '?',
      '֘': '?',
      '֙': '?',
      '֚': '?',
      '֛': '?',
      '֜': '?',

      '֝': '?',
      '֞': '?',
      '֟': '?',
      '֠': '?',
      '֡': '?',
      '֢': '?',
      '֣': '?',
      '֤': '?',
      '֥': '?',
      '֦': '?',
      '֧': '?',
      '֨': '?',
      '֩': '?',
      '֪': '?',
      '֫': '?',
      '֬': '?',
      '֭': '?',
      '֮': '?',
      */

  // '\u05b4\u05d9': 'i', // TODO
  //'\u05af': '?', // masora circle

  '\u05b0': 'ᵊ', //szewa = bardzo krótkie e
  '\u05b1': 'e', //chataf-segol = bardzo krótkie e
  '\u05b2': 'a', //patach
  '\u05b3': '?', //kamac

  // jud
  '\u05b4\u05d9': 'i', // chirk + jud = i (mamy tylko dwa przypadki utraty jud przy: chirik i cere)
  '\u05b5\u05d9': 'e', // cere + jud = e
  '\u05d9\u05b4': 'ji', // jud + chirk = ji (inna kolejność, najpierw jud)

  // waw
  '\u05d5\u05bc': 'u', // waw + dagesz (mapik) = u
  '\u05d5\u05b9': 'o', // waw + cholam = o

  // he
  '\u05b6\u05d4': 'e', // segol + he = któtkie e

  '\u05b4': 'i', // chirik = i
  '\u05b5': 'e', // cere = długie egetB
  '\u05b6': 'e', // segol = któtkie e
  '\u05b7': 'a', // patah
  '\u05b8': 'a', // kamac
  '\u05b9': 'o', // cholam
  '\u05ba': '?',
  '\u05bb': 'u', // kubuc
  'ּ': '?', // dagesz
  '\u05bd': '?',
  '\u05be': '\u05be',
  '\u05bf': '?',
  '\u05c0': '?',
  '\u05c1': '?',
  '\u05c2': '?',
  '\u05c3': '.',
  '\u05c4': '?',
  '\u05c5': '?',
  '\u05c6': '?', // nun hafukha
  '\u05c7': '?',

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
  'לּ': 'l', // lamed
  ל: 'l', // lamed
  'מּ': 'm', // mem
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

  //'שִׁי': 'szi', // TODO
  'שּׁ': 'szsz',
  שׁ: 'sz', // szin
  'שּׂ': 'ss',
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

const END = '׃'
const DAGESH = 'ּ'
const SHEVA = 'ְ'

function isFirst(text, i) {
  return i === 0
}

function isFirstConsonan(text, i) {
  if (isFirst(text, i - 1) === false) {
    if (isConsonantLetter(text[i - 1])) {
      return false
    }
    if (isFirst(text, i - 2) === false) {
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

export function isConsonantVowelLetter(letter) {
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

function isDoubleLetterDagesh(text, index) {
  let letter = text[index]
  if (letter === 'ו') return false // pomijamy, gdy waw
  if (letter === 'ת') return false // pomijamy, gdy taw
  if (letter === 'פ') return false // pomijamy, gdy pe
  return true
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

export function transcript(text, debug = false) {
  if (text !== undefined) {
    let words = text.split(' ')

    let result = words
      .map(word => convertNumericWord(word, debug))
      .map(word => transcriptWord(word, debug))

    if (result !== undefined) {
      return result.join(' ')
    }
  }
  return ''
}

export function transcriptWord(str, debug) {
  const re = new RegExp(Object.keys(code).join('|'), 'gi')

  return str.replace(re, (i, index, text) => {
    let value = code[i]

    let meta = {
      first: index === 0,
      last: index === text.length - 1 || text[index + i.length] === END,
      key: i,
      size: i.length,
      value: value,
      dagesz: i.length === 2 && i[1] === DAGESH,
      szewa: i === SHEVA
    }
    if (debug) {
      console.log(i, index, '[' + text + ']', meta, text[index + 1])
    }

    // 1) podwojenie środkowych samogłosek przez dagesz
    if (meta.dagesz === true) {

      if (isDoubleLetterDagesh(text, index)) {

        if (meta.first === false /*&& meta.last === false*/) {
          // TODO sprawdzić, czy wczesniej jest długa lub krótka samogłoska, ale nie szewa
          value = value + value //podwojenie
        }
      }
    }

    // 2) nieme he na końcu
    if (i === 'ה' && meta.first === false && meta.last === true) {
      return ''
    }

    // 3) niema szewa wewnątrz wyrazów (szewa pod pierwszą spółgłoską jest wymawiana)
    if (meta.szewa === true && meta.first === false && meta.last === false) {
      if (isFirstConsonan(text, index) === false) {
        return '' // niema szewa jest w środku wyrazu
      }
    }

    // 4) pomijam nieme - alef i ajin
    if (value === '') return value

    return value || i
  })
}
