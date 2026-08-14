
function GreatestCommonDivisor(x, y) {
    var gcd = 0;
    for (let i = 0; i <= x || i <= y; i++) {
        if (x % i === 0 && y % i === 0) {
            gcd = i;
        }
    }
    console.log(`The GCD of ${x} and ${y} is ${gcd}`);
}

GreatestCommonDivisor(36, 60);