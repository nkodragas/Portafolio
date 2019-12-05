function setup() {
  createCanvas(windowWidth, 1800);
  eye = loadImage("images/eye.png");

}





function draw() {
  background(0);


  let eyes = 224
  let numX = (8);
  let numY = (28);

  let m = 80;
  let spx = (width - 1 * m) / (numX + 1);
  let spy = (height - 1 * m) / (numY + 1);

  //rect(mouseX-102, mouseY-24, 255, 48)
  //textSize(27)
  //text('224 OJOS CIEGOS', mouseX, mouseY);
  
  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {
      push();
      translate(m + x * spx, m + y * spy)
      image(eye, 0, 0, 50, 50)

      pop();


 
    }
  }
}

