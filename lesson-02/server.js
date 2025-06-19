const http = require('http')
const PORT = 3000
const products = require('./data/products.json')
const {ProductController} = require('./controller/product.controllers')
const {ErrorHandler} = require('./controller/errorHandler.controller')

const server = http.createServer((req, res) => {
  const apiRoute = "api"
  const productsApiRoute = `${apiRoute}/products`
  const singleProductApiRoute = /\/api\/products\/[0-9]+/
  const {url, method} = req

  if (url === productsApiRoute && method == 'GET') {
    ProductController.get(req, res)
  } else if (url.match(singleProductApiRoute) && method == 'GET') {
    ProductController.getById(req, res)
  } else if (url === productsApiRoute && method == 'POST') {
    ProductController.createProduct(req, res)
  } else if (url.match(singleProductApiRoute) && method == 'PUT') {
    ProductController.updateProduct(req, res)
  } else if (url.match(singleProductApiRoute) && method == 'DELETE') {
    ProductController.removeProduct(req, res)
  } else {
    ErrorHandler.notFound(res)
  }
})

server.listen(PORT)
console.log(`run server on port: ${PORT} http://localhost:${PORT}`)
