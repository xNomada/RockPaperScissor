const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const humanScr = document.querySelector("#humanScore");
const computerScr = document.querySelector('#computerScore');

const container = document.querySelector(".container");


let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const randomChoice = Math.floor(Math.random() * 10);
  
  if(randomChoice < 3) return "paper";
  if(randomChoice >= 3 && randomChoice < 6) return "rock";
  if(randomChoice >= 6) return "scissors";
}


function playGame(humanSelection){
  
  function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors"){
      humanScore += 1;
    }else if(humanChoice === "paper" && computerChoice === "rock"){
      humanScore += 1;
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
      humanScore += 1;
    }else if(humanChoice === computerChoice){
      console.log("Tie");
    }else {
      computerScore += 1;
    }

    console.log(computerScore);
    humanScr.textContent = `Your score: ${humanScore}`;
    computerScr.textContent = `Computer Score: ${computerScore}`;
  }
  
  const computerSelection = getComputerChoice();

  
  console.log(computerScr.textContent);


  playRound(humanSelection, computerSelection);

  if(humanScore === 5){
    let winningSign = document.createElement("div");
    winningSign.textContent = "You're the winner";
    winningSign.classList.add('winningSign');
    container.appendChild(winningSign);
  }

  if(computerScore === 5){
    let winningSign = document.createElement("div");
    winningSign.textContent = "Computer is the winner";
    winningSign.classList.add('winningSign');
    container.appendChild(winningSign);
  }
  

}


btnRock.addEventListener("click", e => {
  let target = e.target;

  playGame(target.id);
})

btnPaper.addEventListener("click", e => {
  let target = e.target;

  playGame(target.id);
})

btnScissors.addEventListener("click", e => {
  let target = e.target;

  playGame(target.id);
})

