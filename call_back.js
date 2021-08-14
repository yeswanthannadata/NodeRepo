console.log("Hi");

setTimeout(function () {
  console.log("there");
}, 5000);

console.log("last console");

// first console.log HI printed,
// then setTimeout called and since it is a web api, it will wait till it complete and once it completed it will push it to the task queue
// in the mean time last console got printed
// if call stack is empty, event loop start fetching the task queue
// then there console got printed
// same flow happens even if the setTimeout is 0, since it is a web api

// its working because concurrency and the event loop
