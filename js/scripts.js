    //front end logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

    //gathering input from user and splitting each letter as individual strings inside an array
    var dontKnow = $("input#translate").val().split("");

    //for loop that runs through input from user and checks if it is a vowel or consonant
    for(var i = 0; i < dontKnow.length; i++){
      if ((vowels.includes(dontKnow[i]) === true) || (consonants.includes(dontKnow[i]) === true)) {
      } else {
        $("#alert").text("Please enter a letter");
      }
    }

    //The program adds "way" to single-letter words beginning with a vowel.
    if (vowels.includes(dontKnow[0]) === true) {
      $("#result").text(dontKnow[0] + "way")
    };

    //The program adds "way" to the end of words more than one letter, beginning with a vowel.
    if ((dontKnow.length > 1) && (vowels.includes(dontKnow[0]) === true)) {
      $("#result").text(dontKnow + "way")
    }

  });
});

    //business logic
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
