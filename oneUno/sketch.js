var vs;
var amp;
function setup() {
  createCanvas(400,400)
  colorMode(RGB,255,255,255,255);
}

function draw() {
	//noFill();
	clear();
	stroke(100);
	strokeWeight(2);
	smooth();
	var d = dist(mouseX,mouseY,width/2,height/2);
	amp = map(d,0,240,2,20);
	vs = random(100-amp,100+amp);
	
	fill(amp*12,(255- amp*12),220,255);
	
	ellipse(width/2,height/2,vs,vs);
  
}
