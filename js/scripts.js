    //front end logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

    //make an alert when user enters something other than a letter
    var dontKnow = $("input#translate").val().split("");
    // var result = userInput(input);
    // debugger;
    for(var i = 0; i < dontKnow.length; i++){
      console.log("looped");

      if ((vowels.includes(dontKnow[i]) === true) || (consonants.includes(dontKnow[i]) === true)) {

        console.log("we can work with this");


      } else {
        $("#alert").text("Please enter a letter");
        console.log("nope");
      }
    }

    console.log("submitted");
  });
});

    //business logic
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
