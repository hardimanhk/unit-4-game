// crystal game object: add up the proper amount of points to reach the goal sum
// each crystal is a different amount of points
// each crystal's point value changes for each game

// vars
var goalSum = 0;
var gemVals = [];
var wins = 0;
var loses = 0;
var guessTotal = 0;

function setVars() {
    return Math.floor(Math.random() * 12) + 1;
}

for (var i = 0; i < 4; i++) {
    gemVals.push(setVars());
}

function setGoalSum() {
    var rand = Math.floor(Math.random() * 5);
    for (var i = 0; i < gemVals.length; i++) {
        goalSum += gemVals[i] * rand;
    }
}

setGoalSum();


// this should be part of game reset? 
if (goalSum > 120) {
    setGoalSum();
}

console.log(goalSum);