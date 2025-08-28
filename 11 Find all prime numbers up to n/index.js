// Find all prime numbers up to n

// Function to find if a numver is prime or not
function isPrime(num){
    var i = 3;
    if(num === 2){
        return true;
    }
    if(num%2 === 0 || num <= 1){
        return false;
    }
    
    while(i <= Math.sqrt(num)){
        if(num%i === 0){
            return false
        }
        i+=2;
    }
    return true
}

// Function to find all primes upt n
function allPrimes(n){
    var primesArray = []
    for(var i = 2; i <= n; i++){
        if(isPrime(i) === true){
            primesArray.push(i)
        }
    }
    console.log(primesArray)
}

allPrimes(100)
