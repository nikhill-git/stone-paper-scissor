const choices = document.querySelectorAll(".box");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
}

let msg = document.querySelector(".msg");

const showWinner = (userWin) =>{
    if(userWin){
        msg.innerText = "You are the Winner!"
    }else
        msg.innerText = "You Lost, Computer is the Winner!";
}

const userScore = document.querySelector(".score1");
const compScore = document.querySelector(".score2");

const countWinner = (userWin) => {
    if(userWin){
        userScore.textContent = Number(userScore.textContent) + 1;
    }
    else {
        compScore.textContent = Number(compScore.textContent) + 1;
    }
}

let userWin;

const playGame = (userChoice) => {
    //now its time to generate the computer's choice
    
    let compChoice =  genCompChoice();//Modular way, that means
    //  for every single work there will be a seperate function, 
    // when ever we need to do that work , we can simply call the function.
    console.log("Computer Choice:", compChoice);
    
    if(userChoice === compChoice){
        msg.innerText = "Tie";
    }
    else {
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false: true;
        }else if (userChoice ==="paper"){
            userWin = compChoice === "rock"? true : false;
        }else if (userChoice ==="scissor"){
            userWin = compChoice === "rock"? false: true;
        }
        dupUserWin = userWin;
        showWinner(userWin);
        countWinner(userWin);
    }
    
}

let btn = document.querySelector(".btn");

btn.addEventListener("click", (userWin) => {
    userWin = true;
    userScore.textContent = "0";
    compScore.textContent = "0";
    msg.innerText = "Let's PLay";
});



choices.forEach( (choice) => {
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        console.log("User Choice:", userChoice);
        playGame(userChoice);
    })
})

