// "use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let finalWord = ["hello",
"robot",
"jazz",
"whisper",
"price",
"past"]

let chancesLeft = 6
let guessWord = [];
let item = finalWord[Math.floor(Math.random()*finalWord.length)];

const gameBoard = () => {
    if (guessWord.length === 0) {
    for (let i = 0; i < item.length; i++) {
        guessWord.push("_")
    } }
    console.log(guessWord.join(""))
}

const userInput = (letter) => {
    for(let i = 0; i < item.length; i++) {
        if(letter === item[i]) {
            guessWord[i] = letter
        }
     } 
        if(!item.includes(letter)) {
            console.log("sorry, try again")
            chancesLeft--
            console.log(`lives: ${chancesLeft}`)
        } 
        gameBoard()
    };

const checkForWIn = () => {
    if (!guessWord.includes("_")) {
        console.log("you win!")
    } else if (chancesLeft===0){
        console.log(`You lose :(. Your word was ${item}`)
    }
}

const startGame = (letter) => {
    userInput(letter)
    checkForWIn()
}
gameBoard()



function getPrompt() {
    rl.question('type a letter guess: ', (letter) => {
        startGame(letter);
        getPrompt();
    });
}
if (typeof describe === 'function') {
	describe('startGame()', () => {
	    it('should be of type function', () => {
			assert.equal(typeof startGame, 'function');
		});
	});
} else {
	getPrompt();
}
