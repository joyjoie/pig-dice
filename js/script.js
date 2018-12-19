//Creates a player and sets initial score to 0
function Player(mtumiAji) {
  this.mtumiAji = mtumiAji;
  this.score = 0;
};

//pass it a player object!
function Turn(player) {
  this.total = 0;
  this.randNumber = 0;
  this.player = player;
};

//Creates random number, saves it and then returns it
Turn.prototype.diceRoller = function(player1, player2) {
  var randNumber = Math.floor(Math.random() * 6) + 1;
  this.total += randNumber;

  if (randNumber == 1) {
      this.total = 0;
      this.endTurn(player1, player2);
      // this.randNumber += randNumber;
      return randNumber;
  } else {
      this.randNumber += randNumber;
      return randNumber;
  };
};

Turn.prototype.endTurn = function(player1, player2) {
  //adding total to score
  this.player.score += this.total;
  //and clearing total
  this.total = 0;
  this.randNumber = 0;
  if (this.player == player1) {
      this.player = player2;
      $("#player2").toggleClass("active");
      $("#player1").toggleClass("active");
  } else if (this.player == player2) {
      this.player = player1;
      $("#player2").toggleClass("active");
      $("#player1").toggleClass("active");
  };
};

$(document).ready(function() {
  var player1 = new Player("Player 1");
  var player2 = new Player("Player 2");

  //Start current turn with player1, will be switched to player2 in endTurn
  var currentTurn = new Turn(player1);

  var total = currentTurn.total;

  //jquery animations
  $("#player1").hide().show();
  $("#player2").hide().show();
  $("h1").hide().show();
  $("p").hide().show();

  //Prints initial Turn Total of 0
  $("#rolltotal").text(total);

  //Prints initial player scores of 0
  $('#player1-score').text(player1.score);
  $('#player2-score').text(player2.score);

  //Prints current Player
  $('#current_player').text(currentTurn.player.mtumiAji);

  //This code runs when you click the Roll button
  $("form#roll").submit(function(event) {
    event.preventDefault();

    //Creates a dice roll number
    var result = currentTurn.diceRoller(player1, player2);

    //Prints the roll number to the page
    $('#roll').text(result);

    //Prints the roll total to the page
    $('#rolltotal').text(currentTurn.total);

    //Determines the winner and prints player score to page
    if ((currentTurn.total + currentTurn.player.score) >= 50) {
      if (currentTurn.player == player1) {
          $('#player1-score').text(currentTurn.total + currentTurn.player.score);
          alert("You are the winner! player1");
      } else if (currentTurn.player == player2) {
          $('#player2-score').text(currentTurn.total + currentTurn.player.score)
          alert("You are the winner! player2");
      };
    };
  });

  //This code runs when you click the End Turn button
  $("form#end-turn").submit(function(event) {
    event.preventDefault();

    currentTurn.endTurn(player1, player2);

    //Prints current Player
    $('#current_player').text(currentTurn.player.mtumiAji);

    //Prints players scores
    $('#player1-score').text(player1.score);
    $('#player2-score').text(player2.score);

    //Prints the cleared Current Roll and Turn Total on page
    $('#roll').text(currentTurn.randNumber);
    $('#rolltotal').text(currentTurn.total);
  });
});
