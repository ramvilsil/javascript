function full_Sentence() {
    //Variables form sentence broken into parts
    var part_1 = "This is "
    , part_2 = "a sentence "
    , part_3 = "for my "
    , part_4 = "document."
    //sentence is concatenated and printed
    , whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Hello World!"
    //Phrase is cut and assigned to variable "Section"
    , Section = Sentence.slice(0, 5);
    document.getElementById("Slice").innerHTML = Section;
}


function upperCase_Method() {
    var Sentence = "i am on the way"
    //Sentence is adjusted to upper case
    , Section = Sentence.toUpperCase();
    document.getElementById("Upper Case").innerHTML = Section;
}


function search_Method() {
    var Sentence = "i am on the way"
    //Returns the index position of the string "way" on first match
    , Section = Sentence.search("way");
    document.getElementById("Search").innerHTML = Section;
}

function string_Method() {
    var number = 10;
    //Number variable is returned as a string
    document.getElementById("Number").innerHTML = number.toString();
}

function precision_Method() {
    var number = 37131.35439052;
    //Formats "number" variable to 10 digits
    document.getElementById("Precision").innerHTML = number.toPrecision(10);
}

function fixed_Method() {
    var number = 37131.35439052;
    //Rounds "number" variable to the nearest 100th
    document.getElementById("Fixed").innerHTML = number.toFixed(2);
}

function valueOf_Method() {
    var text = "Hello World!"
    , result = text.valueOf();
    //Variable "result" is assigned the primitve value of text
    document.getElementById("Value Of").innerHTML = result;
}


