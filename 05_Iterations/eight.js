const array1 = [2, 4, 6]
const accumulator = 0
// const Totalnum = array1.reduce(function (accumulator,currentval){
//     console.log(`accumulator value: ${accumulator} and currentval:${currentval}`)
//     return accumulator+currentval
// }, 0)

const Totalnum = array1.reduce( (acc,curr) => acc + curr , 0 )
console.log(Totalnum)

const Admissioncart = [
    {
        Courcename: ' Javascript ',
        Price: 5999
    },
    {
        Courcename: ' Java ',
        Price: 1999
    },
    {
        Courcename: ' Python ',
        Price: 3999
    },
    {
        Courcename: ' C++ ',
        Price: 2999
    }
]

const Totalpay = Admissioncart.reduce( (acc,item) => acc+ item.Price ,0 )
console.log(Totalpay);
