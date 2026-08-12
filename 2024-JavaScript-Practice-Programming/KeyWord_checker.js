console.log("Check if Identifiers is a keyword or not")
const task2 = (keyword)=>{
    const keywords = ['int', 'float', 'double', 'char', 'string', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'return', 'void', 'public', 'private', 'protected', 'class', 'interface', 'extends', 'implements', 'static', 'final', 'abstract', 'synchronized', 'volatile', 'transient', 'native', 'strictfp', 'package', 'import', 'this', 'super', 'new', 'instanceof', 'true', 'false', 'null', 'enum', 'assert', 'goto']
    if (keywords.includes(keyword)){
        console.log(keyword +" is Reserved keyword")
    } else {
        console.log(keyword +" is not Reserved keyword  ")
    }
}


task2("int")
task2("jawad")
task2("void")
task2("for")
