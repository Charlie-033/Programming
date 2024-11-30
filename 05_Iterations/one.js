//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        //console.log('5 is the best number');
        
    }
    //console.log(element);
}

for (let i = 0; i <=10 ; i++) {
    //console.log(`Outer loop value: ${i}`);
    
   for (let j = 0; j <=5; j++) {
    //console.log(`Inner loop value ${i} and inner loop ${j}`);
   // console.log(i +'*'+ j + '=' + i*j);
    
    }
    
}

let MyArray = ['Flash', 'Batman', 'Superman']
//console.log(MyArray.length);

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    //console.log(element);
}

// Break and Continue
for (let index = 1; index <=15; index++) {
    if (index==5) { console.log('detected 5');
       break
       continue
    
    }
    console.log(`Value of i is ${index}`);
    
}


