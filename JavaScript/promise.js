// This function returns a new promise that resolves/rejects according to the marks obtained
function checkResult(marks) {
  return new Promise((resolve, reject) => {
    if (marks > 32) {
      resolve("Congrats! You've passed!");
    } else {
      reject(new Error("Failed!"));
    }
  });
}

checkResult(56)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Result Received!");
  });

// Output: 
// Congrats! You've passed!
// Result Received!