// Bouncing Ball
// Tyndall Johnston
// October 22nd

let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {
    x: width/2,
    y: height/2,
    radius: 25,
    dx: random(-5, 5),
    dy: random(-5,5),
  };
}

function draw() {
  background(255);
  ball.x += ball.dx;
  ball.y += ball.dy;
  if (ball.x > width - ball.radius || ball.x < 0 + ball.radius){
    ball.dx *= -1;
  }
  if (ball.y > height - ball.radius || ball.y < 0 + ball.radius){
    ball.dy *= -1;
  }

  fill(0);
  ellipse(ball.x,ball.y,ball.radius*2,ball.radius*2);
}
