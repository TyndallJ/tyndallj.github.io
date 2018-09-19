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
  changecolor()
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
function changecolor(){
  background(random(1,255), random(1,255), random(1,255))
}
