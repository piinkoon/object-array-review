let x0, y0;
let dy0 = 0;

let x1, y1;
let dy1 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x0 = random(width);
  x1 = random(width);

  y0 = random(50);
  y1 = random(50);
}

function draw() {
  background(200);

  y0 += dy0;
  dy0 += 0.2;
  circle(x0,y0,20);

  y1 += dy1;
  dy1 += 0.2;
  circle(x1,y1,20);

  if (y0 >= height) {
    dy0 = -0.95 * dy0;
  }
  if (y1 >= height) {
    dy1 = -0.95 * dy1;
  }
}
