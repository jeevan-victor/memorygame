let countdownElement = document.getElementById("countdown");
    let count = 5;
    countdownElement.textContent = "Time remaining: " + count;

    let randomNumber = generateNumber(8);
    let inputNumber;
    let clickCount = 0; // Track the number of times the "try again" button is clicked
    let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("userName").value;
    console.log(username);
}

    //Start game page
document.getElementById("start-button").addEventListener("click", function() {
    

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
});

//User input page
document.getElementById("enter-button").addEventListener("click", function() {
    inputNumber = document.getElementById("input-number").value;
    inputNumber = parseInt(document.getElementById("input-number").value);
    
    //console.log(inputNumber);

    if (inputNumber === randomNumber){
        document.getElementById("input-page").style.display = "none";
        document.getElementById("correct-page").style.display = "block";

    //console.log("win");
    } else {document.getElementById("input-page").style.display = "none";
    document.getElementById("wrong-page").style.display = "block";
    //console.log ("lose");
}});
   
// Correct number
document.getElementById("continue").addEventListener("click", function() {

    // Increase the length of the random number
    randomNumber = generateNumber(randomNumber.toString(8).length + 1);

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
    // Increase click count
    clickCount++;  
    
    // Display game over page if click count reaches 3
    if (clickCount === 3) {

        
        
        document.getElementById("wrong-page").style.display = "none";
        document.getElementById("gameover-page").style.display = "block";
      
    } else {
        // Otherwise, continue the game
        let randomNumber = generateNumber(8);

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
    }
});



//Function to generate a random number 
function generateNumber(a) {
    let max = Math.pow(10, a) - 1;
    let randomNum = Math.floor(Math.random() * max);
    return randomNum;
}



