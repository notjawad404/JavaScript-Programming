function leapYear(year) {
    if(year % 4 === 0 ){
        if(year % 100 === 0 && year % 400 === 0){
           console.log("Year "+ year + " is a leap year")
           return 
        }
        else if(year % 100 === 0 && year % 400 !== 0){
           console.log("Year "+ year + " is not a leap year")
           return 
        }
        console.log("Year "+ year + " is a leap year")
        return 

    }
    else{
        console.log("Year "+ year + " is not a leap year")
    }
}

leapYear(2020)
leapYear(1900)
leapYear(2000)
