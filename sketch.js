// INTERACTIVE ELLIPSOID
// Use the slider at the bottom of the window to change the shape.
var ink;
var paper;
let detailY;
var top;
var bott;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB);
  blendMode(LIGHTEST);
  angleMode(DEGREES);
  rectMode(CENTER);
  //DEFINE COLORS
  ink = color(13, 13, 13);
  paper = color('#f3f3f3');
  
  //SLIDER
  //min, max, [value], [step]
  detailY = createSlider(2, 24, 6);
  detailY.position(windowWidth/2 - 310, windowHeight/2 + 265);
  detailY.addClass("slider");
}

function draw() {
  push();
  translate(windowWidth/2, -windowHeight/2);  
  background(ink);
  
  // GRADIENT   
  setGradient(top, bott);
  function setGradient(top, bott) {
    top = color(160, 164, 242);
    bott = color(80, 88, 242);
    noFill();
    for (var i = 0; i < height; i++) {
      // inter = amount of interpolation
      // map = re-maps a number from one range to another
      // map(value, start1, stop1, start2, stop2, [withinBounds])
      var inter = map(i, 0, height, 0, 1.5);
      // linear interpolate the vector to another vector
      // lerp(x, y, z, amt)
      var newC = lerpColor(top, bott, inter);
      stroke(newC);
      rect(0, i, width * 2, i * 2);
    }
  } 
  pop();
  
  // DRAW THE ANIMATED SHAPE
  translate(10, 8); 
  push();
  beginShape();
  rotateY(frameCount * 0.3);
  stroke(paper);
  strokeWeight(1.2);
  noFill(ink);
  // [radiusx], [radiusy], [radiusz], [detailX], [detailY]
  ellipsoid(200, 200, 200, 20, detailY.value());
  endShape();
  pop();
}