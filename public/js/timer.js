var Timer = function() {
  this.startTime = Date.now();
}

Timer.prototype.resetStartTime = function() {
  this.startTime = Date.now();
}

Timer.prototype.getIntervalLength = function(){
  return (Date.now() - this.startTime)/1000
}

Timer.prototype.displayTime = function(){
  var self = this;
  var $timer = $('.timer');
  $timer.html(self.getIntervalLength() + " seconds");
}




















// var showtime = setInterval(function() {console.log(Date.now()-start)/1000}, 200);
