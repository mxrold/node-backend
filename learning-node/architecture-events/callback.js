const asyncCallback = (cb) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, 'Hello World')
    } else {
      cb(new Error('Hello Error'))
    }
  }, 1000)
}

asyncCallback((err, msg) => {
  if (err) {
    console.error('Error', err)
  } else {
    console.log('Message', msg)
  }
})