// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x;
let dx;
let rectWidth

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  dx = 5;
  rectWidth = 50;

}

function draw() {
  background(255, 0, 0);
  //move SQUARE
  x += dx;

  // check for boundaries

  if (x > width - rectWidth || x<0 ){
    dx = dx * -1;
  }

  //draw SQUARE

  fill(0, 0, 255);
  rect(x,200,rectWidth,rectWidth);




}
