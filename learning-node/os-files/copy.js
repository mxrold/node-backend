const fs = require('fs')

fs.copyFile('orange.txt', 'lemon.txt', err => {
  if (err) {
    console.log(err)
  }

  console.log('orange.txt copy as lemon.txt')
})