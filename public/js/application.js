$(document).ready(function() {
  var timer = new Timer();
  Mousetrap.bind('space', function(){
    setInterval(function() {timer.displayTime();}, 5000);
    timer.test();
  });
});



    // setInterval(function() {timer.displayTime();}, 200);
