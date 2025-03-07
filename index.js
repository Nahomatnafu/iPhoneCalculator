const buttonValues = [
    "AC", "+/-", "%", "÷", 
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById("display");

let A = 0;
let operator = null;
let B = 0;

// function to clear the display screen
function clearAll() {
    let A = 0;
    let operator = null;
    let B = 0;
}

for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

    //styling for 0
    if (value == "0") {
        button.style.width = "175px";
        button.style.gridColumn = "span 2";
        button.style.textAlign = "left";
        button.style.paddingLeft = "30px";
    }
    //styling button colors
    if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#FF9500";
    }
    else if (topSymbols.includes(value)) {
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1c1c1c";
    }

    //process button clicks
    button.addEventListener("click", function(){
        if (rightSymbols.includes(value)) {
            if (value == "=") {
                if (A != null) {
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if (operator == "÷") {
                        display.value = numA / numB;
                    }
                    else if (operator == "×") {
                        display.value = numA * numB;
                    }
                    else if (operator == "+") {
                        display.value = numA + numB;
                    }
                    else if (operator == "-") {
                        display.value = numA - numB;
                    }
                    clearAll();
                }
            }
            else {
                operator = value;
                A = display.value;
                display.value = "";
            }
        }
        else if (topSymbols.includes(value)) {
            if (value == "AC") {
                clearAll();
                display.value = "";
            }
            else if (value == "+/-") {
                if (display.value != "" && display.value != "0") {
                    display.value = display.value * -1;
                }
            }
            else if (value == "%") {
                display.value = Number(display.value)/100;
            }
        }
        else { //number or decimal (.)
            if (value == "."){
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value;
                }
            }
            else if (display.value == "0") {
                display.value = value;
            }
            else {
                display.value += value;
            }
        }
    })





    //add buttons to calculator
    document.getElementById("buttons").appendChild(button);
}

