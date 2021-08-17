const { createReadStream } = require("fs");

const stream = createReadStream("./content/big-file.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

// data is reading in chunks, file size is 165kb
// 3 chunks; 1 65kb, 2 75kb, 3 37kb
// default buffer size is 64kb

// const stream = createReadStream("./content/big-file.txt");

// we can increase the size using highwatermark object. also use encoding to show actual text

stream.on("data", (result) => {
  console.log(result);
  console.log(result.length);
});

stream.on("error", (err) => {
  console.log(err);
});
