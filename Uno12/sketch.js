var vs;

class Bubble{
  constructor(x,y){
    this.x = x ;
    this.y = y;
  }
  show(){
    ellipse(this.x,this.y,20)
  }
  move(){
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
  }

}

var bbls = [];

function setup() {
  createCanvas(400,400)
  colorMode(RGB,255,255,255,255);
  //vs = height / 2
  for (i=0;i<12;i++){
    bbls[i] = new Bubble(random(0,width),random(0,height));
  }
}

function draw() {
  background(255);
	stroke(255,80,80,125);
  strokeWeight(3);
  noFill();
  // line(0,vs,width,vs);
  // vs += 1;
  // if(vs == height ){
  //   vs = 0;
  //   console.log(vs);
  // }
  for (i=0;i<12;i++){
    bbls[i].show();
    bbls[i].move();
  }
  smooth();
}
