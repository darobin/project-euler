
// http://projecteuler.net/problem=5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any
// remainder. What is the smallest positive number that is evenly divisible by all of the numbers
// from 1 to 20?

var num = 19;
next_num:
while (true) {
    num++;
    for (var i = 2, n = 20; i <= n; i++) if (num % i) continue next_num;
    console.log(num);
    break;
}
