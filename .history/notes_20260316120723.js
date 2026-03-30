let arrayVariable = [37, 50, 75];
arrayVariable[0];

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

// arrays are always [] separated by comma
// objects are always {} separated by comma
// only use semi colons when separating perimitives (objects, arrays, functions, etc.)
// functions and conditionals area always () and then {}

let objectVariable = {
    shanahanGoals: 37,
    lidsstromAssists: 50,
    shanahanPoints: 75,
    record: "51, 17, 10, 4",
    captain: "Steve Yzerman",
    coach: "Scottie Bowman",
    wonConference: true, 

    shanahanAssists: function() {
        console.log((shanahanPoints - shanahanGoals) + "A")
    }
};


