
console.log("Check if operator is valid or not")
const task3 = (operator)=>{
    

    if(operator == "+" || operator == "++" ||operator == "-" || operator == "--"||operator == "*" || operator == "/"){
        console.log(operator + " is Valid Operator")
    }
    else{
        console.log(operator + " is Invalid Operator")
    }
}

task3("++")
task3("+++")
task3("-")
task3("$")