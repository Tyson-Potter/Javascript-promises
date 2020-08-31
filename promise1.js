// Asnyroasly determine if a number is even or odd.
// isNumberEven()

// 2 parts to using promises
//1.) a function that returns a promise
function isNumberEven(number) {
  const promise = new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      // how to tell if the number is even
      resolve("Number is even!");
    } else {
      reject("Number is odd!");
    }
  });
  return promise;
}

//2. ) is calling that funtion, and handling the promise
//console.log(isNumberEven(2));
const p = isNumberEven(3);
p.then((response) => {
  //Positive Case
  console.log(response);
})
  .catch((error) => {
    //Negitive Case
    console.log(error);
  })
  .finally(() => {
    //Clean up
    console.log("Promise is Complete");
  });
