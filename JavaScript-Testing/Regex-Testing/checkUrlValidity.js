const validUrl = (url) => {
    const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const result = urlRegex.test(url)
    
    console.log(result);
}

validUrl("www.com")
validUrl("www.google.com.")
validUrl("wwwgooglecom")
validUrl("sfnwu3fweufu38")
validUrl("sfnwu38.com")
validUrl("sfnwu38.com.aw")