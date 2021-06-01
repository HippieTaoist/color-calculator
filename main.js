// # Color Calculator

// In this project we'll create a program that can combine and deconstruct colors according to the following tables

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

// We won't worry about any colors that are neither primary nor secondary colors.

// ## Your program

// Fork and clone. Write your code in a file named `main.js`.

// Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly).

// If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.

// If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.

// ## Stretch goals

// Remove the intial question about whether the user wants to combine or deconstruct. Instead, prompt the user a single time for colors. If the user inputs a single color (i.e.: "purple"), deconstruct it. If the user inputs two colors separated by a space, (i.e.: "red blue"), combine them.

// To do this, check out the string method, `.includes()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes



// Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly).
const prompt = require('prompt-sync')();

const condes = prompt('Press 1 to Combine Colors ||||| Press 2 to Deconstruct Colors');

const numCondes = Number(condes);


// If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.
if (numCondes === 1) {
    console.log('Awesome, you Artist! I know you had it in you.');
    console.log(' Your options are');
    console.log('   Red   |||   Blue   |||   Yellow   ')
    const color1 = prompt(' What is your first color choice?  ');
    const color2 = prompt(' What about your second color choice?  ');


    if (color1 === 'red' && color2 === 'blue') {
        console.log('The Color Purple');
        console.log('Did you know that this book, by Alice Walker, was the first Pulitzer Prize to be awarded to a black woman.');
    } else
    if (color1 === 'red' && color2 === 'yellow') {
        console.log = ('Knock, Knock');
        console.log = ("Whose there?");
        console.log = ('Bannana');
        console.log = ('Knock, Knock');
        console.log = ("Who's there");
        console.log = ('Bannana');
        console.log = ('Knock, Knock');
        console.log = ('Whop is there');
        console.log = ("ORANGE!  - Orange you glad I didn't say Bannana");
    } else if (color1 === 'blue' && color2 === 'yellow') {
        console.log = ("It's not that easy bein' green")
        console.log = ("Having to spend each day")
        console.log = ("The color of the leaves")
        console.log = ("When I think it could be nicer")
        console.log = ("Bein' red or yellow or gold")
        console.log = ("Or something much more colorful like that")
        console.log = ("It's not easy bein' green")
        console.log = ("It seems you blend in")
        console.log = ("With so many other ordinary things")
        console.log = ("And people tend to pass you over")
        console.log = ("'Cause you're not standing out")
        console.log = ("Like flashy sparkles in the water")
        console.log = ("Or stars in the sky")
        console.log = ("But green's the color of spring")
        console.log = ("And green can be cool and friendly like")
        console.log = ("And green can be big like a mountain")
        console.log = ("Or important like a river or tall like a tree")
        console.log = ("When green is all there is to be")
        console.log = ("It could make you wonder why")
        console.log = ("But, why wonder, why wonder?")
        console.log = ("I'm green and it'll do fine")
        console.log = ("It's beautiful. And I think it's what I want to be!")
    } else {
        console.log = ('error')
    };


} else if (numCondes === 2) {
    console.log('Look at you!  You Color Destryer!');
    console.log(' Color Options Include:');
    console.log('  1- Purple   |||   2- Orange   ||| 3- Green ')
    const color3 = prompt('Type the color number would you like to rip apart today?  ')
    const numColor3 = Number(numCondes);
    if (numColor3 === 1) {
        console.log('PURPLE ------>>>>>> BLUE <<<<>>>>> RED')
    } else if (numColor3 === 2) {
        console.log('ORANGE ------>>>>>> RED <<<<>>>>> YELLOW')
    } else if (numColor3 === 3) {
        console.log('Purple ------>>>>>> BLUE <<<<>>>>> RED');
    } else {
        console.log('error')
    }
}
// If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.