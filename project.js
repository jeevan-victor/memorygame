
  function generateNumber() {
    let randomNum = Math.random() * 100000000;
    randomNum = Math.floor(randomNum);
    return randomNum;
  }



document.getElementById('start-button').addEventListener('click', function() {
    
    let randomNumber = generateNumber();
  

    document.getElementById('random-number').textContent = randomNumber;
  
   
    document.getElementById('start-page').style.display = 'none';
    document.getElementById("guessnumber-page").style.display = 'block';
  });


  