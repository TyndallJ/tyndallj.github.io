// Mario Kart 64 Character Select
// Tyndall Johnston
// Date
// Interactive state state change assignment

// Extra for Experts:
// Made state changes for every character, made my own plyer 1 border

//ADD SOUND TO PROJECT
//ADD SOUND TO PROJECT
//ADD SOUND TO PROJECT
//ADD SOUND TO PROJECT
//ADD SOUND TO PROJECT
//ADD SOUND TO PROJECT
//ADD SOUND TO PROJECT
//ADD SOUND TO PROJECT

//Variables
//image variables
let img, border;
let marioimg, luigiimg, peachimg, toadimg;
let yoshiimg, dkimg, warioimg, bowserimg;
let mariobackimg, luigibackimg, peachbackimg, toadbackimg;
let yoshibackimg, dkbackimg, wariobackimg, bowserbackimg;
//canvas size
let backgroundWidth = 1600;
let backgroundHeight = 1200;
//state & character state change variables
let state = 0;let mario = 0;
let luigi = 0;
let peach = 0;
let toad = 0;
let yoshi = 0;
let dk = 0;
let wario = 0;
let bowser = 0;
///////////////////////////////////////////////////////////////////////////////

//Loading images
function preload() {
  img = loadImage("assets/selectcharacter.png");
  border = loadImage("assets/characterborder.png");
  marioimg = loadImage("assets/marioimg.png");
  mariobackimg = loadImage("assets/mariobackimg.png");
  luigiimg = loadImage("assets/luigiimg.png");
  luigibackimg = loadImage("assets/luigibackimg.png");
  peachimg = loadImage("assets/peachimg.png");
  peachbackimg = loadImage("assets/peachbackimg.png");
  toadimg = loadImage("assets/toadimg.png");
  toadbackimg = loadImage("assets/toadbackimg.png");
  yoshiimg = loadImage("assets/yoshiimg.png");
  yoshibackimg = loadImage("assets/yoshibackimg.png");
  dkimg = loadImage("assets/dkimg.png");
  dkbackimg = loadImage("assets/dkbackimg.png");
  warioimg = loadImage("assets/warioimg.png");
  wariobackimg = loadImage("assets/wariobackimg.png");
  bowserimg = loadImage("assets/bowserimg.png");
  bowserbackimg = loadImage("assets/bowserbackimg.png");
}
///////////////////////////////////////////////////////////////////////////////

//Setting the screen size
function setup() {
  createCanvas(backgroundWidth, backgroundHeight);
}
///////////////////////////////////////////////////////////////////////////////

//My state changes
function draw() {
  if (state === 0){
    findCharacter();
  }
  else if (state === 1){
    readyScreen();
  }
  else if (state === 2){
    backButton();
  }
}
///////////////////////////////////////////////////////////////////////////////

//Loaction of Characters
function findCharacter(){
  image(img, 0, 0, backgroundWidth, backgroundHeight);
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

///////////////////////////////////////////////////////////////////////////////

//Character picked next Menu
function readyScreen(){
  if (mario === 1){
    image(marioimg, 0, 0, backgroundWidth, backgroundHeight);
    if (mouseX < width*0.921 && mouseX > width*0.82 && mouseY < height*0.922 && mouseY > height*0.84){
      if (mouseIsPressed){
        state = 2;
        mario = 2;
      }
    }
  }
  else if (luigi === 1){
    image(luigiimg, 0, 0, backgroundWidth, backgroundHeight);
    if (mouseX < width*0.921 && mouseX > width*0.82 && mouseY < height*0.922 && mouseY > height*0.84){
      if (mouseIsPressed){
        state = 2;
        luigi = 2;
      }
    }
  }
  else if (peach === 1){
    image(peachimg, 0, 0, backgroundWidth, backgroundHeight);
    if (mouseX < width*0.921 && mouseX > width*0.82 && mouseY < height*0.922 && mouseY > height*0.84){
      if (mouseIsPressed){
        state = 2;
        peach = 2;
      }
    }
  }
  else if (toad === 1){
    image(toadimg, 0, 0, backgroundWidth, backgroundHeight);
    if (mouseX < width*0.921 && mouseX > width*0.82 && mouseY < height*0.922 && mouseY > height*0.84){
      if (mouseIsPressed){
        state = 2;
        toad = 2;
      }
    }
  }
  else if (yoshi === 1){
    image(yoshiimg, 0, 0, backgroundWidth, backgroundHeight);
    if (mouseX < width*0.921 && mouseX > width*0.82 && mouseY < height*0.922 && mouseY > height*0.84){
      if (mouseIsPressed){
        state = 2;
        yoshi = 2;
      }
    }
  }
  else if (dk === 1){
    image(dkimg, 0, 0, backgroundWidth, backgroundHeight);
    if (mouseX < width*0.921 && mouseX > width*0.82 && mouseY < height*0.922 && mouseY > height*0.84){
      if (mouseIsPressed){
        state = 2;
        dk = 2;
      }
    }
  }
  else if (wario === 1){
    image(warioimg, 0, 0, backgroundWidth, backgroundHeight);
    if (mouseX < width*0.921 && mouseX > width*0.82 && mouseY < height*0.922 && mouseY > height*0.84){
      if (mouseIsPressed){
        state = 2;
        wario = 2;
      }
    }
  }
  else if (bowser === 1){
    image(bowserimg, 0, 0, backgroundWidth, backgroundHeight);
    if (mouseX < width*0.921 && mouseX > width*0.82 && mouseY < height*0.922 && mouseY > height*0.84){
      if (mouseIsPressed){
        state = 2;
        bowser = 2;
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

//A back button
function backButton(){
  if (mario === 2){
    image(mariobackimg,0,0,backgroundWidth,backgroundHeight);
    if (mouseX < width*0.63 && mouseX > width*0.37 && mouseY < height*0.995 && mouseY > height*0.93){
      if (mouseIsPressed){
        state = 0;
        mario = 0;
      }
    }
  }
  else if (luigi === 2){
    image(luigibackimg,0,0,backgroundWidth,backgroundHeight);
    if (mouseX < width*0.63 && mouseX > width*0.37 && mouseY < height*0.995 && mouseY > height*0.93){
      if (mouseIsPressed){
        state = 0;
        luigi = 0;
      }
    }
  }
  else if (peach === 2){
    image(peachbackimg,0,0,backgroundWidth,backgroundHeight);
    if (mouseX < width*0.63 && mouseX > width*0.37 && mouseY < height*0.995 && mouseY > height*0.93){
      if (mouseIsPressed){
        state = 0;
        peach = 0;
      }
    }
  }
  else if (toad === 2){
    image(toadbackimg,0,0,backgroundWidth,backgroundHeight);
    if (mouseX < width*0.63 && mouseX > width*0.37 && mouseY < height*0.995 && mouseY > height*0.93){
      if (mouseIsPressed){
        state = 0;
        toad = 0;
      }
    }
  }
  else if (yoshi === 2){
    image(yoshibackimg,0,0,backgroundWidth,backgroundHeight);
    if (mouseX < width*0.63 && mouseX > width*0.37 && mouseY < height*0.995 && mouseY > height*0.93){
      if (mouseIsPressed){
        state = 0;
        yoshi = 0;
      }
    }
  }
  else if (dk === 2){
    image(dkbackimg,0,0,backgroundWidth,backgroundHeight);
    if (mouseX < width*0.63 && mouseX > width*0.37 && mouseY < height*0.995 && mouseY > height*0.93){
      if (mouseIsPressed){
        state = 0;
        dk = 0;
      }
    }
  }
  else if (wario === 2){
    image(wariobackimg,0,0,backgroundWidth,backgroundHeight);
    if (mouseX < width*0.63 && mouseX > width*0.37 && mouseY < height*0.995 && mouseY > height*0.93){
      if (mouseIsPressed){
        state = 0;
        wario = 0;
      }
    }
  }
  else if (bowser === 2){
    image(bowserbackimg,0,0,backgroundWidth,backgroundHeight);
    if (mouseX < width*0.63 && mouseX > width*0.37 && mouseY < height*0.995 && mouseY > height*0.93){
      if (mouseIsPressed){
        state = 0;
        bowser = 0;
      }
    }
  }
}
