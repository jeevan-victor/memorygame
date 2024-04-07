let countdownElement = document.getElementById("countdown");
let count = 5;
countdownElement.textContent = "Time remaining: " + count;

let randomNumber = generateNumber();
let inputNumber;
let username;
let wrongGuess = 1;
let highScore = 0;
let playerUsername = ""; 


document.getElementById("submit").onclick = function(){
    username = document.getElementById("userName").value;
    playerUsername = username;
    console.log(username);
}

document.getElementById("easy-button").addEventListener("click", function() {
    randomNumber = generateNumber(4);
    increment = 1;
    startGame();
    });
    document.getElementById("medium-button").addEventListener("click", function() {
        randomNumber = generateNumber(6);
        increment = 2;
        startGame();
});
    document.getElementById("hard-button").addEventListener("click", function() {
        randomNumber = generateNumber(8)
        increment = 3;
       startGame();
});


function startGame() {


document.getElementById("random-number").textContent = randomNumber;
document.getElementById("start-page").style.display = "none";
document.getElementById("guessnumber-page").style.display = "block";


let countdownInterval = setInterval(function() {
  count--;
  countdownElement.textContent = "Time remaining: " + count;
  if (count === 0) {
    clearInterval(countdownInterval);
    document.getElementById("guessnumber-page").style.display = "none";
      document.getElementById("input-page").style.display = "block";
  }
}, 1000);
};


document.getElementById("enter-button").addEventListener("click", function() {

inputNumber = parseInt(document.getElementById("input-number").value);

console.log("input",inputNumber);
console.log("random", randomNumber);

if (inputNumber === randomNumber){
    document.getElementById("input-page").style.display = "none";
    document.getElementById("correct-page").style.display = "block";


    
if (inputNumber.toString().length > highScore) {
    highScore = inputNumber.toString().length;
    updateHighScore(); 
        
}

if(highScore >=15) {
    document.getElementById("input-page").style.display = "none";
    document.getElementById("correct-page").style.display = "none";
    document.getElementById("winning-page").style.display = "block";
    winningPage();
 }  


} else {
document.getElementById("input-page").style.display = "none";
document.getElementById("wrong-page").style.display = "block";

}});


document.getElementById("continue").addEventListener("click", function() {


randomNumber = generateNumber(randomNumber.toString().length + increment);


document.getElementById("random-number").textContent = randomNumber;

document.getElementById("correct-page").style.display = "none";
document.getElementById("guessnumber-page").style.display = "block";


count = 5;
countdownElement.textContent = "Time remaining: " + count;


countdownInterval = setInterval(function() {
    count--;
    countdownElement.textContent = "Time remaining: " + count;
    if (count === 0) {
      clearInterval(countdownInterval);
      document.getElementById("guessnumber-page").style.display = "none";
        document.getElementById("input-page").style.display = "block";
    }
  }, 1000);

});



document.getElementById("try-again").addEventListener("click", function() {
    

    if (wrongGuess === 3) {
        
        document.getElementById("guessnumber-page").style.display = "none";
        document.getElementById("wrong-page").style.display = "none";
        document.getElementById("gameover-page").style.display = "block";
    } else {

    
    randomNumber = generateNumber(randomNumber.toString().length);

    
    document.getElementById("random-number").textContent = randomNumber;
     document.getElementById("wrong-page").style.display = "none";
    document.getElementById("guessnumber-page").style.display = "block";

    count = 5;
    countdownElement.textContent = "Time remaining: " + count;

    countdownInterval = setInterval(function() {
        count--;
        countdownElement.textContent = "Time remaining: " + count;
        if (count === 0) {
            clearInterval(countdownInterval);
            document.getElementById("guessnumber-page").style.display = "none";
            document.getElementById("input-page").style.display = "block";
        }
    }, 1000);

wrongGuess++;
    
}});



function generateNumber(a) {
    let min = Math.pow(10, a - 1); 
    let max = Math.pow(10, a) - 1; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    function updateHighScore() {
    document.getElementById("highscore").textContent = highScore + " digits guessed correctly by " + playerUsername;
    }

    function winningPage() {
        document.getElementById("winner").textContent = "Congratulations! " + playerUsername + ", you have guessed 15 digits correctly";
        }