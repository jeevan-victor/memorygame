let countdownElement = document.getElementById("countdown");
let count = 5;
countdownElement.textContent = "Time remaining: " + count;

let randomNumber = generateNumber();
let inputNumber;
let username;
let wrongGuess = 0;


document.getElementById("submit").onclick = function(){
username = document.getElementById("userName").value;
console.log(username);
}

document.getElementById("easy-button").addEventListener("click", function() {
    randomNumber = generateNumber(4);
    startGame();
    });
    document.getElementById("medium-button").addEventListener("click", function() {
        randomNumber = generateNumber(6);
    startGame();
});
    document.getElementById("hard-button").addEventListener("click", function() {
        randomNumber = generateNumber(8)
    startGame();
});


function startGame() {

//Random Number page
document.getElementById("random-number").textContent = randomNumber;
document.getElementById("start-page").style.display = "none";
document.getElementById("guessnumber-page").style.display = "block";

//Countdown Timer
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

//User input page
document.getElementById("enter-button").addEventListener("click", function() {
inputNumber = document.getElementById("input-number").value;
inputNumber = parseInt(document.getElementById("input-number").value);

console.log("input",inputNumber);
console.log("random", randomNumber);

if (inputNumber === randomNumber){
    document.getElementById("input-page").style.display = "none";
    document.getElementById("correct-page").style.display = "block";

//console.log("win");
} else {
document.getElementById("input-page").style.display = "none";
document.getElementById("wrong-page").style.display = "block";
//console.log ("lose");
}});

// Correct number 
document.getElementById("continue").addEventListener("click", function() {

// Increase the length of the random number
randomNumber = generateNumber(randomNumber.toString().length + 1);

// Display the new random number
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


// Wrong number 
document.getElementById("try-again").addEventListener("click", function() {
    
    if (wrongGuess < 2) {

    
    randomNumber = generateNumber(randomNumber.toString().length);

    // Display the new random number
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
} else {
    // Go to game over page
    document.getElementById("guessnumber-page").style.display = "none";
    document.getElementById("wrong-page").style.display = "none";
    document.getElementById("gameover-page").style.display = "block";
}
wrongGuess++;
    
});


//Function to generate a random number 
function generateNumber(a) {
    let min = Math.pow(10, a - 1); 
    let max = Math.pow(10, a) - 1; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    