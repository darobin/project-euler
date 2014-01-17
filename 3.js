
// http://projecteuler.net/problem=3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
// Result (after ~75min): 6857
var lib = require("./common")
,   num = 600851475143
,   largest = 0
;
for (var i = Math.floor(num/2), n = 2; i >= n; i--) {
    if (num % i === 0 && lib.isPrime(i)) {
        largest = i;
        break;
    }
}
console.log(largest);
