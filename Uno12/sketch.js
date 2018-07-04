var vs;

class Bubble{
  constructor(x,y,dia){
    this.x = x ;
    this.y = y;
    this.dia = dia;
    this.fa =  map(dist(this.x, this.y,width/2 ,height/2 ), 0,200, 0,255);
  }
  show(){
    this.fa = map(dist(this.x, this.y,width/2 ,height/2 ), 0,200, 0,255)
    fill(255,20,20,this.fa);
    ellipse(this.x,this.y,this.dia)
  }
  move(){
    this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
  }
  checkincanvas(){
    let x_ok = 0;
    let y_ok = 0;
    if (this.x + this.dia < width && this.x - this.dia > 0){
       x_ok = 1;
    }
    if (this.y + this.dia < height && this.y - this.dia > 0){
       y_ok = 1;
    }
    if (x_ok + y_ok < 2 ){
      console.log(this.x,this.y);
    }

  }
}

let bbls = [];
let nbub;
function setup() {
  nbub = 12;
  createCanvas(400,400)
  colorMode(RGB,255,255,255,255);
  //vs = height / 2
  for (i=0;i<nbub;i++){
    bbls[i] = new Bubble(random(0,width),random(0,height),random(4,80));
  }
}

function draw() {
  background(255);
	stroke(100);
  strokeWeight(1);
  for (i=0;i<nbub;i++){
    bbls[i].show();
    bbls[i].move();
    bbls[i].checkincanvas();
  }
  smooth();
}
