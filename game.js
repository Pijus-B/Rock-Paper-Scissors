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
     else alert("Invalid choice, try again");
 }
 let humanScore = 0;
 let computerScore = 0;

 function playRound(humanScore, computerScore){
    if (getHumanChoice() === "paper" && getComputerChoice() === "rock" ||
        getHumanChoice() === "rock" &&  getComputerChoice() === "scissors" ||
        getHumanChoice() === "scissors" && getComputerChoice() === "paper"){
            console.log("You Won!");
            humanScore++;
        }
    else if (getHumanChoice() === "paper" && getComputerChoice() === "scissors" ||
             getHumanChoice() === "rock" && getComputerChoice() === "paper" ||
             getHumanChoice() === "scissors" && getComputerChoice() === "rock"){
                console.log("You Lost");
                computerScore++;
             }
    else console.log("It's Tied!"); 

 }