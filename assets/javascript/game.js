//array of objects titles and other info
var score = 0;
var lives = 6;
var movieIndex = 0;
var guessesRemaining = 7;
var movies = [
   {
       title: "The Godfather",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc",
       titleString: [],
       position: [],
       guessedLetters: [],
       guessedWord: [],
       letter: "",
       titleArr: function(){
          
          this.titleString = (this.title.toLowerCase().split(""));
          this.correctArr();
       },
       correctArr: function(){ 
          for(i = 0; i < this.titleString.length; i++){
            this.guessedWord.push("_");}
            this.createBlanks();
          },
      createBlanks: function(){
         for( var i = 0; i < this.titleString.length; i++){
         document.querySelector("#guesses").innerText += " _ ";}
         this.startStats();
         getLetter();
         },
      startStats: function(){
         document.querySelector("#score").innerText = "Your score is " + score;
         document.querySelector("#lives").innerText = "You have " + lives + " lives remaining";
         // document.querySelector("#guesses_left").innerText = "You have " + guessesRemaining + " guesses left";
      },
      updateStats: function() {
         document.querySelector("#score").innerText = "Your score is " + score;
         document.getElementById("#letters_guessed").innerText = this.guessedLetters;
         document.querySelector("#lives").innerText = "You have " + lives + " remaining";
         document.querySelector("#guesses_left").innerText = "You have " + guessesRemaining + " guesses left";
         // document.querySelector("#guesses").innerText = this.guessedWord;
      },
      //check to see there are guesses left then get a letter from the user
      checkLetter: function(){        
      if(this.guessedLetters.includes(this.letter) === -1) {   
                  if(this.titleString.indexOf(this.letter) === -1){
                             this.guessedLetters.push(this.letter);
                             guessesRemaining --;
                              this.updateStats();
                              getLetter();
                          } else{
                          this.positionLetter(this.letter);}
                        }
            else{
                  getLetter();
               }  
            },
         positionLetter: function(){
            for(i = 0; i < this.titleString.length; i++){
               if(this.letter === this.titleString[i]){
                  this.position.push(i);
                  updateGuess();
            }
         }
      },
      updateguess: function(){
         for(i = 0; i < this.position.length; i++){
         this.guessedWord[position[i]].push(this.letter);
         }
         updateStats();
         wordFinished();
      },
       wordFinished: function(){
         if(this.guessedLetters.indexOf("_") === -1 && guessesRemaining > -1){
            score ++;
            movieIndex ++;
            //play music and change picture here
            movieSelect();
         } else {
            getLetter();
         }
      }
   },
      

     

   {
       title: "Citizen Kane",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc",
       blanks: " _ ",
       guessesRemaining: 0,
       movlength: function() {
       
          return this.title.length
       },
       titleArr: function(){
          
          return this.title.toLowerCase().split("")
       }
   },
   {
       title: "Easy Rider",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc",
       blanks: " _ ",
       guessesRemaining: 0,
       movlength: function() {
       
          return this.title.length
       },
       titleArr: function(){
          
          return this.title.toLowerCase().split("")
       }
   },
   {
       title: "Titanic",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc",
       blanks: " _ ",
       guessesRemaining: 0,
       movlength: function() {
       
          return this.title.length
       },
       titleArr: function(){
          
          return this.title.toLowerCase().split("")
       }
   },
    {
       title: "Goodfellas",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc",
       blanks: " _ ",
       guessesRemaining: 0,
       movlength: function() {
       
          return this.title.length
       },
       titleArr: function(){
          
          return this.title.toLowerCase().split("")
       }
   },
    {
       title: "A Clockwork Orange",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc",
       blanks: " _ ",
       guessesRemaining: 0,
       movlength: function() {
       
          return this.title.length
       },
       titleArr: function(){
          
          return this.title.toLowerCase().split("")
       }
   },
    {
       title: "Shane",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc",
       blanks: " _ ",
       guessesRemaining: 0,
       movlength: function() {
       
          return this.title.length
       },
       titleArr: function(){
          
          return this.title.toLowerCase().split("")
       }
   },
   {
       title: "Chinatown",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc",
       blanks: " _ ",
       guessesRemaining: 0,
       movlength: function() {
       
          return this.title.length
       },
       titleArr: function(){
          
          return this.title.toLowerCase().split("")
       }
   },
    {
       title: "The Graduate",
       pic: "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
       song: "https://www.youtube.com/embed/F9vA7L8H4nc",
       blanks: " _ ",
       guessesRemaining: 0,
       movlength: function() {
       
          return this.title.length
       },
       titleArr: function(){
          
          return this.title.toLowerCase().split("")
       }
   }];

//select the movie
function movieSelect (){ 
   if (movieIndex <= (movies.length - 1) && lives > -1) {
      movies[movieIndex].titleArr();}
   else {
      document.querySelector("#lives").innerHTML = "You're out of lives! Reload the page to try again!";
   }
}
 function getLetter() {
   document.onkeyup = function(event) {
      //checks for "abc" then chekcs if the letter has already been guessed,    
      if (event.keyCode >= 65 && event.keyCode <= 90){
         //input to lower case, catch input as variable    
         movies[movieIndex].letter =  event.key.toLowerCase();
      };  
   }
   movies[movieIndex].checkLetter();
}
//start game
movieSelect();
