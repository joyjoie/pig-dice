// // business logic
$(document).ready(function) {
    $("button#start").onclick(function(event)) {
        event.preventDefault();
        ("button#reset").hide();
        ("button#btn").hide();

        $("button#btn").onclick(function(event)) {
          event.preventDefault();
          var die1 = $("#die1");
          var die2 = $("#die2");
          var status = $("#status");
          var turn= $("#turns");
          var wins =$("#winner");
          var score =$("#score1","score2")
          var d1 = Math.floor(Math.random() * 6) + 1;
          var d2 = Math.floor(Math.random() * 6) + 1;
          var diceTotal = $('d1 +d2');
          var initialScore =0;
          $(die1).html() = d1;
          $(die2).html() = d2;
          status.html() = "You rolled" + diceTotal + " .";
          if (d1 == d2) {
            status.html() += "The same !! you get a free turn ;)";
          }
          if(d)

        }
