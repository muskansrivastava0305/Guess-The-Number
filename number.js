let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

const submit = document.querySelector('#subm')
const userInput = document.querySelector('#game');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const loworHigh = document.querySelector('.lowhig')
const startOver = document.querySelector('.resultPass')

const p = document.createElement('p')

let prevGuess = [];
let numbeGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess < 1){
        alert('please enter a valid number')
    }else if(guess > 100 ){
        alert('please enter a valid number')
    }else {
        prevGuess.push(guess)
        if(numbeGuess === 11){
           displayGuess(guess)
           displayMessage(`Game over. Random number was ${randomNumber}`)
           endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guess it right`)
        endGame()
    }else if( guess < randomNumber){
        displayMessage(`Number is too Low`)
    }else if (guess > randomNumber)
        displayMessage(` Number is to High`)

}


function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numbeGuess++;
    remaining.innerHTML = `${11 - numbeGuess} `;
}


function displayMessage(message){
    loworHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numbeGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numbeGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })
}