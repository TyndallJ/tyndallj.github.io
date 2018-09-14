// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("assets/yeet.png");  // Load the image
}
function draw() {
  image(img, mouseX-img.width/2, mouseY-img.height/2);
}
