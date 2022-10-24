//Creates function which takes the user's input and 
// checks whether it meets the criteria using a ternary operator
function Voting_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote." : "You are eligible to vote.";
    document.getElementById("Vote").innerHTML = Can_vote;
}

//Vehicle Object constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//Creating objects using the Vehicle model
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//Function prints output
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = Output();
    //Nested function Output() assembles output  
    function Output() {
        var output = "Erik drives a " + Erik.Vehicle_Color +
         "-colored " + Erik.Vehicle_Model + " manufactured in "
          + Erik.Vehicle_Year;
          return output
    }
}