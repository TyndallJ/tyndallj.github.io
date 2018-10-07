// Mario Kart 64 Character Select
// Tyndall Johnston
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Variables
let img, border;
let x,y;
let backgroundWidth = 1600;
let backgroundHeight = 1200;
let state = 0;

function preload() {
  img = loadImage("assets/selectcharacter.png");
  border = loadImage("assets/characterborder.png");
}


function setup() {
  createCanvas(backgroundWidth, backgroundHeight);
  image(img, 0, 0, backgroundWidth, backgroundHeight);
}

function draw() {
  findCharacter();
}

function findCharacter(){
  //Marios Location
  if (mouseX < width*0.275 && mouseX > width*0.07 && mouseY < height*0.58 && mouseY > height*0.255){
    image(border,119,315,322,380);
  }
  //Luigis Location
  else if (mouseX < width*0.492 && mouseX > width*0.29 && mouseY < height*0.58 && mouseY > height*0.255){
    image(border,466,315,322,380);
  }
  //Peachs Location
  else if (mouseX < width*0.709 && mouseX > width*0.51 && mouseY < height*0.58 && mouseY > height*0.255){
    image(border,810,315,322,380);
  }
  //Toads Location
  else if (mouseX < width*0.926 && mouseX > width*0.73 && mouseY < height*0.58 && mouseY > height*0.255){
    image(border,1154,315,322,380);
  }
  //Yoshis Location
  else if (mouseX < width*0.275 && mouseX > width*0.07 && mouseY < height*0.93 && mouseY > height*0.60){
    image(border,119,725,322,380);
  }
  //Donkey Kongs Location
  else if (mouseX < width*0.492 && mouseX > width*0.29 && mouseY < height*0.93 && mouseY > height*0.60){
    image(border,466,725,322,380);
  }
  //Warios Location
  else if (mouseX < width*0.709 && mouseX > width*0.51 && mouseY < height*0.93 && mouseY > height*0.60){
    image(border,810,725,322,380);
  }
  //Bowsers Location
  else if (mouseX < width*0.926 && mouseX > width*0.73 && mouseY < height*0.93 && mouseY > height*0.60){
    image(border,1154,725,322,380);
  }
  else{
    image(img,0,0,backgroundWidth,backgroundHeight);
  }
}
