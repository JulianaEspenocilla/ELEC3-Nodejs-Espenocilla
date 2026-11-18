// operations.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function average(a, b) {
    return (a + b) / 2;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};