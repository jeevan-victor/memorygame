
let countdownElement = document.getElementById("countdown");
    let count = 5;
    countdownElement.textContent = "Time remaining: " + count;




document.getElementById("start-button").addEventListener("click", function() {
    
    let randomNumber = generateNumber();
  

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

    
  });


  function generateNumber() {
    let randomNum = Math.random() * 100000000;
    randomNum = Math.floor(randomNum);
    return randomNum;
  }


  