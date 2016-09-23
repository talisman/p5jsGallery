var xtiles;
var ytiles;
var capture;
var SketchCanvas;
var captureOn = false;
var rv;
var gv;
var bv;
var br;

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
function getCaptureColors(){
  var r = 0;
  var g = 0;
  var b = 0;

  var tbr = 0;
  capture.loadPixels();
  for (var x = 0 ; x < capture.pixels.length ; x = x +4 ){
    r += capture.pixels[x];
    g += capture.pixels[x+1];
    b += capture.pixels[x+2];
    tbr += capture.pixels[x] + capture.pixels[1]+capture.pixels[2];
  }
  capture.loadPixels();

  var plen = capture.pixels.length;
  var pla = floor(plen / 3);
  tbr = tbr / capture.pixels.length * 0.75 ;
  console.log(tbr);
  //tbr = tbr / 3;
  br = map ( tbr , 200, 50 , 0 , height);
  rv = floor(r / pla);
  gv = floor(g / pla);
  bv = floor(b / pla);

}

function draw() {
  clear();
  smooth();
  noFill();
  getCaptureColors();

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
      //cx = random(i*x-vrnt,i*x+vrnt);
      //cy = random(j*y-vrnt,j*y+vrnt);
      if(captureOn){
        image(capture,i*x,j*y,x,y,i*x,j*y,x,y);
      }
    }
  }
  //getCaptureColors();
  fill(255,0,0,100);
  ellipse(width /6 , br ,rv , rv );
  fill(0,255,0,100);
  ellipse((width /6)*3 , br  ,gv  , gv );
  fill(0,0,255,100);
  ellipse((width /6)*5 , br ,bv  , bv );
}
