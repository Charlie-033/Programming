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
//console.log(loginuserMassege("Eleus"))


function calculatecartprice(val1, val2,...number1) {
    return number1
    }

console.log(calculatecartprice(200, 399, 650));

const user = {
    username: "Eleus",
    price: 199
}

function Handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
    
}
// Handleobject(user)
Handleobject({
    username: "Bot",
    price: 229
})

const newArray = [100, 200, 300, 400]

function returnsecondvalue(getvalue){
    return getvalue[1]
}
// console.log(returnsecondvalue(newArray));
console.log(returnsecondvalue([500, 400, 300, 1000]));

