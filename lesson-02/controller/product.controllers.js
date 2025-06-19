const ProductModel = require('../model/product.model')

async function get(req, res) {
  try {
    const products = await ProductModel.find()
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(products))
    res.end()
  } catch (error) {
    console.log(error)
  }
}
async function getById(req, res) {
  try {
    const [, , , id] = req.url.split('/')
    const product = await ProductModel.findById(id)
    if (!product) {
      res.writeHead(404, {'Content-Type': 'application/json'})
      res.write(JSON.stringify({message: 'not found!'}))
      res.end()
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.write(JSON.stringify(product))
      res.end()
    }
  } catch (error) {
    console.log(error)
  }
}

async function createProduct(req, res) {
  try {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', async () => {
      const product = {...JSON.parse(body), createdAt: new Date()}
      // Validate product data here if needed
      const result = await ProductModel.create(product)
      res.writeHead(201, {'Content-Type': 'application/json'})
      res.write(JSON.stringify(result))
      res.end()
    })
  } catch (error) {
    console.log(error)
  }
}

async function updateProduct(req, res) {
  const id = req.url.split('/')[3]
  try {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', async () => {
      const parsedBody = {...JSON.parse(body)}
      const product = await ProductModel.findById(id)
      if (!product) {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.write(JSON.stringify({message: 'not found!'}))
        res.end()
      } else {
        const result = await ProductModel.update(id, parsedBody)
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(result))
        res.end()
      }
    })
  } catch (error) {
    console.log(error)
  }
}

async function removeProduct(req, res) {
  try {
    const id = req.url.split('/')[3]
    const product = await ProductModel.findById(id)
    if (!product) {
      res.writeHead(404, {'Content-Type': 'application/json'})
      res.write(JSON.stringify({message: 'not found!'}))
      res.end()
    } else {
      const result = await ProductModel.remove(id)
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.write(JSON.stringify(result))
      res.end()
    }
  } catch (error) {
    console.log(error)
  }
}

const ProductController = {
  get,
  getById,
  createProduct,
  updateProduct,
  removeProduct
}

module.exports = {
  ProductController,
}
