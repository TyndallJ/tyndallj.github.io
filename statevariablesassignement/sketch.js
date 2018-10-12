// Mario Kart 64 Character Select
// Tyndall Johnston
// Date
// Interactive state state change assignment

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Variables
//image variables
let img, border;
let marioimg, luigiimg, peachimg, toadimg;
let yoshiimg, dkimg, warioimg, bowserimg;
//canvas size
let backgroundWidth = 1600;
let backgroundHeight = 1200;
//state & character state change variables
let state = 0;
let mario = 0;
let luigi = 0;
let peach = 0;
let toad = 0;
let yoshi = 0;
let dk = 0;
let wario = 0;
let bowser = 0;

//Loading images
function preload() {
  img = loadImage("assets/selectcharacter.png");
  border = loadImage("assets/characterborder.png");
  marioimg = loadImage("assets/marioimg.png");
  luigiimg = loadImage("assets/luigiimg.png");
  peachimg = loadImage("assets/peachimg.png");
  toadimg = loadImage("assets/toadimg.png");
  yoshiimg = loadImage("assets/yoshiimg.png");
  dkimg = loadImage("assets/dkimg.png");
  warioimg = loadImage("assets/warioimg.png");
  bowserimg = loadImage("assets/bowserimg.png");
}

//Adding background
function setup() {
  createCanvas(backgroundWidth, backgroundHeight);
  image(img, 0, 0, backgroundWidth, backgroundHeight);
}

function draw() {
  if (state === 0){
    findCharacter();
  }
  else if (state === 1){
    if (mario === 1){
      image(marioimg, 0, 0, backgroundWidth, backgroundHeight);
    }  
    else if (luigi === 1){
      image(luigiimg, 0, 0, backgroundWidth, backgroundHeight);
    }
    else if (peach === 1){
      image(peachimg, 0, 0, backgroundWidth, backgroundHeight);
    }
    else if (toad === 1){
      image(toadimg, 0, 0, backgroundWidth, backgroundHeight);
    }
    else if (yoshi === 1){
      image(yoshiimg, 0, 0, backgroundWidth, backgroundHeight);
    }
    else if (dk === 1){
      image(dkimg, 0, 0, backgroundWidth, backgroundHeight);
    }
    else if (wario === 1){
      image(warioimg, 0, 0, backgroundWidth, backgroundHeight);
    }
    else if (bowser === 1){
      image(bowserimg, 0, 0, backgroundWidth, backgroundHeight);
    }
    else{
      findCharacter();
    }
  }
}

//Loaction of Characters
function findCharacter(){

  //Marios Location
  if (mouseX < width*0.275 && mouseX > width*0.07 && mouseY < height*0.58 && mouseY > height*0.255){
    image(border,119,315,322,380);
    if (mouseIsPressed){
      state = 1;
      mario = 1;
    }
  }
  //Luigis Location
  else if (mouseX < width*0.492 && mouseX > width*0.29 && mouseY < height*0.58 && mouseY > height*0.255){
    image(border,466,315,322,380);
    if (mouseIsPressed){
      state = 1;
      luigi = 1;
    }
  }
  //Peachs Location
  else if (mouseX < width*0.709 && mouseX > width*0.51 && mouseY < height*0.58 && mouseY > height*0.255){
    image(border,810,315,322,380);
    if (mouseIsPressed){
      state = 1;
      peach = 1;
    }
  }
  //Toads Location
  else if (mouseX < width*0.926 && mouseX > width*0.73 && mouseY < height*0.58 && mouseY > height*0.255){
    image(border,1154,315,322,380);
    if (mouseIsPressed){
      state = 1;
      toad = 1;
    }
  }
  //Yoshis Location
  else if (mouseX < width*0.275 && mouseX > width*0.07 && mouseY < height*0.93 && mouseY > height*0.60){
    image(border,119,725,322,380);
    if (mouseIsPressed){
      state = 1;
      yoshi = 1;
    }
  }
  //Donkey Kongs Location
  else if (mouseX < width*0.492 && mouseX > width*0.29 && mouseY < height*0.93 && mouseY > height*0.60){
    image(border,466,725,322,380);
    if (mouseIsPressed){
      state = 1;
      dk = 1;
    }
  }
  //Warios Location
  else if (mouseX < width*0.709 && mouseX > width*0.51 && mouseY < height*0.93 && mouseY > height*0.60){
    image(border,810,725,322,380);
    if (mouseIsPressed){
      state = 1;
      wario = 1;
    }
  }
  //Bowsers Location
  else if (mouseX < width*0.926 && mouseX > width*0.73 && mouseY < height*0.93 && mouseY > height*0.60){
    image(border,1154,725,322,380);
    if (mouseIsPressed){
      state = 1;
      bowser = 1;
    }
  }
  //If not on a character it keeps the background
  else{
    image(img,0,0,backgroundWidth,backgroundHeight);
  }
}
