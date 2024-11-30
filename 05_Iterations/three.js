// for of

const val = [1,2,3,4,5]
for (const num of val) {
    //console.log(num)
}

const greetings = 'Hello World!'
for (const greet of greetings) {
    //console.log(greet)
}

//Maps

const map = new Map()
map.set('BD', 'Bangladesh')
map.set('IN', 'India')
map.set('FR', 'France')
map.set('FR', 'France')

//console.log(map);
 
for (const [key, value] of map) {
console.log(key, '=>', value);
    
}
const MyObject = {
    'game1': 'freefire',
    'game2': 'bgmi'
}
for (const [key, value] of MyObject) {
   console.log(key, '=>', value) 
}  //[Doesn`t work forof in Object]