
const vowelsChecker = (name) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    if (vowels.includes(name[0])) {
        console.log(name+ ' starts with Vowel ')
    }
    else {
        console.log(name+ ' start with a Consonant')
    }
}

task1('Alex')
task1('John')
