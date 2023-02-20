// "use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



console.log("hello world")
let finalWord = [["hello"],
["robot"],
["jazz"],
["whisper"],
["price"],
["past"]]

let chancesLeft = 6
let guessWord = [];

let item = finalWord[Math.floor(Math.random()*finalWord.length)];

const gameBoard = () => {
    if (guessWord.length ===0) {
    for (let i = 0; i < item.length; i++) {
        guessWord.push("_")
    } }
    console.log(guessWord.join(""))
}

const userInput = (x) => {

    for(let i = 0; i < item.length; i++) {
        if(x === item[i]) {
            guessWord[i] = x
        }
     } 
        if(item.includes(x) == false) {
            console.log("sorry, try again")
            chancesLeft--
            console.log(`lives: ${chancesLeft}`)
        } 
        gameBoard()
    };

const checkForWIn = () => {
    if (!guessWord.includes("_")) {
        console.log("you won Hangman!")
    } else if (chancesLeft===0){
        console.log("You lose :(. Crtl + C and enter 'node index.js' to try again.")
    }
}

const startGame = (x) => {
    userInput(x)
    checkForWIn()
}
gameBoard()



const getPrompt = () => {
	rl.question('type a letter guess: ', (x) => {
		startGame(x);
		getPrompt();
	}); 
};
if (typeof describe === 'function') {
	describe('startGame()', () => {
	    it('should be of type function', () => {
			assert.equal(typeof startGame, 'function');
		});
	});
} else {
	getPrompt();
}
