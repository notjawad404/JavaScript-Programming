// Positive Number (Also called as Perfect Number)


function perfectNumber(n) {
    var sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
            console.log(sum)
        }
    }
    if (sum === n) {
        console.log(`The number ${n} is a perfect number`);
    } else {
        console.log(`The number ${n} is not a perfect number`);
    }
}

perfectNumber(28)
perfectNumber(20)
perfectNumber(65)