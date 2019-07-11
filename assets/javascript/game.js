

            var options = ["r", "p", "s",];
            var words = ["constellation", "asteroid", "comet", "astronaut"]
            var wrongLetters =[]
            var correctLetter =[]
            var underScore =[]
            var wins = 0;
            var losses = 0;
            var ties = 0;
            var userGuess = 13;
            $("#guessLeft").text(userGuess)
            
            var computerGuess = words[Math.floor(Math.random()*words.length)];
            for (var i=0; i<computerGuess.length; i++){
              underScore.push("__")
            }

            /* join gives me a string with the items that the array has */
            $("#sumWords").text(underScore.join(" "))

            document.onkeyup = function() {
              var userguess = String.fromCharCode(event.keyCode).
              toLowerCase();
      
              console.log(userguess);
      
      
              console.log(computerGuess);
            
              var index = computerGuess.indexOf(userguess);
              if (index!=-1) {
                correctLetter.push(userguess)
                for (var i=0; i<computerGuess.length; i++)
                  {
                    if (computerGuess[i]===userguess){
                      underScore[i]=userguess;
                    }
                  }

                
              }
              else {
                wrongLetters.push(userguess);
                userGuess = userGuess - 1;
              }
              
              $("#guessLeft").text(userGuess)
              $("#sumWords").text(underScore.join(" "))
              
            
              if (userGuess==0) {
                alert("LOSER");
                document.location.reload()
              }
              else {
                for (var i=0; i<computerGuess.length; i++){
                    if (correctLetter.indexOf(computerGuess[i])===-1){
                      return 
                    }
                  }
                  alert("YOU WON!");
                  document.location.reload()
              }
          
            }
           