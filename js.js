function getComputerChoice(){
  const randomChoice = Math.floor(Math.random() * 10);
  
  if(randomChoice < 3) return "paper";
  if(randomChoice >= 3 && randomChoice < 6) return "rock";
  if(randomChoice >= 6) return "scissors";
}

function getHumanChoice(){
  const humanChoice = prompt('Choose between rock, paper and scissor').toLowerCase();
  return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());