var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input")
var winningScoreDisplay = document.querySelector("p span")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
//--> CREATE A SCORE FUNCTION EVERYTIME CLICK ON PLAYER 1
p1Button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});
//--> CREATE A SCORE FUNCTION EVERYTIME CLICK ON PLAYER 2 
p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner")
            gameOver = true;
        }
    p2Display.textContent = p2Score;
    }
});
//--> CREATE A RESET FUNCTION WHEN CLICK ON RESET
resetButton.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
})
//--> CHANGE THE DISPLAY VALUE EVERYTIME SOMEONE SCORES.
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})
