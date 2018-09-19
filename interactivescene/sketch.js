// sanic Bounce
//
let sanic;
let x,y;
let dx, dy;
function preload(){
  sanic = loadImage("assets/yeet.png");
  soundFormats('mp3');
  mySound = loadSound('assets/ADDHERE');
  }

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2 - sanic.width/2;
  y = windowHeight/2 - sanic.height/2;
  dx = random(3,8)
  dy = random(3,9)
}

function draw() {
  movesanic();
  displaysanic();
}

function displaysanic(){
  changecolor();
  image(sanic, x, y);
}

function movesanic(){
  x +=  dx;
  y += dy;
  if (y + sanic.height >= windowHeight || y <= 0){
    dy = dy * -1;
  }
  if (x + sanic.width >= windowWidth || x <= 0){
    dx = dx * -1;
  }
}
function changecolor(){
  background(random(1,255), random(1,255), random(1,255))
}
