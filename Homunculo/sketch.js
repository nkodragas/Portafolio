function setup() {
  createCanvas(500, 500, WEBGL);

  sliderA = createSlider(1, 300, 0, 0.000001);
  sliderB = createSlider(1, 110, 0, 9);
}
let g = 50

function draw() {
  background(60);
  let r = sliderB.value()
  let M = sliderA.value();
  let x = r * cos(r);
  let y = r * sin(r);

  let angle = PI * (x - y);
  //rotate(0);
  for (let a = 0; a < M; a++) {
    translate(0, a * 0.1);
    rotate(angle)

    n = noise(millis() / 2000)
    
    for (let i = 0; i < 9; i++) {
      fill(100 , 250, 100, 50)
      strokeWeight(1)
      rotateX(frameCount *(n /sin(g)/50))
      rotateY(frameCount *(n/ cos(r))/70)
      box(cos(r)*2,g*2,g*2)
      
    if (mouseIsPressed){
      translate(mouseX,mouseY)
      }
    }
  }
}