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
  x = windowWidth/2 - dvd.width/2;
  y = windowHeight/2 - dvd.height/2;
  dx = random(3,8)
  dy = random(3,9)
}

function draw() {
  movedvd();
  displaydvd();
}

function displaydvd(){
  changecolor();
  image(dvd, x, y);
}

function movedvd(){
  x +=  dx;
  y += dy;
  if (y + dvd.height >= windowHeight || y <= 0){
    dy = dy * -1;
  }
  if (x + dvd.width >= windowWidth || x <= 0){
    dx = dx * -1;
  }
}
function changecolor(){
  background(random(1,255), random(1,255), random(1,255))
}
