// Find the largest and Smallest number in an array

function arrayNumbers(array1){
    var smallest = array1[0];
    var largest = array1[0];
    for(var i = 0; i < array1.length; i++){
        if(array1[i] < smallest){
            smallest = array1[i];
        }
        if(array1[i] > largest){
            largest = array1[i];
        }
    }
    
    console.log("Smallest number: "+ smallest);
    console.log("Largest number: "+ largest);
}

arrayNumbers([12, 56,27,2,34, 18])
