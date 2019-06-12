//Declare Variables 

const words = [
    "chords",
    "fermata",
    "harmony",
    "melody",
    "octave",
    "sempre",
    "tempo",
    "larghetto",
    "instrumentation",
    "adagio"
];

let maxNumGuesses = 10;
let guessedLetters = []; 
let ansWordArr = []; 
let numGuessesRemaining = 0;
let numWins = 0; 
let numLosses = 0;
let isFinished = false;
let ansWord;

//Initialize and Reset Function
function setup() {
    //picks random word from words list
    ansWord = words[Math.floor(Math.random() * words.length)];
    
    ansWordArr = [];

    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

    //reset the variables 
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

    //show the selected elements on the screen 
    updateScreen();
};

//updates the HTML from the functions
function updateScreen() {
    document.getElementById("wins").innerHTML = "Wins: " + numWins;
    document.getElementById("losses").innerHTML = "Losses: " + numLosses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + numGuessesRemaining;
    document.getElementById("answerWord").innerHTML = ansWordArr.join(" ");
    document.getElementById("currentGuesses").innerHTML = "Your Guesses So Far: " + guessedLetters;
};

//function to check the key that's pressed
function checkGuess(letter) {
    //For Guessed Letters not in AnsWord, Push to Guessed Letters Array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesRemaining
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
        //if letter is in answer then replace the positioned "_" with the letter
        } else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }
}; 

//function to check if the player is a winner
function isWinner() {
    //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
    if (ansWordArr.indexOf(" _ ") === -1) {
        numWins++;
        updateScreen();
        isFinished = true;
    }
};

//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining === 0) {
        numLosses++;
        isFinished = true;
    }

};

//event listener for key pressed
document.onkeyup = function(event) {
    //if isFinished is true then restart the game to the initial setup 
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
            checkGuess(event.key.toLowerCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    };


setup();
updateScreen();

console.log(ansWord);