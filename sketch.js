let ball = [];
let square = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    ball[i] = new Ball();
  }

  for (let i = 0; i < 50; i++) {
    square[i] = new Square();
  }
}

function draw() {

  background(134, 156, 118);
  for (let i = 0; i < 50; i++) {
    ball[i].move();
    ball[i].display();
    ball[i].update();
  }

  for (let i = 0; i < 50; i++) {
    square[i].move();
    square[i].display();
    square[i].update();
  }

}


class Ball {
  constructor() {
    this.x = random(height);
    this.y = random(width);
    this.size = random(30, 100);
    this.speedx = random(-3, 3);
  }

  update() {
    if (this.x < 0 || this.x > windowWidth) {
      this.speedx = this.speedx * -1
    }
  }
  move() {
    this.x += this.speedx


  }
  display() {
    fill(184, 99, 39, 90);
    ellipse(this.x, this.y, this.size);
  }
}

  class Square {
    constructor() {
      this.x = random(height);
      this.y = random(width);
      this.size = random(30, 100);
      this.speedx = random(-3, 3);
    }
  
    update() {
      if (this.x < 0 || this.x > windowWidth) {
        this.speedx = this.speedx * -1
      }
    }
    move() {
      this.x += this.speedx
  
    }
    display() {
      fill(65, 88, 125, 90);
      rect(this.x, this.y, this.size, this.size);
    }

}