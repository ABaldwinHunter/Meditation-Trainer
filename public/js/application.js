$(document).ready(function() {
  timer = new Timer();
  meditation = new Meditation();

  Mousetrap.bind('space', function(){
    timer.resetStartTime();
    meditation.displayPhase();
    setInterval(function() {timer.displayTime();}, 250);
  });
});



    // setInterval(function() {timer.displayTime();}, 200);
  // $('h1').mouseover(function(){
  //   $(this).toggleClass('red');
  // })
