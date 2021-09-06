const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url == '/echo') {
    let body = []

    req.on('data', chunk => {
      body.push(chunk)
    })
    .on('end', () => {
      res.writeHead(200, {'Content-Type': 'text/plain'})
      body = Buffer.concat(body).toString()
      
      const myBirthday = new Date(body)
      const getDay = myBirthday.getDay() - 1
      const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
      res.end(days[getDay])
    })
   
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8001)
console.log('Server on: http://localhost:8001')