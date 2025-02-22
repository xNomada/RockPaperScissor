const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

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
  }
  
  const computerSelection = getComputerChoice();

  if(humanSelection === 'rock' || humanSelection === 'paper' || humanSelection === 'scissors'){
    playRound(humanSelection, computerSelection);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  } else {
    console.log("Valio verga")
  }

  console.log(computerSelection);
  console.log(humanSelection);
  
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
