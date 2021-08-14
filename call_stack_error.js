function foo() {
  throw new Error("Oops!");
}

function bar() {
  foo();
}

function baz() {
  bar();
}

baz();

// when it throws the error, it shows the stack trace at foo, bar, baz
