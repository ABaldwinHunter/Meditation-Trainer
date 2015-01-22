var Meditation = function(){
  // this.avgInhale = 0;
  // this.longestBreath = 0;
  // this.totalBreaths = 0;
  this.cycles = 0;
  this.phase = "Inhale";
  this.breaths = [];
}

Meditation.prototype.loop = function(){



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
  this.cycles += 1;
}
