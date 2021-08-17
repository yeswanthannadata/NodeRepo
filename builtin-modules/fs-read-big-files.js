// without stream, if we are using with http, request size is high which is not a good practice
// with stream we can send data in chunks

const http = require("http");
const { createReadStream } = require("fs");

const server = http
  .createServer((req, res) => {
    const fileStream = createReadStream("../content/big-file.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
