var a = 0;
var b = 0;
var angulo = 0.0;
function setup() {
  createCanvas(500, 500);
  background(190,10,0)
}


function draw() {
  rotate(angulo);
  translate(a+=0.4, angulo+=0.2);
  line (200, 60, b+=0.01,6);
}
