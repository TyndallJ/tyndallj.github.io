// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
  fill(255,0,0)
  if (mouseIsPressed && keyCode === 69)
    ellipse(mouseX, mouseY, 30, 30)
  if (mouseIsPressed && keyCode === 82)
    rect(mouseX, mouseY, 30, 30)
  if (keyCode === 87)
	background(255)
  if (keyCode === 66)
    background(0)

}
