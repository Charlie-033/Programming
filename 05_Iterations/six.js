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

//console.log(newNum)


const Books = [
    {title: 'Book One', genre: 'Science', publish:'1989' , edition: ' 2001'},
    {title: 'Book Two', genre: 'Fiction', publish:'1984' , edition: ' 1999'},
    {title: 'Book Three', genre: 'History', publish:'1999' , edition: ' 2009'},
    {title: 'Book Four', genre: 'Novel', publish:'1981' , edition: ' 2000'},
    {title: 'Book Five', genre: 'Science', publish:'1988' , edition: ' 2006'},
    {title: 'Book Six', genre: 'Novel', publish:'1987' , edition: ' 2005'},
    {title: 'Book Seven', genre: 'Fiction', publish:'1995' , edition: ' 2001'},
    {title: 'Book Eight', genre: 'Poetry', publish:'2003' , edition: ' 2009'},
    {title: 'Book Nine', genre: 'Science', publish:'2007' , edition: ' 2016'},
    {title: 'Book Ten', genre: 'History', publish:'2012' , edition: ' 2018'}
]

const userbooks = Books.filter( (book) => book.genre === 'History' )
const userbook = Books.filter ( (book) => { 
    return book.publish> 2000 && book.genre === 'Poetry'
} )
console.log(userbook)
