/* @flow */

(function() {
  function fib(x) {
    return x <= 1 ? x : fib(x - 1) + fib(x - 2)
  }
  let x = Date.now()
  if (x * 2 > 42) x = fib(10)
  var a = x
  console.log(a)
})()
