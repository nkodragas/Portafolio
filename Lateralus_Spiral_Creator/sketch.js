function setup() {
  createCanvas(700, 400);

  sliderA = createSlider(1, 210, 0, 0.000001);
  sliderB = createSlider(1, 100, 0, 10);
  sliderC = createSlider(1, 255, 65, 10);
}

function draw() {
  let r = sliderB.value()
  let opacity = sliderC.value()
  a = noise(millis() / 1200);
  let M = sliderA.value();
  let x = r * cos(r);
  let y = r * sin(r);
  background(0);
  fill(255, opacity);
  strokeWeight(opacity/1000)
  translate(width / 2, height / 2)
  let angle = PI * (x - y);
  rotate(0);
  for (var a = 0; a < M; a++) {
    translate(0, a * 0.1);
    rotate(angle)
    triangle(M, 0, 0, a, a, 0);
  }
}