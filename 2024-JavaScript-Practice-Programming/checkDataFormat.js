
// Program to check valid data format in a string

function  checkDataFormat (data){
    const patterns = [
        /\b(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[0-2])[/-](\d{4})\b/,
        /\b(0?[1-9]|1[0-2])[/-](0?[1-9]|[12][0-9]|3[01])[/-](\d{4})\b/,
        /\b(0?[1-9]|[12][0-9]|3[01]) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* (\d{4})\b/, 
        /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* (0?[1-9]|[12][0-9]|3[01]) (\d{4})\b/ 
    ];

        var output = false
        for(const pattern of patterns){
            const result = data.match(pattern)
            if(result){
                console.log(`${data} contains a valid date format`)
                output = true
            }
        }
        
        if(!output){
            console.log(`${data} doesnot contains a valid date format`)
        }


    }


checkDataFormat("Todays Date is 12/12/2020")
checkDataFormat("12-12-2020 is todays date")
checkDataFormat("12 is on 12 Dec 2020")
checkDataFormat("Dec 12 2020")
checkDataFormat("56/55/2220 is todays date")
