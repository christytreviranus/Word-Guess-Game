//Pick a random word

let words = [
    "guitar",
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

//Pick a random word from the array

let randomWord =  words[Math.floor(Math.random() * words.length)];

//Create an answer array to show underscores for the random word selected

let answer = [];

for (i = 0; i < words.length; i++){
    answer[i] = " _ ";
}

const remainingLetters = randomWord.length;

//Game Loop & User Progress

while (remainingLetters > 0){
    answer.join(" ");

    //Player Guess
    
}
While the word has not been guessed {
 Show the player their current progress
 Get a guess from the player
 If the player wants to quit the game {
 Quit the game
 }
 Else If the guess is not a single letter {
 Tell the player to pick a single letter
 }
 Else {
 If the guess is in the word {
 Update the player's progress with the guess
 }
 }
}
Congratulate the player on guessing the word