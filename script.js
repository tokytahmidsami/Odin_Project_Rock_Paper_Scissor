let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let choice = parseInt((Math.random()*5)) % 3;
    if (choice === 0) return "rock";
    if (choice === 1) return "paper";
    if (choice === 2) return "scissors";
}

function getUserChoice(){
    let choice = prompt("Write your move - Rock, Paper or Scissors: ").toLowerCase();
    while(choice !== "rock" && choice !== "scissors" && choice !== "paper"){
        choice = prompt("Please write any of the three - Rock, Paper or Scissors: ").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "scissors") {
            humanScore++;
            console.log(`Your ${humanChoice} beats computer's ${computerChoice}`);
        }
        else if(computerChoice === "paper"){
            computerScore++;
            console.log(`Computer's ${computerChoice} beats your ${humanChoice}`);
        }
        else console.log(`Tie: ${humanChoice} <-> ${computerChoice}`);
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            humanScore++;
            console.log(`Your ${humanChoice} beats computer's ${computerChoice}`);
        }
        else if(computerChoice === "scissors"){
            computerScore++;
            console.log(`Computer's ${computerChoice} beats your ${humanChoice}`);
        }
        else console.log(`Tie: ${humanChoice} <-> ${computerChoice}`);
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            humanScore++;
            console.log(`Your ${humanChoice} beats computer's ${computerChoice}`);
        }
        else if(computerChoice === "rock"){
            computerScore++;
            console.log(`Computer's ${computerChoice} beats your ${humanChoice}`);
        }
        else console.log(`Tie: ${humanChoice} <-> ${computerChoice}`);
    }
}

function playGame(){
    console.log(`Welcome to our game\n\nThere will be 5 rounds...\n\n`);
    let humanChoice, computerChoice;
    for(let i = 0; i < 5; i++){
        console.log(`Round - ${i+1}\n`);
        humanChoice = getUserChoice(); computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`\nYour Score: ${humanScore}\nComputer Score: ${computerScore}\n`);
    if(humanScore > computerScore) console.log("Congrats! You have won...\n");
    else if(humanScore === computerScore) console.log("Tie! No one is going to give up (^_^)...")
    else console.log("Sad! You have lost... Better luck next time...\n");
}

playGame();