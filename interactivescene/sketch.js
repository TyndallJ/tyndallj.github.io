// sanic Bounce
//
let sanic;
let x,y;
let dx, dy;
let sanicsound;
let changecolor;
let value = 255;

function preload(){
  sanic = loadImage("assets/yeet.png");
  sanicsound = loadSound('assets/sonic.mp3');
  }
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2 - sanic.width/2;
  y = windowHeight/2 - sanic.height/2;
  dx = random(3,8)
  dy = random(3,9)
  sanicsound.play()
}

function draw() {
  movesanic();
  background(value);
  displaysanic();
  }

function displaysanic(){
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
function mousePressed(){
  value = random(255), random(255), random(255);
}
