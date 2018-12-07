// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var wordBank = ["apple", "banana", "cucumber", "donut","eggplant", "frogs", "gumbo", "horse","iceberg lettuce", "junk food", "kiwi", "lemonade","marshmellow", "nuts", "octopus", "pizza slice","quail", "roasted chicken", "steak", "turkey","unagi", "vegetables", "walnuts"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var guessesRemaining = 6; 
var hiddenWord = ""; 
var letterPosition  = "";
var testingtxt = "";
var guessedLetters = [];
var allowedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
// Randomly chooses a choice from the options array. This is the Computer's guess.
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

for (var i = 0; i < currentWord.length; i++){
    hiddenWord += "_";    
}

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
// var currentWordText = document.getElementById("currentWord-text"); 
var hiddenWordText = document.getElementById("hiddenWord-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var imageToShowImg = document.getElementById("imageToShow");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    if (allowedLetters.indexOf(event.key) > -1){
    // Determines which key was pressed.
        var userGuess = event.key;
        var letterPosition = currentWord.search(userGuess); 
        if (letterPosition !== -1){
            hiddenWord = replaceStr(currentWord,hiddenWord, userGuess);
        }
        else if (guessedLetters.indexOf(userGuess) === -1){
            guessedLetters.push(userGuess);
            guessesRemaining -= 1;
        }
        if (guessesRemaining === 0)
        {
            reset();
        }
        else if (hiddenWord === currentWord) {
            wins += 1;
            reset();
        }

        function replaceStr(orgstr,str,value){
            var arr = orgstr.split("");
            var strarr = str.split("")
            for (var i = 0; i < orgstr.length; i++){
                if (arr[i] === userGuess) {
                    strarr[i]=arr[i];
                }
            }   
            return strarr.join('');
        }

        function reset(){
            guessesRemaining = 6; 
            letterPosition  = "";
            hiddenWord = "";
            guessedLetters = [];
            // Randomly chooses a choice from the options array. This is the Computer's guess.
            currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

            for (var i = 0; i < currentWord.length; i++){
                if (currentWord.textContent !== " ") {
                hiddenWord += "_";    
                }
            }
        }   

}
//   // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

//     // Hide the directions
directionsText.textContent = "";

// Display the user and computer guesses, and wins/losses/ties.
guessedLettersText.textContent = guessedLetters;
hiddenWordText.textContent = hiddenWord;
winsText.textContent = wins;
guessesRemainingText.textContent = guessesRemaining;
if (guessesRemaining === 6){
    imageToShowImg.src = "";
}
if (guessesRemaining === 5){
    imageToShowImg.src = "assets/images/hangman-1.png";
}
if (guessesRemaining === 4){
    imageToShowImg.src = "assets/images/hangman-2.png";
}
if (guessesRemaining === 3){
    imageToShowImg.src = "assets/images/hangman-3.png";
}
if (guessesRemaining === 2){
    imageToShowImg.src = "assets/images/hangman-4.png";
}
if (guessesRemaining === 1){
    imageToShowImg.src = "assets/images/hangman-5.png";
}

};