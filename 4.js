
// http://projecteuler.net/problem=4
// A palindromic number reads the same both ways. The largest palindrome made from the product of
// two 2-digit numbers is 9009 = 91 * 99. Find the largest palindrome made from the product of two
// 3-digit numbers.

function isPalindromic (num) {
    var str = "" + num
    ,   len = str.length
    ,   half1 = str.substr(0, Math.floor(len / 2))
    ,   half2 = str.substr(len % 2 ? Math.ceil(len / 2) : len / 2)
                   .split("")
                   .reverse()
                   .join("")
    ;
    return half1 === half2;
}

var palindrome = 0;
for (var i = 100, n = 1000; i < n; i++) {
    for (var j = 100; j < n; j++) {
        var fact = i * j;
        if (fact > palindrome && isPalindromic(fact)) palindrome = fact;
    }
}
console.log(palindrome);
