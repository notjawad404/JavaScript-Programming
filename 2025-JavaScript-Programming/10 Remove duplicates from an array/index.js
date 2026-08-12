// Remove duplicates from an array

function removeDuplicates(arr){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        if(!newArray.includes(arr[i])){
            newArray.push(arr[i])
        }
    }
    
    console.log(newArray);
    
    // Using Set
    var setArray = [...new Set(arr)];
    console.log(setArray);
    
    // Using Filter
    var filterArray = arr.filter((item, index)=> arr.indexOf(item) === index)
    console.log(filterArray);
}

removeDuplicates([12,42, 21,57,23, 12, 56,23,])
