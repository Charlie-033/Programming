var c = 300
let a = 200
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner:", a);
    
    
}

// console.log(a);
// console.log(b);
// console.log(c);




function one() {
    const username = "Eleus"
   function two() {
    const website = "youtube"
    console.log(username);
     }

    // console.log(website);

    two()
    }

// one()


if (true) {
    const username = "Charlie"
    if (username === "Charlie") {
        const website = " Youtube"
    // console.log(username + website);
    
    }
    // console.log(website);
    
    
}
// console.log(website);


//+++++++++++++++  Interesting  +++++++++++++++??

addone()
function addone(sum) {
    return sum + 1
    
}

console.log(addone(2))


// addtwo()  *** Cannot access before ***
const addtwo = function(num){
    return num + 2
}

console.log(addtwo(6))