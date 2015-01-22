$(document).ready(function() {
  timer = new Timer();
  Mousetrap.bind('space', function(){
    timer.resetStartTime();
    timer.displayPhase();
    setInterval(function() {timer.displayTime();}, 200);
  });
});



    // setInterval(function() {timer.displayTime();}, 200);
  // $('h1').mouseover(function(){
  //   $(this).toggleClass('red');
  // })
