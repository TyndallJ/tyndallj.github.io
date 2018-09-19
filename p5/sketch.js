let ward;
let scaler;

function preload(){
  ward = loadImage("assets/tpose.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  scaler = 0.5
}

function draw() {
  background(255)
  image(ward, mouseX, mouseY, ward.width * scaler, ward.height * scaler);
}
function mouseWheel(event){
  if (event.delta > 0){
    scaler *= 1.2;
  }
  else {
    scaler *= 0.8;
  }
 console.log(event);

}
