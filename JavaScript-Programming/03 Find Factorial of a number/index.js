// Find Factorial of a number
function factorial1(num){
    var newNum = 1;
    if(num === 0 || num === 1){
        return 1
    }
    for(var i = 2; i <= num; i++){
        newNum *= i
    }
    console.log(newNum);
}

factorial1(10)

//Find Factorial of a number using Recursion
function factorial2(num){
    if(num === 0 || num === 1){
        return 1
    }
    
    return num * factorial2(num-1)
}

console.log(factorial2(10))
