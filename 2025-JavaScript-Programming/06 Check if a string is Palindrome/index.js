// Cbeck if a string is palindrome

function palindrome(str){
    var i = 0;
    var j = str.length -1;
    
    while(i <= j){
        if(str[i] !== str[j]){
            console.log(str +" is not a palindrome")
            return false;
        }
        i++;
        j--;
    }
    console.log(str +" is a palindrome")
    return true

}

palindrome("racecar");
palindrome("madam");
palindrome("hello");
