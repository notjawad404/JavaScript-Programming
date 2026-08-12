// Return a string where every vowel is replaced with the next vowel in the alphabet.

const funnywords = (str) => {
    let funnyWord = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            funnyWord += 'e';
        }
        else if (str[i] === 'e' || str[i] === 'E') {
            funnyWord += 'i';
        }
        else if (str[i] === 'i' || str[i] === 'I') {
            funnyWord += 'o';
        }
        else if (str[i] === 'o' || str[i] === 'O') {
            funnyWord += 'u';
        }
        else if (str[i] === 'u' || str[i] === 'U') {
            funnyWord += 'a';
        }
        else {
            funnyWord += str[i];
        }
    }
    console.log(funnyWord);
}

funnywords('Bravo Six Going Dark');
funnywords('Hello World');
