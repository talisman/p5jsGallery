var mc;

class mci {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r= r;
    this.vec = createVector(random(-5,5),random(-5,5))
    this.f = 255;
  }
  show(){
    fill(255,100,100,this.f);
    ellipse(this.x,this.y,this.r*2);
//    console.log(this.vec.mag().toString());

  }
  showSqaushX(){
    ellipse(this.x,this.y,this.r*2 - 2 ,this.r*2);
  }
  move(){
    this.x += this.vec.x;
    this.y += this.vec.y;
    this.vec.setMag(this.vec.mag() * 1.000005);
    //this.vec.setMag(this.vec.mag * 1.05);
    if (this.x + this.r > width || this.x - this.r < 0 ){
      this.vec.set (this.vec.x * -1, this.vec.y);
      this.vec.setMag(this.vec.mag() * 0.99995);
      this.f -= 15;

    }
    if (this.y + this.r > height || this.y - this.r < 0 ){
      this.vec.set (this.vec.x , this.vec.y * -1);
      this.vec.setMag(this.vec.mag() * 0.99995);
      this.f -= 15;

    }

  }
}

function setup() {
  createCanvas(400,400)
  colorMode(RGB,255,255,255,255);
  mc = new mci(100,100,20);
  //frameRate(12);
}

function draw() {
  background(255,255, 255);
  stroke(55);
  strokeWeight(3);
  mc.show();
  mc.move();
  smooth();
}
