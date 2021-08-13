const { john, peter } = require("./names");
const sayHi = require("./utils");
const data = require("./alternate-syntax");
require("./no-export");

sayHi("susan");
sayHi(john);
sayHi(peter);

console.log(data);
