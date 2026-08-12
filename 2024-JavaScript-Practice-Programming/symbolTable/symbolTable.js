const fs = require('fs');

// Function to generate hash value for a given string
function generateHash(s) {
    let hashVal = 0;
    for (let i = 0; i < s.length; i++) {
        hashVal = ((hashVal << 5) - hashVal) + s.charCodeAt(i);
        hashVal &= hashVal; // Convert to 32-bit integer
    }
    return hashVal;
}

// Function to check if an identifier is valid or not
function isValidIdentifier(identifier) {
    if (/[a-zA-Z]/.test(identifier[0])) {
        for (let i = 1; i < identifier.length; i++) {
            if (!(/[a-zA-Z0-9_$]/.test(identifier[i]))) {
                return false;
            }
        }
        return true;
    }
    return false;
}

// Function to check if a keyword is reserved or not
function isReservedKeyword(keyword) {
    const keywords = ['int', 'float', 'double', 'char', 'string', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'return', 'void', 'public', 'private', 'protected', 'class', 'interface', 'extends', 'implements', 'static', 'final', 'abstract', 'synchronized', 'volatile', 'transient', 'native', 'strictfp', 'package', 'import', 'this', 'super', 'new', 'instanceof', 'True', 'False', 'None', 'enum', 'assert', 'goto'];
    return keywords.includes(keyword);
}

// Function to check if an operator is valid or not
function isValidOperator(operator) {
    return ['+', '++', '-', '--', '*', '/'].includes(operator);
}

// Function to classify token
function classifyToken(token) {
    if (!isNaN(token)) {
        return 'Number';
    } else if (isValidIdentifier(token)) {
        return 'Identifier';
    } else if (isReservedKeyword(token)) {
        return 'Keyword';
    } else if (isValidOperator(token)) {
        return 'Operator';
    } else {
        return 'Undefined';
    }
}

// Function to read symbols and tokens from a file and generate symbol table
function generateSymbolTable(filename) {
    const symbolTable = [];
    const code = fs.readFileSync(filename, 'utf8');
    const tokens = code.match(/\b\w+\b/g);
    for (const token of tokens) {
        let tokenName;
        if (isReservedKeyword(token)) {
            tokenName = 'Keyword';
        } else {
            tokenName = classifyToken(token);
        }
        const hashValue = generateHash(token);
        symbolTable.push([tokenName, token, hashValue]);
    }
    return symbolTable;
}

// Function to display symbol table
function displaySymbolTable(symbolTable) {
    console.log("Token Name        |    Token Value     |     Hash Value");
    console.log("-".repeat(55));
    for (const entry of symbolTable) {
        console.log(`${entry[0].padEnd(17)}|    ${entry[1].padEnd(17)}|     ${entry[2]}`);
    }
}

// Main function
function main() {
    const symbolTable = generateSymbolTable('symbol.txt');
    displaySymbolTable(symbolTable);
}

// Calling the main function
main();
