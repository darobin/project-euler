
// http://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

var lib = require("./common")
,   mult35 = lib.range(1, 999)
                .filter(function (it) { return it % 3 === 0 || it % 5 === 0; })
,   res = lib.sum(mult35)
;
console.log(res);

