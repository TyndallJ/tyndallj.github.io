// DVD Bounce
//
let dvd;
let x,y;
let dx, dy;
function preload(){
  dvd = loadImage("assets/dvd.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = windowHeight/2
  dx = random(3,8)
  dy = random(3,9)
}

function draw() {
  background(80,80,80)
  image(dvd, x, y)
}
