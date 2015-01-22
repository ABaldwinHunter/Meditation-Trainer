$(document).ready(function() {
  meditation = new Meditation();

  $('.exit_button').click(function(){
    meditation.isOver = true;
    meditation.checkFinish();
  });
  Mousetrap.bind('space', function(){
    meditation.loop();
    meditation.cycles++;
  });
});



    // setInterval(function() {timer.displayTime();}, 200);
  // $('h1').mouseover(function(){
  //   $(this).toggleClass('red');
  // })
