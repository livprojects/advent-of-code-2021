// FIND HOW MANY MEASUREMENTS ARE GREATER THAN THE ONE BEFORE
const fs = require('fs');
const inputs = fs.readFileSync('inputdayone.txt').toString().split("\r\n");

console.log(inputs);

let biggerCounter = 0;

inputs.forEach((element, index, array) => {

    if (parseInt(element, 10) > array[index -1]) {
        biggerCounter++;
    }

});
console.log("TOTAL " + biggerCounter);
