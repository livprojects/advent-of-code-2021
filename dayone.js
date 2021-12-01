// PART ONE - FIND HOW MANY MEASUREMENTS ARE GREATER THAN THE ONE BEFORE

const fs = require('fs');
const inputs = fs.readFileSync('inputdayone.txt').toString().split("\r\n").map(Number);

console.log(inputs);

let biggerCounter = 0;
inputs.forEach((element, index, array) => {

    if (parseInt(element, 10) > array[index -1]) {
        biggerCounter++;
    }

});

//PART 2 - SAME BUT WITH SUMS OF THREE VALUES 

const sumCounter = inputs.reduce((increment, curr, index, source) => {
    const previousSum = source[index - 1] + source[index] + source[index + 1];
    const currentSum = source[index] + source[index + 1] + source[index + 2];
  
    if (index === 0) {
        return 0;
    }
    if (currentSum > previousSum) {
        return increment + 1;
    }
    
    return increment;
  }, 0);

  

console.log("TOTAL INCREMENTS: " + biggerCounter);
console.log("TOTAL SUM INCREMENTS: " + sumCounter);
