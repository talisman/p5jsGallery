var vs;

function setup() {
  createCanvas(400,400)
  colorMode(RGB,255,255,255,255);
  vs = height / 2
}

function draw() {
  background(255,255, 255);
  stroke(255,80,80,125);
  strokeWeight(2);
  line(0,vs,width,vs);
  vs += 1;
  if(vs == height ){
    vs = 0;
  }
  smooth();
}
