# Project Related to DOM

## Project Link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## project 1

``` Javascript
   const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target)
    if(e.target.id === 'grey') {
     body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'white') {
     body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'yellow') {
     body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'blue') {
     body.style.backgroundColor = e.target.id 
    }
    if(e.target.id === 'black') {
     body.style.backgroundColor = e.target.id 
    }
  });
});
```


## Project 2

```Javascript
const form = document.querySelector('form');

// This use case will give you empty value
//  const height= parseInt(document.querySelector('#height')).value

form.addEventListener('submit', function(e) {
  e.preventDefault();

 const height= parseInt(document.querySelector('#height').value);
 const weight= parseInt(document.querySelector('#weight').value);
 const results= document.querySelector('#results');

 if(height === '' || height < 0 || isNaN(height)) {
   results.innerHTML = `please give a valid height ${height}`
 } else if(weight === ''|| weight < 0 || isNaN(weight)) {
   results.innerHTML = `please give a valid weight ${weight}`
 } else {
   const BMI = (weight / ((height*height) / 10000)).toFixed(2);
   //show the result
   results.innerHTML = `<span>${BMI}</span>`
   
   
  
   results.innerHTML = `<span>${BMI}</span> ||
   Underweight ${BMI<18.6} && Normal Range ${18.6<BMI<=24.9} && Overweight ${24.9<=BMI}`;

   
}
 
});

//if (BMI<18.6) {
//   results.innerText = 'Under Weight'
// }
// if (18.6<BMI<24.9) {
//   results.innerText = 'Normal Range'
// }
// if (BMI>24.9) {
//   results.innerText = 'Overweight'
// } 
  





```

## Project 3
``` Javascript 
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```