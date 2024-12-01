const coding = [ 'js', 'python', 'cpp', 'ruby', 'swift']
coding.forEach( function(language) {
//console.log(language)
} )

coding.forEach( (item) => {
    //console.log(item)
})

function print(item) {
    //console.log(item)
}
coding.forEach(print)

coding.forEach( (item, index, arr) => {
   // console.log(item, index, arr)
} )

let mycoding = [ 
    {
        languaseFilename: 'js',
        languasename: 'javascript'
    },
    {
        languasefilename: 'py',
        languasename: 'python'
    },
    {
        languasefilename: 'swift',
        languasename: 'swift by apple'
    }
]
mycoding.forEach((item)=> {
console.log(item.languasename)
})