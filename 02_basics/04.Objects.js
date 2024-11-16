//const Tinderuser = new Object()
const Tinderuser = {}

Tinderuser.id = "abcde"
Tinderuser.name = "Eleus"
Tinderuser.isloggedIn = false

//console.log(Tinderuser);

const regularuser = {
    email: 'some@gmail.com',
    fullname:{
        userfullname:{
            firstname: 'Eleus',
            lastname: 'Ahmed'
        }
    } 

}
//console.log(regularuser.fullname?.userfullname.lastname);

const target = {a:2, b:3}
const source = {b:4, c:5}
const returnedtarget = Object.assign(target, source)
//console.log(target);
//console.log(source);
//console.log(returnedtarget);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 = Object.assign({}, obj1, obj2)

//console.log(obj3);

const obj3 = {...obj1, ...obj2}

//console.log(obj3);


//console.log(Tinderuser);

//console.log(Object.keys(Tinderuser));
//console.log(Object.values(Tinderuser));
//console.log(Object.entries(Tinderuser));

//console.log(Tinderuser.hasOwnProperty('id'));
//console.log(Tinderuser.hasOwnProperty('islog'));



const cource = {
    courcename: "Learning Js",
    price: "999",
    courceInstractor: "Eleus"
}

//console.log(cource.courceInstractor);

cource.courceInstractor

const {courceInstractor: Instractor} = cource

//console.log(courceInstractor);
console.log(Instractor);

//{
    //"name": "Eleus",
    //"Cource": "js",
    //"Price": "free",

/}//  JSON

[
    {},
    {},
    {}
]







