//Creates object to store values
const Calculator = {
    //Displays value 0
    Display_Value: "0",
    //Stores the first operand 
    First_Operand: null,
    //Checks if the user has entered the second operand
    Wait_Second_Operand: false,
    //Stores the operator
    operator: null,
};

//Updates the values when a button is clicked by the user
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //Checks if "Wait_Second_Operand" returns a true value and if so 
    //The calculator object's display value is updated to the 
    //User's input
    if (Wait_Second_Operand == true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //Overrides the "Display_Value" property if the 
        //current value is 0, otherwise it adds to it
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

//Handles decimal points
function Input_Decimal(dot) {
    //Ensures acciental clicking of the decimal point 
    //doesn't cause bugs in operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //If the "Display_Value" property doesn't contain a decimal
        //point then add one
        Calculator.Display_Value += dot;
    }
}

//Handles operators
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //When an operator key is clicked the current number
    //displayed on the screen is converted and the result is stored
    //in "Calculator.First_Operand" if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an operator already exists and if "Wait_Second_Operand"
    //returns true, then updates the operator and exits the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
        //Checks if an operator already exists
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        //If operator exists, the operator property is looked up
        //in the Perform_Calculation object and the function 
        //which corresponds to the operator is executed
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Add a fixed amount of digits after the decimal
        result = Number(result).toFixed (9);
        //Removes any trailing 0s
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand

};
function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//Updates the calculator output with the contents
//of the "Display_Value" property
function Update_Display() {
    //Targets the input tag in the HTML document
    //through the HTML "calculator-screen" class
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display();

//Monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    //"target" variable is an object which represents
    //the element clicked on by the user
    const { target } = event;
    //If the element clicked on by the user isn't a button
    //the function is exited
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    //Ensures that the "AC" element clears all inputs
    //from the calculator screen
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();

})