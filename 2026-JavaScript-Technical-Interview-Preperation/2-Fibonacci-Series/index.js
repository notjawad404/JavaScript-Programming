// Fibonacci Series upto n number

function FibonacciSeries(n) {
    var Fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        Fibonacci[i] = Fibonacci[i - 2] + Fibonacci[i - 1];
    }
    console.log(`Fibonacci Series up to ${n} is ${Fibonacci}`);
}

FibonacciSeries(10);



// Fibonacci Series using Recursion
console.log("Fibonacci Series using Recursion");

function FibonacciSeries2(n) {
    if (n <= 1) {
        return n;
    }

    return FibonacciSeries2(n - 1) + FibonacciSeries2(n - 2);
}

var FibonacciSeriesArr = [];
var n = 10;
for (let i = 0; i < n; i++) {
    FibonacciSeriesArr.push(FibonacciSeries2(i));
}
console.log(`Fibonacci Series using Recursion up to ${n} is ${FibonacciSeriesArr}`);