var canvas, draw, setup;

canvas = void 0;

setup = function() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("#hero-animation");
};

draw = function() {
  background(200);
  stroke(245, 244, 236);
  noFill();
  beginShape(TRIANGLE_STRIP);
  vertex(30, 20, 1);
  vertex(851, 20, 45);
  vertex(85, 75, 12);
  vertex(130, 735, 0);
  endShape(CLOSE);
};
