// variables
let allButtons = document.querySelectorAll(".cell");
var equation = "";
var resultsBox = document.getElementById("results");

// calculator
const calculate = () => {
    try {
        eval(equation)
    } catch (err) {
        resultsBox.innerHTML = "syntax error";
    }
    if (typeof eval(equation) == "number" && eval(equation) != undefined) {
        resultsBox.innerHTML = eval(equation);
        typeOnScreen(equation);
    } else {
        resultsBox.innerHTML = "00";
    }
}

// check for intered data
const dataIntered = (data) => {
    equation = equation + data.target.textContent;
    typeOnScreen(equation);
}

// show clicked button value on screen
const typeOnScreen = (eq) => {
    document.getElementById("type").innerHTML = eq;
}

// delete data
const deleteData = () => {
    equation = equation.slice(0, -1);
    typeOnScreen(equation);
}

// clear data
const clearData = () => {
    equation = "";
    resultsBox.innerHTML = "00";
    typeOnScreen(equation);
}

// handle events when click buttons
const turnOn = () => {
    for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i].id == "equals") {
            allButtons[i].addEventListener('click', calculate, false);
        } else if (allButtons[i].id == "del") {
            allButtons[i].addEventListener('click', deleteData, false);
        } else if (allButtons[i].id == "ac") {
            allButtons[i].addEventListener('click', clearData, false);
        } else {
            allButtons[i].addEventListener('click', dataIntered, false);
        }
    }
}

turnOn();