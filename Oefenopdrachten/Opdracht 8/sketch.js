function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  TekenHuis(20, 280);
  TekenHuis(180, 280);
  TekenHuis(340, 280);
  TekenHuis(500, 280);
  TekenHuis(660, 280);


}

function TekenHuis(x, y) {
  fill(255, 233, 201);
  rect(x, y, 120, 120);
fill(204, 84, 59);
  triangle(x, y, x + 120, y, x + 60, y - 80);
fill(199, 249, 255);
  rect(x + 75, y + 30, 40, 40);
fill(163, 115, 83);
  rect(x + 30, y + 70, 30, 50);
}