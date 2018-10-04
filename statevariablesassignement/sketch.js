// Mario Kart 64 Character Select
// Tyndall Johnston
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Variables
let img;
let x,y;
let backgroundWidth = 1600;
let backgroundHeight = 1200;

function preload() {
  img = loadImage("assets/selectcharacter.png");
}


function setup() {
  createCanvas(backgroundWidth, backgroundHeight);
  image(img, 0, 0, backgroundWidth, backgroundHeight);
  rect(119,315,322,380);
}

function draw() {
  findCharacter();
}



function findCharacter(){
  if (mouseX < 322 && mouseY < 380){
    background(220);
  }
  else{
    image(img, 0, 0, backgroundWidth, backgroundHeight);
  }

}
