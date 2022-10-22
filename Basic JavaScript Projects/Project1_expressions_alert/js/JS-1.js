//Javascript basics

//Assigning variables
var quote1 = "Then the cat said, \"Meow meow.\""
, quote2 = " And the dog said, \"Woof!\""
, fullQuote = quote1 + quote2
, myExpression = 10 + 2
, Sent1 = 'This is the beginning of the string'
, Sent2 = ' and this is the end of the string'

//Print the variables & expressions
document.write(myExpression)

document.write(Sent1 + Sent2) //Concadenation of variables

//Window alert
window.alert(fullQuote)


function displayDate() {
    document.getElementById("time").innerHTML = Date();
  }