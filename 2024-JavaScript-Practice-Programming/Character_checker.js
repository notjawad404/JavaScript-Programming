//Check whether the given string is a character or not 
//If string is character then check if character is a digit, alphabet or special character

const checkCharacter = (str) => {
    if (str.length == 1) {
        if (str[0] >= 'a' && str[0] <= 'z' || str[0] >= 'A' && str[0] <= 'Z') {
            console.log('Character ' + str + " is an alphabet")
        }
        else if (str[0] >= '0' && str[0] <= '9') {
            console.log('Character ' + str + " is a digit")
        }
        else {
            console.log('Character ' + str + " is a special character")
        }
    }
    else {
        console.log('Invalid input')
    }
}

checkCharacter('a')
checkCharacter('4')
checkCharacter('$')
checkCharacter('ab')