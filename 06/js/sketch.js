var mysketch = function(p){

  var spiro = new Spirograph(p);

  p.setup = function() {
    p.createCanvas(1000, 600);
    spiro.init();
  }

  p.draw = function() {
    spiro.drawBackground();
    spiro.drawCircles();
  }

  p.keyReleased = function() {
    if (p.key==' ') {
      spiro.switchMode();
    }
  }

};

var myP5 = new p5(mysketch);