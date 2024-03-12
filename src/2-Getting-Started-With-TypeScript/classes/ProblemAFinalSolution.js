// Importing the readline module for handling stdin/stdout from the console
const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check invalid inputs.
function isValidNumber(num) {
    return !isNaN(num) && num >= 1 && num <= 10000;
}

function checkNumbers(a, b, c) {
    if (!isValidNumber(a) || !isValidNumber(b) || !isValidNumber(c)) {
        return ;
    }

    const mathOperations = [
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => b - a,
        (a, b) => a * b,
        (a, b) => a !== 0 ? b / a : null,
        (a, b) => b !== 0 ? a / b : null
    ];

    // Iterate through arithmetic operations and check if it results into the third number
    for (let mathOperation of mathOperations) {
        const result = mathOperation(a, b);
        if (result !== null && result === c) {
            return "Possible";
        }
    }

    return "Impossible";
}

// Callback function to handle input for the number of test cases and initiate recursive input reading
rl.question('', (numTests) => {
    const testCases = parseInt(numTests);
    recursiveReadLines(rl, testCases);
});

// Recursively read input for each test case and output the result
function recursiveReadLines(rl, remaining) {
    // Base case: stop recursive reading when all test cases are processed
    if (remaining === 0) {
        rl.close();
        return;
    }
    // Read input for the current test case and process it
    rl.question('', (line) => {
        const [a, b, c] = line.split(' ').map(Number);
        console.log(checkNumbers(a, b, c));
        // Recursively read input for the remaining test cases
        recursiveReadLines(rl, remaining - 1);
    });
}
    