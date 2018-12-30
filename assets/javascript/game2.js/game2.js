
var score = 0; //score for correct words guessed
var lives = 6; //lives remaining before gameover
var movieIndex = 0; //index for selecting movie from movies array
var guessesRemaining = 6; //guesses remaining before life lost
var guessedLetters = []; //array of guessed letters to be displayed 
var titleUpcases = [];
var titleString = []; //array of letters in title
var guessedWord = []; 
var positionCap = [];//array of correct letters guessed by user
// var position = []; //position of correct letters guessed to put into guessedWord
gameStarted= false;
var hasFinished = false; //letter guessed
var movies = [
   {
       title: "The Godfather",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "assets/images/01 Sara Smile.m4a"
   },
       
   {
       title: "Easy Rider",
       pic: "assets/images/easy-rider_a-G-7615608-0.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc"
   },
   {
       title: "Titanic",
       pic: "assets/images/Titanic.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc"
   },
    {
       title: "Goodfellas",
       pic: "assets/images/GoodFellas.jpg",
       song: "https://www.youtube.com/watch?v=KEVoYimdY4M"
   },
    {
       title: "A Clockwork Orange",
       pic: "assets/images/a-clockwork-orange-a-stanley-kubrick-movie_a-G-14788756-0.jpg",
       song: ""
   },
    {
       title: "Shane",
       pic: "assets/images/Shane-1953-movie-poster.jpg",
      //  song: """<iframe width="560" height="315" src="https://www.youtube.com/embed/XiYjHu5B6Nc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"""
   },
   {
       title: "Chinatown",
       pic: "assets/images/Chinatown.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc"
   },
    {
       title: "The Graduate",
       pic: "assets/images/the-graduate-md-web.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc"
   },

   {
    title: "Citizen Kane",
    pic: "assets/images/french_citizen_kane_R50s_original_film_art_spo_2000x.jpg",
    song: "https://www.youtube.com/embed/F9vA7L8H4nc"
   }];

 //resets word once user runs out of guesses   
 function resetWord (){
   titleUpcases = [];
   titleString = [];
   guessedLetters = [];
   guessedWord = [];
   movieIndex = Math.floor(Math.random() * (movies.length));
   guessesRemaining = 6;
   document.getElementById("#movieWin").src = "";
   titleArr();
 }
 //restarts the game, clears out score, resets lives, titleString
   function resetGame (){
   score = 0;
   lives = 6;
   titleUpcases = [];
   titleString = [];
   guessedLetters = [];
   guessedWord = [];
   movieIndex = Math.floor(Math.random() * (movies.length));
   guessesRemaining = 6;
   document.getElementById("#movieWin").src = "";
   titleArr();
 };
 //sets the titleString to check user input against  
 function titleArr (){
      titleUpcases= (movies[movieIndex].title.split(""));   
      titleString = (movies[movieIndex].title.toLowerCase().split(""));
    correctArr();
 };

  function correctArr(){ 
    for(var i = 0; i < titleString.length; i++){
      guessedWord.push(" _ ");
    }
      var position = [];   
      for(var i = 0; i < titleString.length; i++) {
      if(titleString[i] === " " ){
            position.push([i]);
      }
   }
      for(var i = 0; i < position.length; i++){
         guessedWord[position[i]] = (" . ");
        
         }
   for(i = 0; i < titleUpcases.length; i ++){
            if(titleUpcases[i] !== titleString[i]){
               positionCap.push(i);
            }
         }
      updateStats();
    };

//  function createBlanks(){
//    for( var i = 0; i < titleString.length; i++){
//    document.querySelector("#guesses").innerText += " _ ";}
//    startStats();
//    getLetter();
//    }

// function startStats(){
//    document.querySelector("#score").innerText = "Your score is " + score;
//    document.querySelector("#lives").innerText = "You have " + lives + " lives remaining";
//    document.querySelector("#guesses_left").innerText = "You have " + guessesRemaining + " guesses left";
// }

 function updateStats () {
   document.querySelector("#score").innerText = "Score:  " + score;
   document.querySelector("#letters_guessed").innerText = guessedLetters;
   document.querySelector("#lives").innerText = "Lives: " + lives;
   document.querySelector("#guesses_left").innerText = "Guesses: " + guessesRemaining;
   document.querySelector("#guesses").innerText = " ";
   
   
  for(i = 0; i < positionCap.length; i++){
     if(guessedWord[positionCap[i]] !== " _ " && guessedWord[positionCap[i]] !== "  " ){
        var letter = guessedWord[positionCap[i]];
        guessedWord[positionCap[i]] = letter.toUpperCase() ;
     }
   }
   for(i = 0; i < guessedWord.length; i++){
   document.querySelector("#guesses").innerText += guessedWord[i];
   }
   if(lives <= 0){
      alert("Game over. Try Again?");
      resetGame();
   }
};


   // getLetter();
// function getLetter() {
    document.onkeyup = function(event) {
       //checks for "abc" then chekcs if the letter has already been guessed,    
       if(hasFinished){
          resetWord();
          hasFinished = false;
       }
       else{
          if (event.keyCode >= 65 && event.keyCode <= 90){
          //input to lower case, catch input as variable    
          checkLetter(event.key.toLowerCase());
       }
      }
   };
   //     if (guessedLetters.indexOf(letter) === -1){
   //          checkLetter();
   //     }  else{
   //        getLetter();
   //     }
   //  }
//check to see there are guesses left then get a letter from the user
function checkLetter (letter){
   if(guessesRemaining > 0){
   // if(guessedWord.indexOf(letter) === -1){
   //    if(titleString.indexOf(letter) > -1){
   //       positionLetter();
   //    } 
   // } 
   
   if(guessedLetters.indexOf(letter) === -1) { 
                       guessedLetters.push(letter);
                     //   guessesRemaining --;
                        evaluateGuess(letter);
    } 
                
   }else {
      lives --;
      resetWord();
      updateStats();
   }        
   wordFinished();
   updateStats();
   };
function evaluateGuess(letter){
   var position = [];   
   for(var i = 0; i < titleString.length; i++){
         if(titleString[i] === letter){
            position.push(i);
            
            // updateGuess(letter);
      }
   }
   if(position.length <= 0) {
      guessesRemaining --;
   } else{
      for(var i = 0; i < position.length; i++){
         guessedWord[position[i]] = (letter);
         }
   }
};
function movieSong () {
   var winAudio = document.createElement("audio");
   winAudio.setAttribute("src", movies[movieIndex].song);
   winAudio.play();
}  
//    wordFinished();
// }
function wordFinished (){
   if(guessedWord.indexOf(" _ ") === -1) {
      score ++;
      hasFinished = true;
      // movieSong();
      document.getElementById("#movieWin").src = movies[movieIndex].pic; 
   } 
};
function startGame(){
   alert("Welcome to AMC Top 100 Word Guess. Press enter to begin!");
   resetGame();
};
startGame();
