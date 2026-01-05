let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame=()=>{
    msg.innerText="game was draw"
     msg.style.backgroundColor="black"
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice==compChoice){
        drawGame();
    }
    else {
    let userWin;

    if (userChoice === "rock") {
        userWin = compChoice === "scissors";
    } 
    else if (userChoice === "paper") {
        userWin = compChoice === "rock";
    } 
    else { // scissors
        userWin = compChoice === "paper";
    }

    if (userWin) {
        userScore++;
        userScorePara.innerHTML=userScore;
        msg.innerText=`you win ! Your${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerHTML=compScore;
        msg.innerText=`you lose. ${compChoice} beats ${userChoice}`;
       msg.style.backgroundColor="red"
    }
}

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
            playGame(userChoice);
    })
})