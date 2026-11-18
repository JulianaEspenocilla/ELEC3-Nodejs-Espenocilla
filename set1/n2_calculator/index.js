// index.js

const operations = require("./operations");
const formatResult = require("./formatter");
const os = require("os");

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

let result;

switch (operation) {
    case "add":
        result = operations.add(num1, num2);
        break;

    case "subtract":
        result = operations.subtract(num1, num2);
        break;

    case "multiply":
        result = operations.multiply(num1, num2);
        break;

    case "divide":
        result = operations.divide(num1, num2);
        break;

    case "average":
        result = operations.average(num1, num2);
        break;

    default:
        console.log("Error: Unknown operation");
        process.exit();
}

console.log(formatResult(operation, num1, num2, result));
console.log("Computer:", os.hostname());