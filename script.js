//business logic
function rolldie(){
var die1= document.getElementById("die1");
var die2 = document.getElementById("die2");
  var d1 = Math.floor(Math.random()*6)+1;
  var d2 =Math.floor(Math.random()*6)+1;
  var diceTotal =d1 +d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;

}
