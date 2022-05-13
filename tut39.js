// Promise:
// Promise ek to resolve hogi and dusra to reject hogi
function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true; // true
      if (!error) {
        console.log("Your promise has been resolved!!!");
        resolve();
      } else {
        console.log("Your promise has been not resolved!!!");
        reject("Sorry not fullfilled");
      }
    }, 2000);
  });
}
func1()
  .then(function () {
    //.then use for the given function of promise is resolved
    console.log("Thanks for resolving");
  })
  .catch(function (error) {
    // .catch use for the given function is rejected
    console.log("Very bad bro "+ error);
  });
