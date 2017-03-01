const add = a => b =>  a + b;

const id = a => ({
  map (fn) {
    return id(fn(a));
  },
  fold () {
    return a;
  }
});

const foo = id('foo');

foo.map((a) => console.log(a));

const bar = id('bar');
console.log(bar.fold());

const baz = id(2);
baz.map(n => n * 2).map(a => console.log(a));




// var add = function add(a) {
//   return function (b) {
//     return a + b;
//   };
// };

// var id = function id(a) {
//   return {
//     map: function map(fn) {
//       return id(fn(a));
//     },
//     fold: function fold() {
//       return a;
//     }
//   };
// };

// var foo = id('foo');

// foo.map(function (a) {
//   return console.log(a);
// });

// var bar = id('bar');
// console.log(bar.fold());

// var baz = id(2);
// baz.map(function (n) {
//   return n * 2;
// }).map(function (a) {
//   return console.log(a);
// });