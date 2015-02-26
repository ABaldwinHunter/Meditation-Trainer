$(document).ready(function() {
  var $exit_button = $('div')
  meditation = new Meditation();

  //hover effect
  $exit_button.hover(function(event){
    var $target = $(event.target);
    $target.toggleClass('soft');
  });

  $('#lung').hover(function(event){
    var $target = $(event.target);
    // $target.show().animate({ top: 305 }, {duration: 1000, easing: 'easeOutBounce'});
    $target.effect("bounce", { direction:'down', times:5 }, 300);
  });

  $('.exit_button').click(function(){
    meditation.isOver = true;
    meditation.checkFinish();
  });
  Mousetrap.bind('space', function(){
    meditation.loop();
    meditation.cycles++;
  });
});

