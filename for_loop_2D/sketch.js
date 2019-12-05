function setup() {
  createCanvas(400, 400);
  slider = createSlider (0, 40, 0.01,1);
}



function draw() {
  var val = slider.value()
  background(255);

  
  let numX = 10;
  let numY = 10;
  
  let m = 40;
  let spx = (width - 2*m)/(numX - 1);
  let spy = (height - 2*m)/(numY - 1);
  
  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {
      ellipse(m + x*spx, m + y*spy, val, val);
      fill (val,230)
      
    }
  }
}