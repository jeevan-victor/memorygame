
let countdownElement = document.getElementById("countdown");
    let count = 5;
    countdownElement.textContent = "Time remaining: " + count;

    let randomNumber = generateNumber();
    let inputNumber;

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
    
    console.log(inputNumber);

    if (inputNumber === randomNumber){
        document.getElementById("input-page").style.display = "none";
        //document.getElementById("wrong-page").style.display = "none";
          document.getElementById("correct-page").style.display = "block";
        //console.log("win");
    } else {document.getElementById("input-page").style.display = "none";
    document.getElementById("wrong-page").style.display = "block";
    //console.log ("lose");
}}

);
   
    function generateNumber() {
    let randomNum = Math.random() * 100000000;
    randomNum = Math.floor(randomNum);
    return randomNum;
  }


  
