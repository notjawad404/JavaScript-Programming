// Rotate an array by k steps

function rotateArray(arr, k){
    var n = arr.length;
    k = k % n;
    var newArray = new Array(n)
    for(var i = 0; i < n; i++){
        var newIndex = (i + k)% n;
        newArray[newIndex] = arr[i]
    }
    console.log(newArray)
}

rotateArray([1,2,3,4,5,6,7], 3)
