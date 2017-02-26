const wait = time => new Promise((resolve) => setTimeout(resolve, time));

wait(5000).then(() => console.log('Hello!'));

// var wait = function wait(time) {
//   return new Promise(function (resolve) {
//     return setTimeout(resolve, time);
//   });
// };

// wait(5000).then(function () {
//   return console.log('Hello!');
// });