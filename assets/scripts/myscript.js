const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const result = document.getElementById('result');
const input = document.getElementById('input-number');

let currentResult = 0;
let logEntries = [];

function outputResult(description) {
  return result.textContent = description;
}

function getInput() {
    return parseInt(input.value);
}

function getDescription(firstVal, secondVal, operator, currentResult) {
    const description = `${firstVal} ${operator} ${secondVal} = ${currentResult}`;
    logEntry = {description, currentResult};
    logEntries.push(logEntry);
    console.log(logEntries);
    return description;
}


function add() {
    const secondVal = getInput();
    const firstVal = currentResult;
    currentResult += secondVal;
   
    const description = getDescription(firstVal, secondVal, "+", currentResult);
    outputResult(description);
}

function subtract() {
    const secondVal = getInput();
    const firstVal = currentResult;
    currentResult -= secondVal;
    const description = getDescription(firstVal, secondVal, "-", currentResult);
    outputResult(description);
}

function multiply() {
    const secondVal = getInput();
    const firstVal = currentResult;
    currentResult *= secondVal;
    const description = getDescription(firstVal, secondVal, "*", currentResult);
    outputResult(description);
}

function divide() {
    const secondVal = getInput();
    const firstVal = currentResult;
    currentResult /= secondVal;
    const description = getDescription(firstVal, secondVal, "/", currentResult);
    outputResult(description);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
