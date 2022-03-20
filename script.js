// Objective
// At this checkpoint, you are asked to write an algorithm that read a sentence, 
// which ends with a point, character by character, and to determine:

 

// Instructions
// The length of the sentence (the number of characters).
// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that: 

// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters.


function stringMonitor(str){

  //Length of String
  console.log(`Your sentence contains ${str.length} characters in total length`)

  //Number of words in string
  console.log(`Your sentence contains ${str.split(' ').length} words in total`)

  const vowelCheck = ()=>{
    let pattern = /[aeiou]/gi;
    let result = str.match(pattern);              //new RegExp() OR (pattern,attributes) OR /pattern/attribute
    if(!result){
        console.log('Your sentence contains 0 vowels')
      }
    else
    console.log(`Your sentence contains ${result.length} vowels in total`)
  }

    vowelCheck();

 }


stringMonitor("My name is Samuel and i learn at GomycodE.")


