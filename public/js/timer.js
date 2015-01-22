var Timer = function() {
  this.startTime = Date.now();
  this.cycles = 0;
  this.phase = "inhale";
}

Timer.prototype.resetStartTime = function() {
  this.startTime = Date.now();
  this.cycles += 1;
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

Timer.prototype.currentPhase = function() {
  if (this.cycles % 2 == 0) {
    this.phase = "Inhale";
  } else {
    this.phase = "Exhale";
  }
}

Timer.prototype.displayPhase = function() {
  self = this;
  self.currentPhase();
  var $phase = $('.phase');
  $phase.html(self.phase);
}
















// var showtime = setInterval(function() {console.log(Date.now()-start)/1000}, 200);
