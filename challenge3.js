// 1. Given an array of strings, return only the words that begin with the letter "t".
// figure out how to only print words that start with "t"
// we know we have an array + strings
// will this need a .method? if so, which one?
// establish a variable, come up with the strings, potential for and if statements, console.log
// look up .method options

var twords = ["touch", "talking", "laugh", "cry"]
for (var i = 0; i < twords.length; i++) {
    if (twords[i].startsWith("t")){
        console.log(twords[i])
    }

    
}
