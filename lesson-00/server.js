const http = require("http");
const port = 3000;

http
  .createServer(function (req, res) {
    console.log(res);
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("This is your response!");

    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.end("<h1>Hello Nodejs</h1>");

    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.write(JSON.stringify({name: "nodejs", course: "nodejs-course"}))
    // res.end();

    res.writeHead(200, { "Content-Type": "text/xml" });
    res.write("<XML><KEY>Hello From The Key</KEY></XML>");
    res.end();
  })
  .listen(port, () => {
    console.log("server run on port: ", port);
  });
