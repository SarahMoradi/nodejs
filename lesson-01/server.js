const http = require("http");
const PORT = 3000;
const products = require("./data/products.json");

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/api/products") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
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
