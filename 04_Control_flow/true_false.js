const userEmail = ''
if (userEmail) {
    //console.log('got user Email');
    } else {
        //console.log('Dont have Email');
}

// Falsy Values
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0" , 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    //console.log('Array is empty')
}
const emptyObj = []
if (Object.keys(emptyObj).length === 0) {
   //console.log('Object is empty') 
}

// Nullish Coalescing Operator (??): null/ undefined
let val1;
//val1 = 5??10
// val1 = 0 ?? 1
// val1 = null??10
// val1 = undefined??10
//val1 = null??4??10
console.log(val1);

// Terniary Operator

// condition ? true : false

const HotTeaPrice = 100
HotTeaPrice>=90 ? console.log('more than 90') : console.log('less than 90');
HotTeaPrice>=90 ? console.log('less than 90') : console.log('more than 90');



