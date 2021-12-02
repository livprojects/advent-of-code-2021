// INPUT IMPORT

const fs = require('fs');
const inputs = fs.readFileSync('inputdaytwo.txt').toString().split("\r\n");

console.log(inputs);

let depth = 0;
let horizontalPosition = 0;
let aim = 0;
// On a un tableau de chaînes de caractères
inputs.forEach((input) => {
    const splittedStringsArray = input.split(" ");
  
    switch(splittedStringsArray[0]) {
        case 'down':
            aim += parseInt(splittedStringsArray[1], 10);
            break;
        case 'up':
            aim -= parseInt(splittedStringsArray[1], 10);
            break;
        case 'forward':
            horizontalPosition += parseInt(splittedStringsArray[1], 10);

            depth += (aim*parseInt(splittedStringsArray[1], 10));
            break;
        default: 
        console.log("Unknown command, Titanic mode");
    }

})
console.log(depth);
console.log(horizontalPosition);
const coordinates = depth * horizontalPosition;

console.log("Depth x horizontal position = "+ coordinates);
