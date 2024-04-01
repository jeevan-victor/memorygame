function generateRandomNumber() {
    let randomNum = Math.random() * 100000000;
    randomNum = Math.floor(randomNum);
    return randomNum;
  }
  
  document.getElementById('start-button').addEventListener('click', function() {
    // Generate a random number
    let randomNumber = generateRandomNumber();
  
    // Display the random number on the game page
    document.getElementById('random-number').textContent = "Random Number: " + randomNumber;
  
    // Hide the start page and show the game page
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('game-page').style.display = 'block';
  });