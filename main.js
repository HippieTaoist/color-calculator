// # Color Calculator

// In this project we'll create a program that can combine and deconstruct colors according to the following tables

// We won't worry about any colors that are neither primary nor secondary colors.

// ## Your program

// Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly).
const prompt = require('prompt-sync')();

console.log('What would you like do today?');
console.log('(1) - Combine Colors')
console.log('(2) - Deconstruct Colors')
let desCon = prompt('Please Enter your choice now.');
let desConNum = Number(desCon);
// If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.
if (desConNum === 1) {
    console.log('Your color choices are:')
    console.log('(1) - Red');
    console.log('(2) - Blue')
    console.log('(3) - Yellow')
    let colorChoice1 = prompt('Enter the number of your first choice?   ');
    let numColorChoice1 = Number(colorChoice1);
    let colorChoice2 = prompt('Enter the number your second color choice?   ');
    let numColorChoice2 = Number(colorChoice2);
    if (numColorChoice1 === 1) {
        if (numColorChoice2 === 2) {
            console.log('Purple');
        }
        if (numColorChoice2 === 3) {
            console.log('Orange');
        }

    }
    if (numColorChoice1 === 2) {
        if (numColorChoice2 === 1) {
            console.log('Purple');
        }
        if (numColorChoice2 === 3) {
            console.log('Green');
        }

    }
    if (numColorChoice1 === 3) {
        if (numColorChoice2 === 2) {
            console.log('Green');
        }
        if (numColorChoice2 === 1) {
            console.log('Orange');
        }

    } else {
        console.log('error');
    }
}

if (desConNum === 2) {
    console.log('Your color choices are:')
    console.log('(1) - Purple');
    console.log('(2) - Orange')
    console.log('(3) - Green')
    let colorChoice1 = prompt('Enter the number of your first choice?   ');
    let numColorChoice1 = Number(colorChoice1);
    if (numColorChoice1 === 1) {
        console.log('Deconstructs to: Red and Blue');
    }
    if (numColorChoice1 === 2) {
        console.log('Orange desconstructs to: Red and Yellow')
    }
    if (numColorChoice1 === 3) {
        console.log('Green deconstructs to Blue and Yellow')

    } else {
        console.log('error');
    }
}


// If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.

// #### Color combining

// | inputs | output |
// | --- | --- |
// | red + blue | purple |
// | red + yellow | orange |
// | blue + yellow | green |
// | anything else | "error" |

// #### Color deconstructing

// | input | outputs |
// | --- | --- |
// | purple | red + blue |
// | orange | red + yellow |
// | green | blue + yellow |
// | anything else | error |