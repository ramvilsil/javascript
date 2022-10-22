function myDictionary () {
    //Creates dictionary
    var animals = {
        species : "Dog"
        , color : "Brown"
        , height : "2 ft."
        , age : 4
        , sound : "Woof!"
        , color : "White"
    };
    //delete  the sound key in the animals dictionary
    delete animals.sound;

    //return the dictionary values to html
    document.getElementById("Dictionary").innerHTML = animals.color;
    document.getElementById("Dictionary 2").innerHTML = animals.sound;
}