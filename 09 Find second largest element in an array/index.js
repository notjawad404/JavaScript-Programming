// Find second largest element in an array 
function secondLargest(arr) {
    var largest = arr[0];
    var secondLargest = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    console.log("Second Largest element in array = " + secondLargest)
}

secondLargest([1, 4, 7, 23, 85, 196, 242])
