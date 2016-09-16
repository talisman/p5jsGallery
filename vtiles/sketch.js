var xtiles;
var ytiles;
var capture;
var captureOn = false;


function setup() {
  createCanvas(640,480);
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
  //clear();
  smooth();
  noFill();
  strokeWeight(2);
  stroke(50,50,50,100);
  x = width / xtiles;
  y = height / ytiles;
  var vrnt =  (x+y)/40;

  for (var i = 0 ; i < xtiles ; i++){
    for(var j = 0 ; j < ytiles ; j++){

      //cx = random(0,capture.width-x);
      //cy = random(0,capture.height-y);
      //cx = floor(random(xtiles+1))*x;
      //cy = floor(random(ytiles+1))*y;

      cx = random(i*x-vrnt,i*x+vrnt);
      cy = random(j*y-vrnt,j*y+vrnt);
    //  rect(i*x,j*x,x,y);
      if(captureOn){
      //image(capture,i*x,j*y,x,y,i*x,j*y,x,y);
        image(capture,cx,cy,x,y,i*x,j*y,x,y);
      }
    }
  }
}
