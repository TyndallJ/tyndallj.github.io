// Mario Kart 64 Character Select
// Tyndall Johnston
// Date
// Interactive state state change assignment

// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//If state = 1 then have the player 1 border go over characters
//If mouse is pressed on a character change state = 2 and show a different image of the character




//Variables
let img, border;
let x,y;
let backgroundWidth = 1600;
let backgroundHeight = 1200;
let state = 0;
//every characters own variable = 0
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
    //imagechange of some sort
    //create a variable for each character and let it = 0, and for everyones character when its clicked have it return the variable = 1
    // then here have multiple if/ else if statements that will return different images for each character
    // this should probably be done in its own function
    if (mario === 1){
      background(255);
    }
    else if (luigi === 1){
      background(0);
    }
    else if (peach === 1){
      background(100);
    }
    else if (toad === 1){
      background(150);
    }
    else if (yoshi === 1){
      background(200);
    }
    else if (dk === 1){
      background(100, 0, 0);
    }
    else if (wario === 1){
      background(150, 0, 0);
    }
    else if (bowser === 1){
      background(200, 0, 0);
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
