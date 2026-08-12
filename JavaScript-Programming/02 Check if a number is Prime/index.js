// Check if a number is prime or not
function isPrime(num1){
let halfPoint = Math.ceil(num1/2);
for(let i = 2; i <= halfPoint; i++ ){
    if(num1 % i === 0){
        console.log("Number "+ num1 +"  is not prime as it is divided by "+ i);
        return;
    }
}

console.log("Number " + num1 +" is prime")
}

isPrime(23)
