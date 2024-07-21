// const promise = new Promise((resolve, reject) => {
//     // contain an operation
//     // ...

//     // return the state
//     if (success) {
//       resolve(value);
//     } else {
//       reject(error);
//     }
//   });

//   Promise.all() static method to aggregate results from multiple asynchronous operations.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The first promise has resolved');
    resolve("10");
  }, 5 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //   console.log('The second promise has resolved');
    resolve("20");
  }, 4 * 1000);
});
const p3 = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("The third promise");
            reject("30");
          }, 3 * 1000);
});



// Promise.race([p1, p2]).then((value) => console.log(`Resolved: ${value}`)).catch((reason) => console.log(`Rejected:`));

const p = Promise.allSettled ([p1, p2,p3]);
p.then((value) => {
  console.log('Returned Promise');
  console.log(value);
}).catch(err=>{
   console.log(err) 
})

//   Promise.all([p1, p2, p3]).then((results) => {
//     const total = results.reduce((p, c) => p + c);

//     console.log(`Results: ${results}`);
//     console.log(`Total: ${total}`);
//   });

//   The Promise.all() returns a Promise that is rejected if any of the input promises are rejected.

// The Promise.all() method accepts a list of promises and returns a new promsie that resolve to an array of results of the input promises if all the input promises resolved; or reject with an error of the first rejected promise.
// Use the Promise.all() method to aggregate results from multiple asynchronous operations
