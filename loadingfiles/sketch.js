// 2048
//Tyndall J
// Oct 29, 2018

let rows = 4;
let cols = 4;
let grid;
let cellSize;

function setup() {
  createCanvas(600, 600);
  cellSize = width / cols - 1;
  grid = (cols, rows);
}

function draw() {
  background(255);
  displayGrid();

}
function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(255);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
