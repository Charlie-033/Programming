//singleton
//Object.create

// Object literals

const MySym = Symbol("key1")

const jsuser = {
    name: "Eleus",
    "full name": "Eleus Ahmed",
    [MySym]:  "mykey1",
    age: 21,
    location: "Rajshahi", 
    email: "eleus44@gmail.com",
    isloggedIn: false ,
    lastlogindays: ['Saturday', 'Sunday']

}

//console.log(jsuser.email);
//console.log(jsuser["email"]);
//console.log(jsuser["full name"]);
//console.log(jsuser[MySym]);
//console.log(typeof jsuser[MySym]);


jsuser.email = "eleus11@gmai.com"
//console.log(jsuser.email);
//Object.freeze(jsuser)

//console.log(jsuser);

jsuser.email = "eleus33@gmail.com"
//console.log(jsuser.email);

jsuser.greeting = Function(
    console.log("Hello JS User")

) 
console.log(jsuser.greeting());
    
jsuser.greeting2 = Function(
    console.log(`Hello JS User, ${this.email}`)
) 
    
    
    console.log(jsuser.greeting2());




