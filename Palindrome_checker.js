const checkPalindrome = (str) => {
    let reversedStr = str.split('').reverse().join('')
    if (str === reversedStr) {
        console.log('String ' + str + ' is a palindrome')
    }
    else {
        console.log('String ' + str + ' is not a palindrome')
    }
}

checkPalindrome('madam')
checkPalindrome('hello')