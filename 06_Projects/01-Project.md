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
## Project 4
```Javascript
let randomNumbers = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const Startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numofguess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(0);
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numofguess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumbers}`);
      endgame();
    } else {
      displayGuess(guess);
      cheakGuess(guess);
    }
  }
}
function cheakGuess(guess) {
  if (guess === randomNumbers) {
    displayMessage('Congratulations!You guessed right');
    endgame();
  } else if (guess < randomNumbers) {
    displayMessage('Your guessed number is low');
  } else if (guess > randomNumbers) {
    displayMessage('Your guessed number is high');
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}   `;
  numofguess++;
  remaining.innerHTML = `${11 - numofguess}`;
}
function displayMessage(Message) {
  lowOrHi.innerHTML = `<h2>${Message}</h2>`;
}
function endgame() {
  userInput.value = '';
  userInput.setAttribute = ('Disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start Again</h2>`;
  Startover.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumbers = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numofguess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${10 - numofguess}`;
    userInput.removeAttribute('Disabled')
    Startover.removeChild(p)
    playGame = true

  })
 
}


```
## Project 6

``` Javascript 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unlimited Color</title>
</head>
<body style="background-color: #414141; color:#fff;">
    <h1>Start should change the background color every second!</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>
  const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 8; i++) {
      color += hex[Math.floor(Math.random()*16)];  
    }
    return color;
  };
  console.log(randomColor()); 
  
  let intervalId;
  const startchangingColor = function(){
    if(!intervalId){ intervalId = setInterval(changeBgColor,1000);

    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
   }
  const stopchangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
  }

  document.querySelector('#start').addEventListener('click',startchangingColor)
  document.querySelector('#stop').addEventListener('click',stopchangingColor)

</script>
</html>
```