let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  const randomChoice = Math.floor(Math.random() * 10);
  
  if(randomChoice < 3) return "paper";
  if(randomChoice >= 3 && randomChoice < 6) return "rock";
  if(randomChoice >= 6) return "scissors";
}

function getHumanChoice(){
  const humanChoice = prompt('Choose between rock, paper and scissors').toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice){
  if(humanChoice === "rock" && computerChoice === "scissors"){
    humanScore += 1;
  }else if(humanChoice === "paper" && computerChoice === "rock"){
    humanScore += 1;
  }else if(humanChoice === "scissors" && computerChoice === "paper"){
    humanScore += 1;
  }else {
    computerScore += 1;
  }
}

playRound(getHumanChoice(), getComputerChoice());

console.log(getComputerChoice());
// console.log(getHumanChoice());
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);