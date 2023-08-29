let first = 0;
let selected = 1;
let second = 0;
let numberIsInt = true;
let mode;
let negativity = false;

let header = document.querySelector("#header")
let display = document.querySelector("#display");

function numberInput(number) {
    if (selected === 1) {
        if (first === 0) {
            first = number;
            display.innerHTML = first;
        } else {
            first += number;
            display.innerHTML = first;
        }
    } else {
        if (second === 0) {
            second = number;
            display.innerHTML = second;
        } else {
            second += number;
            display.innerHTML = second;
        }
    }
}

function clearDisplay() {
    console.log("Cleared!");
    header.innerHTML = "";
    selected = 1;
    first = 0;
    second = 0;
    display.innerHTML = first;
}

function negative() {
    header.innerHTML = "Always negative, try being happy for once. Maybe try touching some grass or something."
    negativity = !negativity;
    if (negativity) {
        if (selected === 1) {
            first = "-" + first;
            display.innerHTML = first;
        } else {
            second = "-" + second;
            display.innerHTML = second;
        }

    } else {
        if (selected === 1) {
            first = first.slice(1);
            display.innerHTML = first;
        } else {
            second = second.slice(1);
            display.innerHTML = second;
        }
    }
}

function percent() {
    header.innerHTML = "No.";
}

function divide() {
    if (selected === 1) {
        selected = 2;
        mode = "division";
        display.innerHTML = second;
    } else {
        header.innerHTML = "I can only do so much.";
    }
}

function multiply() {
    if (selected === 1) {
        selected = 2;
        mode = "multiplication";
        display.innerHTML = second;
    } else {
        header.innerHTML = "Too much math. That's boring.";
    }
}

function subtract() {
    if (selected === 1) {
        selected = 2;
        mode = "subtraction";
        display.innerHTML = second;
    } else {
        header.innerHTML = "You're already low enough.";
    }
}

function add() {
    if (selected === 1) {
        selected = 2;
        mode = "addition";
        display.innerHTML = second;
    } else {
        header.innerHTML = "You don't need to add more than that.";
    }
}

function decimal() {
    if (numberIsInt) {
        numberIsInt = !numberIsInt;
        if (selected === 1) {
            first += ".";
            display.innerHTML = first;
        } else {
            second += ".";
            display.innerHTML = second;
        }
    } else {
        numberIsInt = !numberIsInt;
        if (selected === 1) {
            first = first.replace('.', '');
            display.innerHTML = first;
        } else {
            second = second.replace('.', '');
            display.innerHTML = second;
        }
    }
}

function calculate() {
    if (first && second) {
        if (mode === "multiplication") {
            header.innerHTML = "How about you multiply those grades and what do you get? Zero, you get zero because 0 * 0 is 0. Screw you, go do your homework.";
        } else {
            header.innerHTML = "Survey says you should figure this one out on your own.";
        }
    } else {
        header.innerHTML = "YOU NEED TO USE BOTH NUMBERS NUMB NUTS!!!";
    }
}

let choice = Math.floor(Math.random() * (10 - 0));
let allButtons = document.querySelectorAll("button");
if (choice === 0) {
    allButtons.forEach((button) => {
        button.innerHTML = "ඞ";
    });
    display.innerHTML = "ඞ";
    header.innerHTML = "ඞ";
}