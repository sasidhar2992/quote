$(window).ready(function(){
function quot(){
var quotes="I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.@ Depth of friendship does not depend on length of acquaintance.@I have become my own version of an optimist. If I can't make it through one door, I'll go through another door - or I'll make a door. Something terrific will come no matter how dark the present.@What is Art? It is the response of man's creative soul to the call of the Real.@If you shut the door to all errors, truth will be shut out.";
var newArray=quotes.split("@");
var min=1;
var max=newArray.length;
var number=Math.floor(Math.random()*(max-min+1));
  $("#qu").text(newArray[number]);
}
quot();
$("#btn").on('click', function(){
  quot();
});
});