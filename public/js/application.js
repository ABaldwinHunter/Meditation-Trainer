$(document).ready(function() {
  meditation = new Meditation();
  // var $lung = $('#lung');
  // var r = 255;
  // var g = 0;
  // var b = 2;
  // var a = 0.3;

  $('.exit_button').click(function(){
    meditation.isOver = true;
    meditation.checkFinish();
  });
  Mousetrap.bind('space', function(){
    meditation.loop();
    meditation.lungBreathe();
    meditation.cycles++;
  });
  // Mousetrap.bind('k', function(){
  //   setInterval(function() {
  //   r -= 30;
  //   g += 30;
  //   b  += 30;
  //   $lung.css('background-color', 'rgba(' + r + ',' + g + ',' + b+ ',' +a +')')
  //   }, 200);
  // });
});



    // setInterval(function() {timer.displayTime();}, 200);
  // $('h1').mouseover(function(){
  //   $(this).toggleClass('red');
  // })
