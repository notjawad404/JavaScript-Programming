
function positiveNumber(n) {
    var sum = 0;
    for (let i = 0; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    if (sum === n) {
        console.log(`The number ${n} is a positive number`);
    } else {
        console.log(`The number ${n} is not a positive number`);
    }
}

positiveNumber(28)
positiveNumber(20)
positiveNumber(65)