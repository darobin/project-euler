
// http://projecteuler.net/problem=9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
var lib = require("./common")
,   range = lib.range(1, 998)
;

top:
for (var i = 0, n = range.length - 2; i < n; i++) {
    for (var j = i + 1, m = range.length - 1; j < m; j++) {
        for (var k = j + 1, l = range.length; k < l; k++) {
            if (i + j + k === 1000 && Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) {
                console.log(i * j * k);
                break top;
            }
        }
    }
}
