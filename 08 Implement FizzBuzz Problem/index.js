// FizzBuzz problem
// Prints the numbers from 1 to N, but:
//1. For multiples of 3, print "Fizz" instead of the number.
//2. For multiples of 5, print "Buzz" instead of the number.
//3. For multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(n){
    var i = 1
    while(i <= n){
        if(i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
        }
        else if(i%3 === 0){
            console.log("Fizz");
        }
        else if(i%5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i)
        }
        
        i++;
    }
}

fizzBuzz(100)
