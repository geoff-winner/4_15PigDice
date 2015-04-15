

var roll;
var score = 0;
var current_score = 0;
var total_score = 0;

var diceroll = function() {
    roll = Math.floor(Math.random() * 6) + 1;

        if (roll === 1) {
            current_score = 0;
        } else if (roll === 2) {
            current_score = current_score + 2;
        } else if (roll === 3) {
            current_score = current_score + 3;
        } else if (roll === 4) {
            current_score = current_score + 4;
        } else if (roll === 5) {
            current_score = current_score + 5;
        } else {
            current_score = current_score + 6;
        } return current_score;
    };




$(document).ready(function() {
    $('form#choice').submit(function(event) {
        current_score = diceroll();

        $('.current_score').text(current_score);

        event.preventDefault();
    });
    $('form#hold').submit(function(event) {
        event.preventDefault();
        total_score = total_score + current_score;
        $('.total_score').text(total_score);
        current_score = 0;
        $('.current_score').text(current_score);
    });
});
