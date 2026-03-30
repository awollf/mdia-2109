let arrayVariable = [37, 50, 75];

// for each goes through each number in array
// console.log's out the number and adds 2
// does this for each number in array

// use arrow => OR function keyword
arrayVariable.forEach(function (number) {
    console.log(number + 2);
});

// OR

arrayVariable.forEach((number) => {
    console.log(number + 2);
});
