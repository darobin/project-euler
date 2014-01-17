
exports.range = function (start, end) {
    var res = [];
    for (var i = start, n = end; i <= n; i++) res.push(i);
    return res;
};

exports.sum = function (arr) {
    return arr.reduce(function (prev, cur) {
        return prev + cur;
    }, 0);
};

exports.fibonacci = function (max) {
    var arr = [2, 1];
    while (true) {
        var next = arr[0] + arr[1];
        if (next > max) return arr.reverse();
        arr.unshift(next);
    }
};

exports.eratosthenes = function (max) {
    var arr = exports.range(0, max)
    ,   p = 2
    ;
    arr[0] = null;
    arr[1] = null;
    outerloop:
    while (true) {
        for (var i = 2 * p, n = max; i <= n; i += p) arr[i] = null;
        for (var i = p + 1, n = max; i <= n; i++) {
            if (arr[i] !== null) {
                p = arr[i];
                continue outerloop;
            }
        }
        return arr.filter(function (it) { return it !== null; });
    }
};

exports.isPrime = function (num) {
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0) return false;
    if (num % 3 === 0) return false;
    for (var i = 4, n = Math.ceil(Math.sqrt(num)); i <= n; i++) {
        if ((i + 1) % 6 !== 0 && (i - 1) % 6 !== 0) continue;
        if (num % i === 0) return false;
    }
    return true;
};

exports.primeFactors = function (num) {
    var primes = exports.eratosthenes(num)
    ,   factors = []
    ;
    if (exports.isPrime(num)) return factors;
    for (var i = 0, n = primes.length; i < n; i++) {
        var p = primes[i];
        if (num % p === 0) factors.push(p);
    }
    return factors;
};
