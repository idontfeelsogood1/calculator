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
    return num1 / num2;
        
}

// operation function
function operate(operator, num1, num2) {
    if (operator === '+') return add(num1, num2);
    else if (operator === '-') return subtract(num1, num2);
    else if (operator === '*') return multiply(num1, num2);
    if (num2 === 0 && operator === '/') {
        return 'infinity';
    } else if (operator === '/') return Math.round(divide(num1, num2) * 10) / 10;    
}

// populate display function
let number1 = null;
let number2 = null;
let currentNum = '';
let clearText = true;
let operandList = document.querySelectorAll('.operand');
let display = document.querySelector('.display div');
let operatorList = document.querySelectorAll('.operator');
let currentOperator = '';

function populateDisplay() {
    for (let operand of operandList) {
        operand.addEventListener('click', () => {
            if (clearText) {
                currentNum = '';
                clearText = false;
                display.innerText = '';
            } 
            if (display.innerText === 'infinity') {
                clearInf();
                return;
            }
            if (number1 != null) {
                display.innerText += operand.innerText;
                currentNum += operand.innerText
                number2 = currentNum;
            } else {
                display.innerText += operand.innerText;
                currentNum += operand.innerText
            }
        })
    }
}

populateDisplay();

// store currentNum in number1 and set clearText to true for the next number
function operator() {
    for (let operator of operatorList) {
        operator.addEventListener('click', () => {
            if (display.innerText === 'infinity') {
                clearInf();
                return;
            }
            if (number1 && number2) {
                display.innerText = operate(currentOperator, Number(number1), Number(number2));
                number1 = display.innerText;
                currentNum = display.innerText;
                clearText = true;
                number2 = null;
                currentOperator = operator.innerText;
            } else {
                currentOperator = operator.innerText;
                number1 = currentNum;
                clearText = true;
            }
        })
    }
}

operator();

// calculate when equal is pressed 
function equal() {
    let equal = document.querySelector('.equal');
    equal.addEventListener('click', () => {
        if (display.innerText === 'infinity') {
            clearInf();
            return;
        }
        if (number1 != null && number2 != null) {
            display.innerText = operate(currentOperator, Number(number1), Number(number2));
            currentOperator = null;
            currentNum = display.innerText;
            number1 = null;
            number2 = null;
            clearText = true;
        }
    })
}

equal();

// clear everything when clear is pressed 
function clear() {
    let clearBtn = document.querySelector('.clear');
    clearBtn.addEventListener('click', () => {
        currentNum = '';
        clearText = true;
        currentOperator = '';
        number1 = null;
        number2 = null;
        currentOperator = null; 
        display.innerText = 0;
    })
}

// clear everything when display is infinity when user press a button
function clearInf() {
    currentNum = '';
    clearText = true;
    currentOperator = '';
    number1 = null;
    number2 = null;
    currentOperator = null; 
    display.innerText = 0;
}

clear();