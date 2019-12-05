function setup() {
  createCanvas(700, 500);
  cursor(CROSS);
}

function draw() {
  background(0);


  let numX = 40
  let numY = 30
  let m = 5

  let spx = (width - 2 * m) / (numX - 1);
  let spy = (height - 2 * m) / (numY - 1);

  let y = 10
  let x = 10
  
  let rojo = 600 - mouseX
  let verde = 0 + mouseX
  
  for (let y=0 ; y < numY; y++) {
    for (let x=0 ; x < numX; x++) {

      randomColor = color(random(rojo), random(verde), random(250));
      
      let d = dist(mouseX, mouseY, m + x * spx, m + y * spy);
      let r = map(d, 0, width, spx, 0);
      let radio = r+2
      
      if (radio > 20){
        radio = 0
      }

      push();
      translate(m + x * spx, m + y * spy);
      fill(randomColor);
      noStroke();
      ellipse(20, 20, radio, radio);
      pop();
    }
  }
}