var word = "Hello";


//Prints Hello World using 1 local and 1 global variable
function sentence() {
    var name = "World";
    document.write(word + " " + name)
}

//Attempts to print Hello World
function sentence2() {
    //Variable "name" is out of scope and therefore the procedure fails
    document.write(word + " " + name)
    
    //Console log for debugging
    console.log(word + " " + name)
}

//Gets local time and prints output on condition - before 6pm
function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    }


//Calling "Hello World" functions
sentence();
document.write("<br>")
sentence2();
document.write("<br>")

//Prints "True" on the condition that true is true
if (true) {
    document.write("True")
}

//Takes the user input and assembles a string which is then printed as output
function response() {
    response = "Hi " + document.getElementById("input").value  + "!"

    document.getElementById("output").innerHTML = response
}