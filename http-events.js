const http = require("http");

// using Event Emitter API
const server = http.createServer();

// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
