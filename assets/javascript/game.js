//Declare Variables 

let words = [
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

var maxNumGuesses = 25; // max number of guesses 
var guessedLetters = []; // store the guessed letters
var ansWordArr = []; // store the "_" and to be used to replace the word answer
var numGuessesRemaining = 0; // number of guesses remaining
var numWins = 0; // number of wins
var numLosses = 0; // number of losses
var isFinished = false; // when true, game can start again
var ansWord; // the word that is being played

// function runs at the start of page and used to restart after game isFinished
function setup() {
    //picks random word from words list
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

    // adds "_" to ansWordArr
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

    // reset the variables 
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

    //show the selected elements on the screen 
    updateScreen();
};

//updates the HTML from the functions
function updateScreen() {
    document.getElementById("wins").innerText = "Wins: " + numWins;
    document.getElementById("losses").innerText = "Losses: " + numLosses;
    document.getElementById("guessesLeft").innerText = "Guesses Left: " + numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("currentGuesses").innerText = "Your Guesses So Far: " + guessedLetters;
};

//function to check the key that's pressed
function checkGuess(letter) {
    //if letter is not in guessedLetters array then push the letter to the array
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
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
    }
};

//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
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
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};


setup();
updateScreen();

console.log(ansWord);