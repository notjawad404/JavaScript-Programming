// Reverse a String without builtin .reverse method
var string1 = "Hello World";

var reversedString = "";

for(var i = string1.length-1; i>= 0; i--){
    reversedString += string1[i]
}
console.log("Original String: " + string1)
console.log("Reversed String: " + reversedString);

// Reverse a String using .reverse() method

var reversedString2 = string1.split("").reverse().join("");
console.log("Reversed String 2: " + reversedString2)
