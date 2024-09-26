function getComputerChoice(x){
    let num = Math.floor(Math.random() * x)
     if (num === 0){
         return "rock"
     }
     else if (num === 1){
         return "paper"
     }
     else return "scissors";
 }
 function getHumanChoice(){
     let choice = prompt("Type the valid input (Rock, Paper, Scissors)");
     choice = choice.toLowerCase();
     if (choice === "rock" || choice === "paper" || choice === "scissors")
     return choice;
     else return "Invalid choice, try again";
 }
 let humanScore = 0;
 let computerScore = 0;

 function playRound(humanScore, computerScore){

 }
 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice();

 playround(humanSelection, computerSelection);