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
        $("button#btn1").click(function(event) {
          $("button#start").hide();
          var dies = $("#die1","#die2");
          var status = $("#status1","status2");
          var d1 = Math.floor(Math.random() * 6) + 1;
          var d2 = Math.floor(Math.random() * 6) + 1;
          var diceTotal = $('d1 +d2');
          var initialScore =0;
          $('#die1').html() = d1;
          $('#die2').html() = d2;
          $('#status').html() = "You rolled" + diceTotal + " .";
          if (d1 == d2) {
            $('#status'.html() += "yougot the same values ;)";

    //       }
    // //       if(player1)
    //
    //       $("button#btn2").click(function(event){
    //       $("button#start").hide();
    //         var status = $("#status1","status2");
    //         var d1 = Math.floor(Math.random() * 6) + 1;
    //         var d2 = Math.floor(Math.random() * 6) + 1;
    //         var playerdiceTotal = $('d1 +d2');
    //         var initialScore =0;
    //         $('#die1').html() = d1;
    //         $('#die2').html() = d2;
    //         $('#status').html() = "You rolled" + diceTotal + " .";
          }):
          });
        });
      });
