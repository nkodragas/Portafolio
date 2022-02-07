var x = 350;
let accm;

function preload() {
  accm = loadImage("images/ACCM-3.png");
}

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  clear()

  image(accm, 0, x, 1920, 1080);

  x = x + -5
  if (x < 0) {
    noLoop();
  }
}