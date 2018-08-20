// crystal game object: add up the proper amount of points to reach the goal sum
// each crystal is a different amount of points
// each crystal's point value changes for each game

// vars
var goalSum = 0;
var gemVals = [];
var wins = 0;
var loses = 0;
var guessTotal = 0;

$(document).ready(function () {

    function setGemValsArray() {
        for (var i = 0; i < 4; i++) {
            gemVals.push(Math.floor(Math.random() * 12) + 1);
            //valueGem = gemVals;
            //$(".photo").attr("value", valueGem);
        }
    }

    function setGoalSum() {
        for (var i = 0; i < gemVals.length; i++) {
            var rand = Math.floor(Math.random() * 5);
            goalSum += gemVals[i] * rand;
        }
    }

    function setGemVals() {
        $("#blue").attr("value", gemVals[0]);
        $("#diamond").attr("value", gemVals[1]);
        $("#emrald").attr("value", gemVals[2]);
        $("#sapphire").attr("value", gemVals[3]);
    }

    function reset() {
        gemVals = [];
        guessTotal = 0;
        goalSum = 0;
        setGemValsArray();
        setGemVals();
        setGoalSum();
        if (goalSum > 120 || goalSum < 19) {
            setGoalSum();
        }
    }

    reset();

    console.log(gemVals);

    console.log(goalSum);

    $(".photo").on("click", function () {

        guessTotal += parseInt($(this).attr("value"));
        console.log(guessTotal);

        if (guessTotal > goalSum) {
            loses++;
            reset();
        }
    
        if (guessTotal === goalSum) {
            wins++;
            reset();
        }

        $("#score").text("Current total: " + guessTotal);
        $("#wins").text("Your wins: " + wins);
        $("#loses").text("Your loses: " + loses);
        $("#goalNum").text("Number to match: " + goalSum);


    });

    

});