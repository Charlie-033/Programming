let myDate = new Date()

//console.log(myDate);

//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

console.log(typeof myDate);

//let mycreatedDate = new Date(2024 , 10 , 11)
//let mycreatedDate = new Date(2024 , 10 , 11 , 5, 4 ,44)
//let mycreatedDate = new Date("2024-11-11")
//let mycreatedDate = new Date("11-11-2024")
//console.log(mycreatedDate.toLocaleString());


let mytimeStamp = Date.now()
//console.log(mytimeStamp);

let mycreatedDate = new Date("11-11-2024")
//console.log(mycreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000)); (in seconds)

let newDate = new Date()
console.log(newDate);

console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})








