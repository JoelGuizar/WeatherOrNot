let asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a + b)
      } else {
        reject('Arguments must be numbers')
      }
    }, 1500)
  })
}

asyncAdd(5, '7').then((res)=>{
  console.log('Result: ', res);
  return asyncAdd(res, 33)
}).then((newRes)=>{
  console.log('Should be 45: ', newRes);
}).catch((errorMessage) => {
  console.log(errorMessage);
})

let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      //resolve('Hey. It worked')
      //reject('unable to faugh')
  }, 2500)
}) //resolve /reject how to manage its state. reject like the if statement of error if it went wrong, resolve if it went ok

somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
}) //first argument gets executed on resolve, the second gets executed on reject
