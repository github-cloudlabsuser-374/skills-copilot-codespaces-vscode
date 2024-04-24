// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const assert = require('assert');

function calculate(number1, operator, number2) {
    let result;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 != 0) {
                result = number1 / number2;
            } else {
                throw new Error("Error! Division by zero is not allowed.");
            }
            break;
        default:
            throw new Error("Invalid operator! Please enter either +, -, * or /.");
    }

    return result;
}

describe('Calculator', function() {
    it('should add two numbers correctly', function() {
        assert.equal(calculate(1, '+', 2), 3);
    });

    it('should subtract two numbers correctly', function() {
        assert.equal(calculate(5, '-', 3), 2);
    });

    it('should multiply two numbers correctly', function() {
        assert.equal(calculate(2, '*', 3), 6);
    });

    it('should divide two numbers correctly', function() {
        assert.equal(calculate(6, '/', 3), 2);
    });

    it('should throw an error when dividing by zero', function() {
        assert.throws(() => calculate(6, '/', 0), Error, "Error! Division by zero is not allowed.");
    });

    it('should throw an error when an invalid operator is used', function() {
        assert.throws(() => calculate(6, 'x', 3), Error, "Invalid operator! Please enter either +, -, * or /.");
    });
});