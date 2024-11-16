function name() {
console.log("E");
console.log("L");
console.log("E");
console.log("U");
console.log("S");
    
}

//name()

//function addTwonumber(num1, num2) {
   //console.log(num1 + num2);
    
    
//}


function addTwonumber(num1, num2) {
   //let result = num1 + num2

   //return result
   return num1 + num2
    
    
}

//addTwonumber(3, 6)
//addTwonumber(3, "6")
//addTwonumber(3, "a")
//addTwonumber(3, null)


const result = addTwonumber(3, 5)

//console.log( "Result" , result);


function loginuserMassege(username = "Bot") {
    if (!username) {
        console.log("Please enter a username");
        return
        
    }
    return `${username} Just logged in`
    
}

// console.log(loginuserMassege("Eleus"))
console.log(loginuserMassege("Eleus"))


