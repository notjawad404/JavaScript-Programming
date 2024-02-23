// Program  to check the number of letters, digits and special characters in a message

const strangeMessage = (message) => {
    let letter = 0, digit = 0, special = 0
    for (let i = 0; i < message.length; i++) {
        if (message[i] >= 'a' && message[i] <= 'z' || message[i] >= 'A' && message[i] <= 'Z') {
            letter += 1
        }
        else if (message[i] >= '0' && message[i] <= '9') {
            digit += 1
        }
        else {
            special += 1
        }
    }
    console.log('The message has ' + letter + ' letters, ' + digit + ' digits and ' + special + ' special characters')
}

strangeMessage('dsesef243234234/.;@#@$*(@')