 let min = 1,
     max = 10,
     winningNum= 2,
     guessesLeft=3;

const game = document.getElementById('game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn= document.querySelector('#guess-btn'),
guessInput= document.querySelector('#guess-input'),
message= document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function() {
let guess = parseInt(guessInput.value);
console.log(guess);
if (isNaN(guess)|| guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}
});
if (guess === winningNum) {

    guessInput.disabled= true;
    guessInput.style.borderColor= 'green';
    setMessage(`${winningNum} is correct, You Win!`, 'green');
} else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
        guessInput.disabled = true;
        guessInput.style.borderColor= 'red';
        setMessage(`Game over, you lost. The correct number was ${winningNum}`)
    }
}

function setMessage(msg , color){
    message.style.color = color;
    message.textContent= msg;
}

function gameOver(won , msg) {

    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    gu

}