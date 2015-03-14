var Meditation = function(){
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
  this.meditation_color_key;
  this.meditationLungKey;
  this.$container = $('.container');
  this.$lung = $('#lung');
  this.r = 1;
  this.g = 0;
  this.b = 2;
  this.a = 0.5;
  this.width = 0.3;
  this.height = 0.3;
}

Meditation.prototype.start = function() {
  var self = this;
  this.meditation_session = setInterval(function() {self.timer.displayTime();}, 200);
  this.meditation_color_key = setInterval(function() {self.updateColor();}, 200);
  this.meditationLungKey = setInterval(function() {self.updateLung();}, 200);
}


Meditation.prototype.resetColorDirection = function() {
  var self = this;
  clearInterval(self.meditation_color_key);
  self.meditation_color_key = setInterval(function() {self.updateColor();}, 200);
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

Meditation.prototype.updateLung = function() {
  var self = this;
  self.$lung.css('width', self.getWidth());
  self.$lung.css('height', self.getHeight());
}

Meditation.prototype.getWidth = function(){
  var self = this;
  if (self.phase === "Inhale") {
    self.width += 0.03;
  } else {
    self.width -= 0.03;
  }
  return parseInt(Math.abs(Math.sin(self.width))*500).toString() + "px"
}

Meditation.prototype.getHeight = function() {
  var self = this;
  if (self.phase === "Inhale") {
    self.height += 0.03;
  } else {
    self.height -= 0.03;
  }
  return parseInt(Math.abs(Math.sin(self.width))*500).toString() + "px"
}

Meditation.prototype.updateColor = function() {
  var self = this;
  self.$container.css('background-color', self.getColor());
}

Meditation.prototype.getColor = function() {
  var self = this;
  self.r += 0.1;
  self.g -= 0.1;
  self.b  += 0.1;

  var string = 'rgba(';
  string += self.getR();
  string += ',';
  string += self.getG();
  string += ',';
  string += self.getB();
  string += ',';
  string += self.getA();
  string += ')';
  return string;

}

Meditation.prototype.getR = function() {
  var self = this;
  return parseInt(Math.abs(Math.sin(self.r))*255)
}

Meditation.prototype.getG = function() {
  var self = this;
  return parseInt(Math.abs(Math.sin(self.g))*255)
}

Meditation.prototype.getB = function() {
  var self = this;
  return parseInt(Math.abs(Math.sin(self.b))*255)
}

Meditation.prototype.getA = function() {
  var self = this;
  return parseInt(Math.abs(Math.sin(self.a))*255)
}







