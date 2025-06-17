const http = require('http')
const PORT = 3000
const products = require('./data/products.json')
const {ProductController} = require('./controller/product.controllers')
const {ErrorHandler} = require('./controller/errorHandler.controller')

const server = http.createServer((req, res) => {
  const {url} = req
  if (url === '/api/products' && req.method == 'GET') {
    ProductController.get(req, res)
  } else if (url.match(/\/api\/products\/[0-9]+/) && req.method == 'GET') {
    ProductController.getById(req, res)
  } else if (url === '/api/products' && req.method == 'POST') {
    ProductController.createProduct(req, res)
  } else if (url.match(/\/api\/products\/[0-9]+/) && req.method == 'PUT') {
    ProductController.updateProduct(req, res)
  } else {
    ErrorHandler.notFound(res)
  }
})

server.listen(PORT)
console.log(`run server on port: ${PORT} http://localhost:${PORT}`)
