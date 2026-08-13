function reverseNumber(n) {
    var reverse = 0;
    var num = n;
    while (n > 0) {
        reverse = reverse * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    console.log(`Reverse of ${num} is ${reverse}`)
}

reverseNumber(908701)


function reverseNumber2(n) {
    var reverse = String(n).split('').reverse().join('');
    reverse = Number(reverse);
    console.log(`Reverse of ${n} is ${reverse}`)
}

reverseNumber2(908701)