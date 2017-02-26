const wait = (
  time,
  cancel = Promise.reject()
) => new Promise((resolve, reject) => {
  const timer = setTimeout(resolve, time);
  const noop = () => {};

  cancel.then(() => {
    clearTimeout(timer);
    reject(new Error('Cancelled'));
  }, noop);
});

const shouldCancel = Promise.resolve(); // Yes, cancel
// const shouldCancel = Promise.reject(); // No cancel

wait(5000, shouldCancel).then(
  () => console.log('Hello!'),
  (e) => console.log(e) // [Error: Cancelled]
); 



// var wait = function wait(time) {
//   var cancel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Promise.reject();
//   return new Promise(function (resolve, reject) {
//     var timer = setTimeout(resolve, time);
//     var noop = function noop() {};

//     cancel.then(function () {
//       clearTimeout(timer);
//       reject(new Error('Cancelled'));
//     }, noop);
//   });
// };

// var shouldCancel = Promise.resolve(); // Yes, cancel
// // const shouldCancel = Promise.reject(); // No cancel

// wait(5000, shouldCancel).then(function () {
//   return console.log('Hello!');
// }, function (e) {
//   return console.log(e);
// } // [Error: Cancelled]
// );