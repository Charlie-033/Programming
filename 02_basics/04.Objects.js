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
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);



