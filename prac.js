let guessNumber= Math.floor(Math.random()* 100)+1 ;

const working = document.querySelector("working")
const guess = document.querySelector(".guess")
const range = document.querySelector(".range")
 const btn=document.querySelector(".button")
 const answer = document.querySelector(".answer")
 const number=document.querySelector(".previousguess")

btn.addEventListener("click", clicked)
console.log(guessNumber)
let guessCount =1;
let resetButton;
function clicked(){
   const userGuess = Number(guess.value)
   
   
   if (guessCount ===1){
    number.textContent = 'Previous guesses: ';
   // number.innerHTML= "you guessed "+  guess.value
   }
   number.innerHTML += `${ userGuess +" "}`;
    //number.innerHTML= "you guessed "+  guess.value
    
    if(guess.value ==guessNumber){
        answer.style.background='lightgreen';
        answer.innerHTML="correct you won...";
        range.innerHTML="";
       setGameOver();
      
    }
    else if(guessCount === 10){
        answer.innerHTML="!!!Game Over!!!" 
        range.innerHTML="";
        result=document.createElement('p')
        result.innerHTML= "the number was " + `${guessNumber}`
        document.body.append(result);
        setGameOver();
       
    }
    
    else if(guess.value<guessNumber){
        answer.innerHTML="wrong Number!!!" 
        answer.style.background="red"
        range.innerHTML="you have guessed too low"
       
    }
    else {
        answer.innerHTML="wrong Number!!!" 
        answer.style.background="red"
        range.innerHTML="you have guessed too high" 
    }
   
   guessCount++;
   guess.value='';
   guess.focus();
    console.log(guess.value)

}
function setGameOver() {
    guess.disabled = true;
    btn.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  function resetGame() {
    guessCount = 1;
  
    const resetsAll = document.querySelectorAll('.working p');
    for (const resetAll of resetsAll) {
      resetAll.textContent = '';
      result.textContent="";
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guess.disabled = false;
    btn.disabled = false;
    guess.value = '';
    guess.focus();
  
    answer.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

