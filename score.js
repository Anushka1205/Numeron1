// Iteration 8: Making scoreboard functional

let gamescore=localStorage.getItem("gamescore");

let scoreboard=document.getElementById("score-board");
scoreboard.innerText=gamescore;

let playAgainBtn=document.getElementById("play-again-button").addEventListener;


let playBtn=document.getElementById("play-again-button");

playBtn.onclick=()=>{
    window.location.href="./index.html";
}