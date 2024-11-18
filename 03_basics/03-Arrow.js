const user = {
    username: "Eleus",
    price: 199,

    welcomeMassege: function() {
        console.log(`${this.username} , welcome to our website`);
        // console.log(this);
        
        
    }
        
}

// user.welcomeMassege()
// user.username = " Bot"
// user.welcomeMassege()

//console.log(this);  [Empty]

//************* */

// function one() {
//     let username = "Eleus"
//     console.log(this);
//     //console.log(this.username);        //[undefine]
    
// }
// one()


// const two = function() {
//     let username = "Eleus"
//     // console.log(this);
//     console.log(this.username);          //[Undefine]
    
// }
// two()


// const three = () => {
//     let username = "Eleus"
//     console.log(this);              //[Empty]
//     console.log(this.username);            //[Undefined]
    
// }
// three()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addtwo(2,9));

// const addtwo = (n1 , n2) => n1 + n2
const addtwo = (n1 , n2) => ({username: "eleus"})

console.log(addtwo(5,7));

