let playerMove = 0, compMove = -8, playerScore = 0, compScore = 0, winScore = 19;

//rock -> 0, paper -> 1, scissor -> 2

const body = document.querySelector("body");
const base = document.querySelector("#base");
const moves = document.querySelector("#moves");
const playerScoreDiv = document.querySelector("#player_s");
const compScoreDiv = document.querySelector("#computer_s");
const playerHand = document.querySelector("#player .hand img");
const compHand = document.querySelector("#computer .hand img");

const result = document.createElement("div");
const resultMassage = document.createElement("p");
const resultImage = document.createElement("img");
const refreshMassage = document.createElement("p");

result.style.cssText = "display: flex; flex-direction: column; height: 90vh; justify-content: space-around; align-items: center; margin: auto; background-color: rgba(122, 218, 239, 0.192); font-family: 'Brush Script MT', cursive; font-weight: bold; font-size: 2rem;";
refreshMassage.textContent = "Refresh the page to play again.";
resultImage.style.cssText = "width: 30%; border: 2px solid black; border-radius: 10%;";


result.appendChild(resultImage);
result.appendChild(resultMassage);
result.appendChild(refreshMassage);

function updateScore(playerMov, compMov){
    if(playerMov === 0){
        if(compMov === 1) compScore++;
        else if(compMov === 2) playerScore++;
    }
    else if(playerMov === 1){
        if(compMov === 0) playerScore++;
        else if(compMov === 2) compScore++;
    }
    else{
        if(compMov === 0) compScore++;
        else if(compMov === 1) playerScore++;
    }
}

function generateCompMove(){
    let m = Math.floor((Math.random())*3)
    if(m === 0) compHand.setAttribute("src", "./rock.jpg");
    else if(m === 1) compHand.setAttribute("src", "./paper.jpg");
    else compHand.setAttribute("src", "./scissor.jpg");
    return m;
}

function detectPlayerMove(event){
    if(playerScore === winScore || compScore === winScore){
        if(playerScore > compScore){
            resultImage.setAttribute("src", "./winner.jpg");
            resultMassage.textContent = "Yoho! You have won!";
        }
        else{
            resultImage.setAttribute("src", "./loser.jpg");
            resultMassage.textContent = "Oops! You have lost.";
        }
        body.removeChild(base);
        body.appendChild(result);
    }
    else{
        const button = event.target.id;
        console.log(button);
        if(button === "r") playerMove = 0, playerHand.setAttribute("src", "./rock.jpg");
        else if(button === "p") playerMove = 1, playerHand.setAttribute("src", "./paper.jpg");
        else if(button === "s") playerMove = 2, playerHand.setAttribute("src", "./scissor.jpg");
        console.log(playerMove);
        compMove = generateCompMove();
        console.log(compMove);
        updateScore(playerMove, compMove);
        playerScoreDiv.textContent = playerScore.toString();
        compScoreDiv.textContent = compScore.toString();
    }
}

moves.addEventListener('click', detectPlayerMove);
