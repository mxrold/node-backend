const { Transform } = require('stream')

const stringToCapitalize = str => {
  const eachWord = str.split(' ')
  let joinWords = ''
  eachWord.slice(1, eachWord.length).map(item => (
    joinWords += item[0].toUpperCase() + item.slice(1)
  ))

  return `${eachWord[0]}${joinWords}`
}

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(stringToCapitalize(chunk.toString()))
    callback()
  }
})

process.stdin.pipe(transformStream).pipe(process.stdout)