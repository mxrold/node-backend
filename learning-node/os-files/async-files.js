const fs = require('fs')

const file = process.argv[2]

if (!file) {
  throw new Error('You may indicate the file you want to read')
}

const content = fs.readFile(file, (err, content) => {
  if (err) {
    return console.error(err)
  }
  const lines = content.toString().split('\n').length
  console.log(lines)
})

 