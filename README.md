# _{Pig Latin}_

#### _{Translates words into Pig Latin}, {5.3.17}_

#### By _**{Karina Roush and Joe Werderber}**_

## Description

_{Input words into form, program translates input into Pig Latin and displays the results below the form for the user.}_

## Setup/Installation Requirements

* _Clone the repository from https://github.com/KarinaRoush/pig-latin and open index.html_

## Specifications

* _The program will identify the following letters as vowels: "a", "e", "i", "o", "u"_
* _The program will identify any letter that is not a vowel as a consonant_
* _The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3_
* _The program does nothing to words starting or containing a non-alphabetical character
Example Input: ?blah, 9blah, bl9ah
Example Output: N/A_
* _The program adds "way" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iWay_
* _The program adds "way" to the end of words more than one letter, beginning with a vowel.
Example Input: Are
Example Output: areWay_
* _The program moves all of the first consecutive consonants to the end of words beginning with one or more consonants, then adds "ay"
Example Input: Break
Example Output: eakBray_
* _The program moves "qu" to the end of words that BEGIN with "qu", then adds "ay" to the "qu"
Example Input: Queen
Example Output: een-quay_
* _The program moves the first consonant(s) + "qu" to the end of words that CONTAIN "qu" in the middle, then adds "ay" to the consonant(s) + "qu"
Example Input: Square
Example Output: areSquay_
* _The program moves the first consonant(s) to the end of words that have "y" right after these consonants, then adds "ay"
Example Input: Hydrogen, Psycho
Example Output: ydrogen-Hay, ychoPsay_
* _The program will use the above rules on each individual word if the user inputs more than one word
Example Input: Hello pig latin
Example Output: elloHay igPay atinLay_

## Known Bugs

_{No known bugs at this time}_

## Support and contact details

_{If you have any questions, please email Karina or Joe. karina.roush@gmail.com, greendog22@gmail.com}_

## Technologies Used

_{Used HTML, CSS, jQuery, JavaScript, Bootstrap}_

### License

*{MIT license}*

Copyright (c) 2017 **_{Karina Roush and Joe Werderber}_**
