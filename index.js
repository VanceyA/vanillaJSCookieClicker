let first = 0;
let selected = 1;
let second = 0;
let numberIsInt = true;
let mode;
let randomIndex;
let negativity = false;
let partyActivated = false;

let insultOptions = {};

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

function activatePartyMode() {
    if (partyActivated) {
        return;
    }
    partyActivated = true;
    const partyButton = document.createElement("button");
    const text = document.createTextNode("Party Mode");
    partyButton.appendChild(text);

    partyButton.classList.add("party");
    partyButton.addEventListener("click", () => {
        party();
    })

    const body = document.querySelector("body");
    body.appendChild(partyButton);
}

function clearDisplay() {
    console.log("Cleared!");
    header.innerHTML = "";
    selected = 1;
    first = 0;
    second = 0;
    display.innerHTML = first;
    activatePartyMode();
}

function negative() {
    let negativityInsultList = insultOptions.insultsForNegativity;
    randomIndex = Math.floor(Math.random() * negativityInsultList.length);
    header.innerHTML = negativityInsultList[randomIndex];
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
    let operatorsInsultList = insultOptions.insultsForRepeatedOperators;
    randomIndex = Math.floor(Math.random() * operatorsInsultList.length);
    header.innerHTML = operatorsInsultList[randomIndex];
}

function divide() {
    if (selected === 1) {
        selected = 2;
        mode = "division";
        display.innerHTML = second;
    } else {
        let operatorsInsultList = insultOptions.insultsForRepeatedOperators;
        randomIndex = Math.floor(Math.random() * operatorsInsultList.length);
        header.innerHTML = operatorsInsultList[randomIndex];
    }
}

function multiply() {
    if (selected === 1) {
        selected = 2;
        mode = "multiplication";
        display.innerHTML = second;
    } else {
        let operatorsInsultList = insultOptions.insultsForRepeatedOperators;
        randomIndex = Math.floor(Math.random() * operatorsInsultList.length);
        header.innerHTML = operatorsInsultList[randomIndex];
    }
}

function subtract() {
    if (selected === 1) {
        selected = 2;
        mode = "subtraction";
        display.innerHTML = second;
    } else {
        let operatorsInsultList = insultOptions.insultsForRepeatedOperators;
        randomIndex = Math.floor(Math.random() * operatorsInsultList.length);
        header.innerHTML = operatorsInsultList[randomIndex];
    }
}

function add() {
    if (selected === 1) {
        selected = 2;
        mode = "addition";
        display.innerHTML = second;
    } else {
        let operatorsInsultList = insultOptions.insultsForRepeatedOperators;
        randomIndex = Math.floor(Math.random() * operatorsInsultList.length);
        header.innerHTML = operatorsInsultList[randomIndex];
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
        let calculateInsultList = insultOptions.insultsForCalculation;
        randomIndex = Math.floor(Math.random() * calculateInsultList.length);
        header.innerHTML = calculateInsultList[randomIndex];
    } else {
        let singleInsultList = insultOptions.insultsForSingleInput;
        randomIndex = Math.floor(Math.random() * singleInsultList.length);
        header.innerHTML = singleInsultList[randomIndex];
    }
}

function party() {
    let partyInsultList = insultOptions.insultsForPartyMode;
    randomIndex = Math.floor(Math.random() * partyInsultList.length);
    header.innerHTML = partyInsultList[randomIndex];
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

fetch("https://api.jsonbin.io/v3/b/64efb54d8e4aa6225ed776b8")
    .then((response) => {
        response.json()
            .then((data) => {
                insultOptions = data.record;
                console.log(insultOptions);
        });
    });
