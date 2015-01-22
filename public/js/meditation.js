var Meditation = function(){
  // this.avgInhale = 0;
  // this.longestBreath = 0;
  // this.totalBreaths = 0;
  this.$lastBreath = $('#last_breath');
  this.$longestBreath = $('#longest_breath');
  this.$averageBreath = $('#average_breath');
  this.averageBreath = 0;
  this.longestBreath = 0;
  this.cycles = 0;
  this.phase = "Inhale";
  this.breaths = [];
  this.timer = new Timer();
  this.isOver = false;
  this.meditation_session;
  this.$lung = $('.container');
  this.r = 255;
  this.g = 0;
  this.b = 2;
  this.a = 0.3;
}

Meditation.prototype.start = function() {
  var self = this;
  this.meditation_session = setInterval(function() {self.timer.displayTime();}, 200);
}


Meditation.prototype.loop = function(){
  var self = this;
  if (this.cycles == 0) {
      self.start();
  } else if (!this.checkFinish()) {
    var type = this.phase;
    var length = this.timer.getIntervalLength();
    this.makeNewBreath(type, length);
    this.displayPhase();
    this.timer.resetStartTime();
  }
}

Meditation.prototype.checkFinish = function() {
  var self = this;
  if (this.cycles >= 10 || this.isOver){
    clearInterval(self.meditation_session);
    return true;
  } else {
    return false
  }
}

Meditation.prototype.updateBreathStats = function(breath){
  var self = this;
  if (breath.length > self.longestBreath) {
    self.longestBreath = breath.length;
    self.$longestBreath.html(breath.length);
  }
  if (self.cycles == 0) {
    self.averageBreath = breath.length;
  } else {
    self.averageBreath = ((self.averageBreath * self.cycles) + breath.length)/(self.cycles + 1);
  }
  self.$averageBreath.html(self.averageBreath);
}

Meditation.prototype.makeNewBreath = function(type, length) {
  self = this;
  var breath = new Breath(type, length);
  self.breaths.push(breath);
  self.$lastBreath.html(breath.length);
  self.updateBreathStats(breath);
}

Meditation.prototype.currentPhase = function() {
  if (this.cycles % 2 == 0) {
    this.phase = "Inhale";
  } else {
    this.phase = "Exhale";
  }
}

Meditation.prototype.displayPhase = function() {
  var self = this;
  self.currentPhase();
  var $phase = $('.phase');
  $phase.html(self.phase);
}


Meditation.prototype.lungBreathe = function(){
  var self = this;
  if (self.phase == "Inhale") {
    setInterval(function() {
        self.r -= 20;
        self.g += 20;
        self.b  += 20;
        self.$lung.css('background-color', 'rgba(' + self.r + ',' + self.g + ',' + self.b+ ',' +self.a +')')
        }, 200);
    } else {
      setInterval(function() {
        self.r += 20;
        self.g -= 20;
        self.b  -= 20;
        self.$lung.css('background-color', 'rgba(' + self.r + ',' + self.g + ',' + self.b+ ',' +self.a +')')
      }, 200);
    }
}
