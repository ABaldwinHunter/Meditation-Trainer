var Meditation = function(){
  // this.avgInhale = 0;
  // this.longestBreath = 0;
  // this.totalBreaths = 0;
  this.cycles = 0;
  this.phase = "Inhale";
  this.breaths = [];
  this.timer = new Timer();
  this.isOver = false;
}

Meditation.prototype.loop = function(){
  if (!this.checkFinish()) {
    var type = this.phase;
    var length = this.timer.getIntervalLength();
    this.makeNewBreath(type, length);
    meditation.displayPhase();
    this.timer.resetStartTime();
  }
}

Meditation.prototype.checkFinish = function() {
  return (this.cycles >= 10 || this.isOver)

}

Meditation.prototype.makeNewBreath = function(type, length) {
  self = this;
  var breath = new Breath(type, length);
  self.breaths.push(breath);
}

Meditation.prototype.currentPhase = function() {
  if (this.cycles % 2 == 0) {
    this.phase = "Inhale";
  } else {
    this.phase = "Exhale";
  }
}

Meditation.prototype.displayPhase = function() {
  self = this;
  self.currentPhase();
  var $phase = $('.phase');
  $phase.html(self.phase);
}
