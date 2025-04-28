// create a game where you start with any random game number. ask the user to kep guessing the game number until the user enters correct.
let gameNum = 25;
let userNum = prompt("guess the game number:");
// console.log(userNum);
while(userNum != gameNum){
    userNum = prompt(" you enter wrong game number , Guess again:");
}
console.log("congratulation you enter right");