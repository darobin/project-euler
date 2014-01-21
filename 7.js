
// http://projecteuler.net/problem=7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime
// is 13.
// What is the 10 001st prime number?
var lib = require("./common")
,   cur = 1
,   target = 10001
,   num = 0
;
while (num < target) {
    cur++;
    if (lib.isPrime(cur)) num++;
}
console.log(cur);

