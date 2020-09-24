/* Alphabetic Presentation Form - unicode FB20-FB4F */
const code = {
  ﬠ: 'ע',
  ﬡ: 'א',
  ﬢ: 'ד',
  ﬣ: 'ה',
  ﬤ: 'כ',
  ﬥ: 'ל',
  ﬦ: 'ם',
  ﬧ: 'ר',
  ﬨ: 'ת',

  // '﬩': '?', //plus sign

  שׁ: 'שׁ',
  שׂ: 'שׂ',
  שּׁ: 'שּׁ',
  שּׂ: 'שּׂ',

  אַ: 'אַ',
  אָ: 'אָ',
  // 'אּ': 'אׅ', //mapiq

  בּ: 'בּ',
  גּ: 'גּ',
  דּ: 'דּ',
  הּ: 'הּ',
  וּ: 'וּ',
  זּ: 'זּ',
  טּ: 'טּ',
  יּ: 'יּ',
  ךּ: 'ךּ',
  כּ: 'כּ',
  לּ: 'לּ',
  מּ: 'מּ',
  נּ: 'נּ',
  סּ: 'סּ',
  ףּ: 'ףּ',
  פּ: 'פּ',
  צּ: 'צּ',
  קּ: 'קּ',
  רּ: 'רּ',
  שּ: 'שּ',
  תּ: 'תּ',

  וֹ: 'וׄ',
  בֿ: 'בֿ',
  כֿ: 'כֿ',
  פֿ: 'פֿ',

  // 'ﭏ': '?'
}

export function normalize(str) {
  const re = new RegExp(Object.keys(code).join('|'), 'gi')
  return str.replace(re, (i) => {
    return code[i] || i
  })
}
