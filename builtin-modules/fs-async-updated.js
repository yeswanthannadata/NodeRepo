const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("../content/first.txt", "utf8");
    const second = await readFile("../content/second.txt", "utf8");
    await writeFile(
      "../content/result-using-promises.txt",
      `THIS IS AWESOME: ${first}, ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// old imports

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// other usgae of promises using then

// getText("../content/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

// code for creating custom promise, node have a util to take care of the same thing

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
