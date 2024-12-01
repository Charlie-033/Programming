const Myobject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in Myobject) {
   //console.log(`${key} shortcurt is for ${Myobject[key]}`) 
}

const Arr = [ 'js', 'cpp', 'java', 'py']
for (const key in Arr) {
   //console.log(Arr[key])
}

const map = new Map()
map.set('BD', 'Bangladesh')
map.set('IN', 'India')
map.set('FR', 'France')
map.set('FR', 'France')

for (const key in map) {
  console.log(key)
}