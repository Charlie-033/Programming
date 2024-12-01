const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//const newnum = myNumbers.map((num)=> {return (num+10)})

const newnum = myNumbers
                .map( (num) => (num*5) )
                .map( (num) => (num+2) )
                .filter( (num) => num>=10 )

console.log(newnum)