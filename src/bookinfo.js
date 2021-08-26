// typedef bookinfo object (json)

/**
 * @type {{
 *   title:string,
 *   author: {
 *     name: string,
 *     url: string
 *   },
 *   original: {
 *     root: string,
 *     series: string[][],
 *     dl-date: string
 *   },
 *   local: {
 *     id: str,
 *     series: string[][]
 *   },
 *   tag: string[]
 * }}
 */
const bookinfo = {
  title: '', // book title
  author: { // author data
    name: '', // author name
    url: '', // author homepage/twitter/... url
  },
  original: { // download source data
    root: '', // source url (page url)
    series: [ // source urls (image urls)
      ['', '', ''], // vol.1
      ['', '', ''], // vol.2
    ],
    'dl-date': 'YYYY-MM-ddThh:mm:ss+0000' // download datetime
  },
  local: { // local source data
    id: "", // local book id
    series: [ // source urls (image urls)
      ['', '', ''], // vol.1
      ['', '', ''], // vol.2
    ],
  },
  tags: [''] // tagids
};

/**
 * @type {Object.<string, {
 *   id: string,
 *   name: {
 *     ja: string,
 *     en: string
 *   }
 * }>}
 */
const tags = {
  ''/* tagid */ : {
    id: '', // tagid
    name: { // tagnames
      ja: '', // japanese
      en: '', // english
    },
  },
  '': {}
};
