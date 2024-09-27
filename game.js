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
     while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Invalid choice. Please type 'Rock', 'Paper', or 'Scissors'.");
        choice = prompt("Type the valid input (Rock, Paper, Scissors)");
        choice = choice.toLowerCase();
    }
    return choice;
 }
 let humanScore = 0;
 let computerScore = 0;
 function playRound(humanChoice, computerChoice){
    if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" &&  computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You Won!");
            humanScore++;
        }
    else if (humanChoice === "paper" && computerChoice === "scissors" ||
             humanChoice === "rock" && computerChoice === "paper" ||
             humanChoice === "scissors" && computerChoice === "rock"){
                console.log("You Lost");
                computerScore++;
             }
    else console.log("It's Tied!"); 
 }
 function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);

        playRound(humanSelection, computerSelection);
    }
    console.log(`After five rounds, the score is ${humanScore} to ${computerScore}.`)
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose!");
    }
    else console.log("The score is tied.");
 }
 playGame();