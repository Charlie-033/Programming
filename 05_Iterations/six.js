// const coding = [ 'js', 'python', 'cpp', 'ruby', 'swift']

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values); //undefined 

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = Numbers.filter((num) => (num>5))
// const newNum = Numbers.filter((num) => {
//    return num>7
// })

let newNum = []
Numbers.forEach( (num) => {
    if (num>3) {
        newNum.push(num)
    }
})

console.log(newNum)


const Books = [
    {title: 'Book One', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Two', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Three', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Four', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Five', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Six', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Seven', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Eight', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Nine', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Ten', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book One', genre: 'Science', publish:'1989' , edition: ' 2001'}
]
