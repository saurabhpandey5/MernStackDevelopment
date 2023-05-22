console.log("First come");

function foo() {
    console.log("foo has been called");
  }
  setTimeout(foo, 1);
  console.log("After setTimeout");