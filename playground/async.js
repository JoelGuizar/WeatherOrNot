console.log('Starting app');

setTimeout(() => {
  console.log('inside of cb');
}, 2000)

setTimeout(() => {
  console.log('second setTimeout');
}, 0)

console.log('Finishing up');
