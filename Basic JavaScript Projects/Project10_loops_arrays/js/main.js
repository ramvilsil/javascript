//While loop increments the value assigned to the i variable by 1
//Once i reaches 11, the incrementing will stop and the console will no longer update
function Call_whileLoop() {
  var i = 0;
    while (i < 10) {
    i++;
    console.log(i)
  }
}

//Creates an array of colors
//The for loop goes through the array and displays each item
function Call_forLoop() {
  var colors = ["White", "Black", "Green", "Blue", "Red"]
  , content = "";
  for (i = 0; i < colors.length; i++) {
    content += colors[i] + "<br>";
  }
  document.getElementById("For Loop").innerHTML = content;

}

//Creates a car object with properties and a method
function carInfo(){
  let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    //The method returns a description of the object's properties
    description: function() {
      return "The car is a " + this.year + this.color
       + this.make + this.model;
    }
  };
  //The description is displayed to the user
  document.getElementById("Car_Object").innerHTML = car.description();
}

