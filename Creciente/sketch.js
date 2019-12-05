function setup() {
  createCanvas(400, 400);
}
let x = 25
let b = 10
let c = 10

function draw() {
  background(220);
  ellipse(x, 200, b, c);
  if (x < 400)
    (x += 15, b += 3, c += 3);

  else
    x -= 400;
  if (c > 400)
    (c = 10, b = 10);
}