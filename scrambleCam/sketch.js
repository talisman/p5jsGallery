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
  frameRate(4);
  SketchCanvas  = createCanvas(200,200);
  colorMode(RGB,255,255,255,255);
  background(255,200,255);
  xtiles = 18;
  ytiles = 12;
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

  var indexArray = [];
  //var imgs
  var idx = 0;
  for (var i =  0  ; i < xtiles ; i++){
    for (var j = 0; j < ytiles ; j++){
      indexArray[idx]=createVector(i*x,j*y);
      idx++;
    }
  }
  //console.log(indexArray[0].x,indexArray[0].y);


  if(captureOn){
    if (SketchCanvas.width != capture.width){
    var w = capture.width;
    var h = capture.height;
    SketchCanvas.resize(w,h);
    console.log('resized');
    console.log(indexArray);
    }
  }

  for (var i = 0 ; i < xtiles ; i++){
    for(var j = 0 ; j < ytiles ; j++){
      if(captureOn){
        var r = random();
        if (r < 0.025 ){
          var v = floor(random(indexArray.length));
        }
        else {
          var v = 0;
        }
        var sx = indexArray[v].x;
        var sy = indexArray[v].y;
        indexArray.splice(v, 1);
        image(capture,sx,sy,x,y,i*x,j*y,x,y);
        stroke(255,255,255);
        strokeWeight(1);
    //    rect(i*x,j*y,x,y);
      }
    }
  }

}
