function setup() {
  createCanvas(700, 400);
  sliderY = createSlider(1, 9, 0, 0.5);
  let y = sliderY.value()
  sliderA = createSlider(1, 300, 0, 0.000001);
  sliderB = createSlider(1, 110, 0, y);
  sliderC = createSlider(1, 255, 65, 5);
}

function draw() {
  let r = sliderB.value()
  let opacity = sliderC.value()
  let M = sliderA.value();
  let x = r * cos(r);
  let y = r * sin(r);
  background(0);
  fill(255, opacity);
  strokeWeight(opacity/10000)
  translate(width / 2, height / 2)
  let angle = PI * (x - y);
  rotate(0);
 for (let a = 0; a < M; a++) {
    translate(0, a * 0.1);
    rotate(angle)
    triangle(M, 0, 0, a, a, 0);
  }
}