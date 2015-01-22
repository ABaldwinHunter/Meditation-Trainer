$(document).ready(function() {
  meditation = new Meditation();

  $('.exit_button').click(function(){
    meditation.isOver = true;
  });

  Mousetrap.bind('space', function(){
    meditation.loop();
    setInterval(function() {meditation.timer.displayTime();}, 250);
    meditation.cycles++;
  });
});



    // setInterval(function() {timer.displayTime();}, 200);
  // $('h1').mouseover(function(){
  //   $(this).toggleClass('red');
  // })
