// // business logic
$(document).ready(function() {
  $("button#reset").hide();
  $("button#btn").hide();
  $("div.play1").hide();
  $("div.play2").hide();
  $("div.win").hide();
  $("div.dices").hide();
    $("button#start").click(function(event) {
      $("button#reset").show();
      $("button#btn").show();
      $("div.play1").show();
      $("div.play2").show();
      // $("div.win").show();
    //
        $("p#Roll1").click(function(event) {
    //       event.preventDefault();
    //       var dies = $("#die1","#die2");
    //       var players=$("#player1","player2");
          var status = $("#status1","status2");
    //       var turn= $("#turns");
    //       var wins =$("#winner");
    //       var score =$("#score1","score2")
          var d1 = Math.floor(Math.random() * 6) + 1;
          var d2 = Math.floor(Math.random() * 6) + 1;
          var playerdiceTotal = $('d1 +d2');
          var initialScore =0;
          $('#die1').html() = d1;
          $('#die2').html() = d2;
    //       $('#play1').html()=playe1;
    //       $('#play2').html()=playe2;
    //       $('#score1').html()=playerscore1;
    //       $('#score2').html()=playerscore2;
          $('#status').html() = "You rolled" + diceTotal + " .";
    //       if (playerscore1 == playerscore2) {
    //         $('#status'.html() += "you scored the same !! you get a free turn ;)";
    //
    //       }
    //       if(player1)

          $("p#Roll2").click(function(event){
                $("p#Roll1").hide();
            var status = $("#status1","status2");
            var d1 = Math.floor(Math.random() * 6) + 1;
            var d2 = Math.floor(Math.random() * 6) + 1;
            var playerdiceTotal = $('d1 +d2');
            var initialScore =0;
            $('#die1').html() = d1;
            $('#die2').html() = d2;
            $('#status').html() = "You rolled" + diceTotal + " .";
          }):
          });
        });
      });
