const http = require("http");
const PORT = 3000;
const products = require("./data/products.json");
const { ProductController } = require("./controller/product.controllers");

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/api/products") {
    ProductController.get(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        message: {
          error: "route not found!",
        },
      })
    );
    res.end();
  }
});

server.listen(PORT);
console.log(`run server on port: ${PORT} http://localhost:${PORT}`);
