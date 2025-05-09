// basic math functions
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2
}

console.log(add(10, 2))
console.log(subtract(10, 2))
console.log(multiply(10, 2))
console.log(divide(10, 2))

// operation function
const number1 = null;
const number2 = null;
const operator = null; 

function operate(operator, num1, num2) {
    if (operator === '+') return add(num1, num2);
    else if (operator === '-') return subtract(num1, num2);
    else if (operator === '*') return multiply(num1, num2);
    else if (operator === '/') return divide(num1, num2);    
}

// populate display function
let displayContent = '';
let clearText = true;
let operandList = document.querySelectorAll('.operand');
let display = document.querySelector('.display div');
let operatorList = document.querySelectorAll('.operator');

let operationTracker = '';

function populateDisplay() {
    for (let operand of operandList) {
        operand.addEventListener('click', () => {
            if (clearText) {
                clearText = false;
                display.innerText = '';
            }        
            display.innerText += operand.innerText;
            displayContent += operand.innerText
        })
    }
}
populateDisplay();

// clear display when operator is pressed
function whenOperatorIsPressed() {
    for (let operator of operatorList) {
        operator.addEventListener('click', () => {
            if (!clearText) {
                display.innerText = '';
                clearText = true;
                operationTracker = operator.innerText;
            }
        })
    }
}

// call operate() when operationTracker is not empty

