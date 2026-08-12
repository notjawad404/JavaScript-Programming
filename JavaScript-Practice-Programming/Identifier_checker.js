//Identifers

const identiferChecker = (Identifers)=>{
    // Can contain digits, letters, _ and $ and Should start with a 
    var result1
    if((Identifers[0] >= 'a' && Identifers[0] <= 'z') ||
    (Identifers[0] >= 'A' && Identifers[0] <= 'Z') ){
        for(i = 1; i < Identifers.length; i++){
            const char = Identifers[i]
            if((char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9') ||
            char === '_' ||
            char === '$'){
                result1 = "Valid"
            }
        }
    
    } else {
        result1 = "Invalid"
    }

    console.log(Identifers+" = "+ result1)

    
}

identiferChecker("1Hello")
identiferChecker("JavaScript")
identiferChecker("User_name")
identiferChecker("Age1")
identiferChecker("Name$")
