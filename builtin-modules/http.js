const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is some about story");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>page not found</p>
  <a href="/">Home</a>
  `);
  //   res.write("");
});

server.listen(5000);
