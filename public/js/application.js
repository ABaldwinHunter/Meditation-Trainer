$(document).ready(function() {
  var $spacebar = $('#spacebar');
  var $exit_button = $('div')
  meditation = new Meditation();

  //hover effect
  $exit_button.hover(function(event){
    var $target = $(event.target);
    $target.toggleClass('soft');
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

