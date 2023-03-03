// 1. Given an array of strings, return only the strings that have exactly 4 characters.
// names that are 4 letters long is all we want to print in the terminal
// will use a for statement to define the loop and an if statement to input the method
// googled the placement of .length to clarify
// the variables are daniel, mike, polly, and alex. I want the for statement to cycle through the variable names until it only produces the four letter names to the terminal. I want the if statement to confirm that if the name is strictly equal to 4 characters that it will return the value.

var names = ["daniel", "mike", "polly", "alex"] 
for(var i = 0; i < names.length; i++) {
    if(names[i].length === 4)
    console.log(names[i])
}

    
    

