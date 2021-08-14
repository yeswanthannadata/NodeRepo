function foo() {
  return foo();
}

foo();

// this will throw range error. Maximum call stack exceeded. because it has no base case
