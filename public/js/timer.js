var Timer = function() {
  this.startTime = Date.now();
}

Timer.prototype.resetStartTime = function() {
  this.startTime = Date.now();
}

Timer.prototype.getBreathLength = function(){
  return (Date.now() - this.startTime)/1000
}

Timer.prototype.displayTime = function(){
  self = this;
  var $timer = $('.timer');
  // $timer.append("<h1> "+ self.getBreathLength() + "</h1>");
  $timer.html(self.getBreathLength());
}




















// var showtime = setInterval(function() {console.log(Date.now()-start)/1000}, 200);
