const ProductModel = require("../model/product.model");

async function get(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
}
async function getById(req, res) {
  try {
    const [, , , id] = req.url.split("/");
    const product = await ProductModel.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "not found!" }));
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    }
  } catch (error) {
    console.log(error);
  }
}

const ProductController = {
  get,
  getById,
};

module.exports = {
  ProductController,
};
