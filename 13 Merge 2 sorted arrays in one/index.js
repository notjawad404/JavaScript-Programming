// Merge 2 sorted arrays in one

function mergeSortedArrays(arr1, arr2){
    var newArray = new Array()

    var i = 0, j = 0, k = 0;
    while(i < arr1.length || j < arr2.length){
        if(i < arr1.length && (j >= arr2.length || arr1[i] <= arr2[j])){
            newArray[k] = arr1[i];
            i++;
        } else {
            newArray[k] = arr2[j]
            j++
        }
        k++;
    }
    console.log(newArray)
}

mergeSortedArrays([1,3,4,7,8,10], [2, 3,4, 6, 8,12])
