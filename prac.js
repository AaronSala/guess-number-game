let guessNumber= Math.floor(Math.random()* 100) +1;
const guess = document.querySelector(".guess")
const range = document.querySelector(".range")
 const btn=document.querySelector(".button")
 const answer = document.querySelector(".answer")
btn.addEventListener("click", clickede)
console.log(guessNumber)
const number=document.querySelector(".previousguess")

function clickede(){
    if(guess.value ==guessNumber){
        answer.style.background={green};
        answer.innerHTML="correct you won"
       
    }
    
    else if(guess.value<guessNumber){
        answer.innerHTML="wrong" 
        range.innerHTML="you have guessed too low"
       
    }
    else {
        answer.innerHTML="wrong" 
        range.innerHTML="you have guessed too high" 
    }
    number.innerHTML= "you guessed "+  guess.value
   
    console.log(guess.value)

}

