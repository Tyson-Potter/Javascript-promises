async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

//First we create an async envirment (block of code)
(async () => {
  await delay(2500); // wait until it is finished
  console.log("Here 1");

  await delay(2500); // wait until it is finished

  console.log("Here 2");
  await delay(2500); // wait until it is finished

  console.log("Here 3");

  console.log("Done");
  //const first = await axios.get(...) //first piece of data
  //const second = await axios.get(..) // second piece of dats
})();
