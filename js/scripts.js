var diceroll = function() {
    var roll = Math.floor(Math.random() * 6) + 1;
    var score = 0;
    return roll;
};

// if (roll === 1) {
//     score = score - roll;
// } else if (roll === 2) {
//     score = score + 2;
// } else if (roll === 3) {
//     score = score + 3;
// } else if (roll === 3) {
//     score = score + 3;
// } else if (roll === 3) {
//     score = score + 3;
// }

$(document).ready(function() {
    $('form#roll').submit(function(event) {
        

    });
});
