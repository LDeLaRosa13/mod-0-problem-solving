// 1. Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.
// begin with words that have both uppercase and lowercase
// all words need printed but changed to all lowercase
// Working with an array that consists of multiple strings
// establish a variable, define elements, write a for statement, add a method
// potentially google syntax help
// refactored from i < 5; --it printed the correct answer with an error message for toLowerCase. Changed
// to i < 4 and good to go!
var names = ["James", "lauren", "Chase", "AlLiSoN"]
for (i = 0; i < 4; i++) {
    console.log(names[i].toLowerCase());
}
