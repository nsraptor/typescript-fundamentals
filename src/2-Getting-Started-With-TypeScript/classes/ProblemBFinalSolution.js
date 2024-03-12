const readline = require('readline');

// Dictionary to map full unit names to their equivalent value in thous
const unitToThouFull = {
  'thou': 1,
  'inch': 1000,
  'foot': 12000,
  'yard': 36000,
  'chain': 792000,
  'furlong': 7920000,
  'mile': 63360000,
  'league': 190080000
};

// Oject to map unit acronyms to their full names
const acronymToFull = {
  'th': 'thou',
  'in': 'inch',
  'ft': 'foot',
  'yd': 'yard',
  'ch': 'chain',
  'fur': 'furlong',
  'mi': 'mile',
  'lea': 'league'
};

// Function to convert distance
function convertDistance(inputStr) {
  try {
    // Split the input string to extract required values
    const [valueStr, fromUnit, inStringPart, toUnit] = inputStr.split(' ');

    // Get the full unit names from acronyms, if provided otherwise.
    const fromUnitFull = acronymToFull[fromUnit] || fromUnit;
    const toUnitFull = acronymToFull[toUnit] || toUnit;

    // Check if the input units are valid
    if (!(fromUnitFull in unitToThouFull) || !(toUnitFull in unitToThouFull)) {
      throw new Error('Invalid unit specified');
    }

    // Parse the value and check if it is an integer between 1 and 100 (inclusive)
    const value = parseInt(valueStr, 10);
    if (isNaN(value) || value < 1 || value > 100) {
      throw new Error('Input value must be an integer between 1 and 100 (inclusive)');
    }

    // Convert the input value to thous
    const valueInThous = value * unitToThouFull[fromUnitFull];

    // Convert the value in thous to the desired output unit
    const convertedValue = valueInThous / unitToThouFull[toUnitFull];
    return convertedValue;

  } catch (err) {
    console.error(err.message);
    return null; // Return null in case of an error
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.on('line', (line) => {
  const result = convertDistance(line);
  if (result !== null) {
    console.log(result);
  }
});