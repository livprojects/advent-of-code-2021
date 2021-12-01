const rawInputs = "";
const inputs = ["1", "2", "3"];

let biggerCounter = 0;

inputs.forEach((element, index, array) => {

    if (element > array[index -1]) {
        biggerCounter++;
    }

    console.log("INCREMENT " + biggerCounter);
});

console.log("TOTAL " + biggerCounter);
