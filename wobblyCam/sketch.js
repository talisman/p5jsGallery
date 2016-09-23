var xtiles;
var ytiles;
var capture;
var SketchCanvas;
var captureOn = false;

function setup() {
  SketchCanvas  = createCanvas(200,200);
  colorMode(RGB,255,255,255,255);
  background(255,200,255);
  xtiles = 8;
  ytiles = 8;
  capture = createCapture(VIDEO,captureBegan);
  capture.hide();
}

function captureBegan(){
  captureOn = true;
}

function draw() {
  clear();
  smooth();
  noFill();
  strokeWeight(2);
  stroke(50,50,50,100);
  x = width / xtiles;
  y = height / ytiles;

  var vrnt = map(dist(mouseX,mouseY,width/2,height/2),0,Math.sqrt(width*width+height*height),1,5);

  if(captureOn){
    if (SketchCanvas.width != capture.width){
    var w = capture.width;
    var h = capture.height;
    SketchCanvas.resize(w,h);
    }
  }

  for (var i = 0 ; i < xtiles ; i++){
    for(var j = 0 ; j < ytiles ; j++){
      cx = random(i*x-vrnt,i*x+vrnt);
      cy = random(j*y-vrnt,j*y+vrnt);
      if(captureOn){
        image(capture,cx,cy,x,y,i*x,j*y,x,y);
      }
    }
  }
}
