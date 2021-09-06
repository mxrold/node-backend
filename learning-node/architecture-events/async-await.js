const asyncFunction = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Hello World')
      } else {
        reject(new Error('Hello Error'))
      }
    }, 1000)
})

async function asyncAwait () {
  try {
    const msg = await asyncFunction()
    console.log('Message', msg.toUpperCase())
  } catch {
    console.error('Error', Error)
  }
}

asyncAwait()
