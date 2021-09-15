// console.log('Un %s y un %s', 'perrito', 'gatito')
// console.info('Hello world')
// console.warn('Hello warning')

// console.assert(42 === '42')

// console.trace('Hello')

const util = require('util')
const debuglog = util.debuglog('foo')
debuglog('Hello from foo')