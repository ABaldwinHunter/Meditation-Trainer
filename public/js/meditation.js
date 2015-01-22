var Meditation = function(){
  // this.avgInhale = 0;
  // this.longestBreath = 0;
  // this.totalBreaths = 0;
  this.cycles = 0;
  this.phase = "Inhale";
  this.breaths = [];
  this.timer = new Timer();
  this.isOver = false;
  this.meditation_session;
}

Meditation.prototype.start = function() {
  var self = this;
  this.meditation_session = setInterval(function() {self.timer.displayTime();}, 250);
}


Meditation.prototype.loop = function(){
  var self = this;
  if (this.cycles == 0) {
      self.start();
  } else if (!this.checkFinish()) {
    var type = this.phase;
    var length = this.timer.getIntervalLength();
    this.makeNewBreath(type, length);
    meditation.displayPhase();
    this.timer.resetStartTime();
  }
}

Meditation.prototype.checkFinish = function() {
  var self = this;
  console.log("in checkFinish")
  if (this.cycles >= 10 || this.isOver){
    console.log("is Over", self.meditation_session)
    clearInterval(self.meditation_session);
    return true;
  } else {
    return false
  }
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
