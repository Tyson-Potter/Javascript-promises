//1.) Create a function that returns a promise
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

//2.) is calling that function , handling the promise

delay(3000).then(() => {
  console.log("times up ");

  delay(3000).then(() => {
    console.log("times up ");

    delay(3000).then(() => {
      console.log("times up ");
    });
  });
});
