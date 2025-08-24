// Find GCD and LCM of two numbers

function findGCDAndLCM(num1, num2){
    //For GCD use Euclidean Algorithm

    //1. Divide the larger number by the smaller number.
    //2. Take the remainder.
    //3. Replace the larger number with the smaller number and the smaller number with the remainder.
    //4. Repeat until the remainder is 0. The last non-zero remainder is the GCD.
    
    if(num1>num2){
        var largerNum = num1;
        var smallerNum = num2;
    }
    else{
        var largerNum = num2;
        var smallerNum = num1;
    }
    var remainder = largerNum%smallerNum
    if(remainder === 0){
        var GCD = smallerNum;
    }
    else{
        while(remainder !== 0){
            largerNum = smallerNum;
            smallerNum = remainder;
            
            remainder = largerNum%smallerNum;
        }
        var GCD = smallerNum;
    }
    console.log("GCD of "+ num1 + " & " + num2 +" is "+GCD)
    
    //For LCM use GCD

    var LCM = (num1 * num2)/GCD
    console.log("LCM of "+ num1 + " & " + num2 +" is "+LCM+"\n\n")
}

findGCDAndLCM(36, 24)
findGCDAndLCM(48, 180)
findGCDAndLCM(101, 103)
findGCDAndLCM(252, 105)
findGCDAndLCM(36,36)
