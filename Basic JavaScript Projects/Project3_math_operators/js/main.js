//Runs math operations on numbers and returns
function mathFunction() {
    var add = 1 + 1
    , sub = 5 - 2
    , mul = 6 * 8
    , div = 10 / 2
    , remainder = 43 % 25
    , total = add + sub + mul + div
    , negation = -total;
    total++
    remainder--

    document.getElementById("Math").innerHTML = 
    "The total is: " + total + " the remainder is: "
     + remainder + " the negation operator: " + negation;
}

//Displays alert window with a random rounded number 
window.alert(Math.round(Math.random() * 100));


//Returns the value of pi
function piFunction() {
    document.getElementById("Pi").innerHTML = Math.PI;
}
