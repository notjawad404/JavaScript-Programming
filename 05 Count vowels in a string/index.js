// Count vowels in a String

function vowelString(str){
    var vowels = str.split("")
    var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var count = 0
    var vowelsFound = ""
    for(var i = 0; i < vowelsArray.length; i++){
        if(vowelsArray.includes(vowels[i])){
            count++
            vowelsFound += vowels[i]
        }
    }
    
    console.log("Number of vowels in " +str +" are: " +count)
    console.log("Vowels in "+ str +vowelsFound)
}

vowelString("Hello World")
