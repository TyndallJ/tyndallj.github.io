// Interactive Scene
// Tyndall
// 09/21/2018
let x,y;
let spin;
let dx,dy;
let sanic;
let sanicsound;
let value = 255;
let value2 = 255;
let value3 = 255;

function preload(){
  sanic = loadImage("assets/yeet.png");
  sanicsound = loadSound("assets/sonic.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(3,10);
  dy = random(3,10);
  spin = 0;
  imageMode(CENTER);
}

function draw() {
  background(value, value2, value3);
  translate(x,y);
  rotate(spin);
  image(sanic, 0, 0);

  x += dx;
  y += dy;

  if (x > width || x < 0){
    dx *= -1;
  }
  if (y > height || y < 0){
    dy *= -1;
  }

  if (spin < PI*2){
    spin += 0.1;
  }
  else{
    spin = PI*2;
  }
}
function mousePressed(){
  spin = 0;
}
function keyPressed(){
  value = random(255);
  value2 = random(255);
  value3 = random(255);
}
function mouseWheel(){
  sanicsound.play();
}
