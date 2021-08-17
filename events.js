// we can have any number of listeners, but order must follow. "on" first and then "emit".
// we can even pass args with event emitter

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// "response" is event name and on method listens to the event
customEmitter.on("response", (name, id) => {
  console.log(`data received ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

// emitter emits the event with the same name "response"
customEmitter.emit("response", "john", 34);
