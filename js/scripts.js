var roll;
var current_score2 = 0;
var total_score2 = 0;
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

  if (roll === 1) {
    current_score2 = 0;
  } else if (roll === 2) {
    current_score2 = current_score2 + 2;
  } else if (roll === 3) {
    current_score2 = current_score2 + 3;
  } else if (roll === 4) {
    current_score2 = current_score2 + 4;
  } else if (roll === 5) {
    current_score2 = current_score2 + 5;
  } else {
    current_score2 = current_score2 + 6;
  } return current_score2;
};

$(document).ready(function() {
  $('form#choice').submit(function(event) {
    current_score = diceroll();

    $('.current_score').text(current_score);

    if (roll === 1) {
      $('#hold').hide();
      $('#choice').hide();
      $('#hold2').show();
      $('#choice2').show();
      $('#p1').addClass('spin');
      $('#p2').removeClass('spin');
      $('.dice1').attr('src', 'img/dice1.png');
    } else if (roll === 2) {
      $('.dice1').attr('src', 'img/dice2.png');
    } else if (roll === 3) {
      $('.dice1').attr('src', 'img/dice3.png');
    } else if (roll === 4) {
      $('.dice1').attr('src', 'img/dice4.png');
    } else if (roll === 5) {
      $('.dice1').attr('src', 'img/dice5.png');
    } else if (roll === 6) {
      $('.dice1').attr('src', 'img/dice6.png');
    }
    event.preventDefault();
  });
  $('form#hold').submit(function(event) {
    event.preventDefault();
    total_score = total_score + current_score;
    $('.total_score').text(total_score);
    current_score = 0;
    current_score2 = 0;
    $('.current_score').text(current_score);
    $('#hold').hide();
    $('#choice').hide();
    $('#hold2').show();
    $('#choice2').show();
    $('#p2').removeClass('spin');
    if (total_score >= 100){
      $('.winner').show();
    };

  });
  $('form#choice2').submit(function(event) {
    current_score2 = diceroll();

    $('.current_score2').text(current_score2);
    if (roll === 1) {
      $('#hold2').hide();
      $('#choice2').hide();
      $('#hold').show();
      $('#choice').show();
      $('#p2').addClass('spin');
      $('#p1').removeClass('spin');
      $('.dice2').attr('src', 'img/dice1.png');
    } else if (roll === 2) {
      $('.dice2').attr('src', 'img/dice2.png');
    } else if (roll === 3) {
      $('.dice2').attr('src', 'img/dice3.png');
    } else if (roll === 4) {
      $('.dice2').attr('src', 'img/dice4.png');
    } else if (roll === 5) {
      $('.dice2').attr('src', 'img/dice5.png');
    } else if (roll === 6) {
      $('.dice2').attr('src', 'img/dice6.png');
    }
    event.preventDefault();
  });
  $('form#hold2').submit(function(event) {
    event.preventDefault();
    total_score2 = total_score2 + current_score2;
    $('.total_score2').text(total_score2);
    current_score = 0;
    current_score2 = 0;
    $('.current_score2').text(current_score2);
    $('#hold2').hide();
    $('#choice2').hide();
    $('#hold').show();
    $('#choice').show();
    $('#p1').removeClass('spin');

    if (total_score2 >= 100){
      $('.winner2').show();
    }
  });
});
