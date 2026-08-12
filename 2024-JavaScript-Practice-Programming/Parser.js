
function LabTask(exp) {
    console.log("\nExpression: ", exp);
    
    // if (!checkBrackets(exp)) {
    //     return false;
    // }

    const token = exp.match(/[a-zA-Z0-9]+|[+\-*\/]/g);
    var stat = "";
    var isExp = false;
    var isOpetator = false;
    
    if (token.length < 1 || !(checkExp(token[0]))) {
        console.log("Invalid Expression: Expression must start with alphanumeric characters");
        return false;
    }
    
    for (var i = 0; i < token.length; i++) {
        if (checkExp(token[i]) || token[i] === "(") {
            stat += token[i];
            isExp = true;
            isOpetator = false;
        } else if (isOpetator && checkOp(token[i])) {
            console.log("Invalid Expression: Operator followed by another operator");
            return false;
        } else if (isExp && checkOp(token[i])) {
            stat += token[i];
            isExp = false;
            isOpetator = true;
        } else {
            console.log("Invalid Expression: Invalid character detected");
            return false;
        }
    }
    
    if (!isExp) {
        console.log("Invalid Expression: No expression found after operator");
        return false;
    }
    
    checkStat(stat, exp);
}

function checkExp(t){
    return /^[a-zA-Z0-9]+$/.test(t);
}

function checkOp(t){
    return ["+", "-", "*", "/"].includes(t);
}

function checkStat(stat, exp){
    const statWithoutSpaces = stat.replace(/\s/g, '');
    const expWithoutSpaces = exp.replace(/\s/g, '');
    if(statWithoutSpaces === expWithoutSpaces){
        console.log("Valid Expression");
        console.log("Statement matched");
    } else {
        console.log("Invalid Expression: Statement does not matched with Expression");
    }
}

// function checkBrackets(exp) {
//     const stack = [];
//     for (let i = 0; i < exp.length; i++) {
//         if (exp[i] === "(") {
//             stack.push("(");
//         } else if (exp[i] === ")") {
//             if (stack.length === 0 || stack.pop() !== "(") {
//                 console.log("Invalid Expression: Unbalanced brackets");
//                 return false;
//             }
//         }
//     }
//     if (stack.length !== 0) {
//         console.log("Invalid Expression: Unbalanced brackets");
//         return false;
//     }
//     return true;
// }

// Valid Expressions
LabTask("id * id / id");
LabTask("id + id");
LabTask("id + id * id");

// Invalid Expressions
LabTask("+ id");
LabTask("id +");
LabTask("id * id +");
