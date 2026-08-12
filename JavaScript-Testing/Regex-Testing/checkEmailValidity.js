console.log("Check Email")

const validEmail= (email)=>{
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = emailRegex.test(email);
    console.log(email +" = "+result)
}

validEmail("abc@gmail.com")
validEmail("abcgmail.com")
validEmail("abc@gmailcom")
validEmail("a b@gmail.com")
validEmail("a.as.asws-as@gmail.com")