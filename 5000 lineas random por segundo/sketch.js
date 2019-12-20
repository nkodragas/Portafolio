
let n = 1;
let i = 0;
let edge = 400;

let m=50;
function setup() {

  let str = random(0.5, 1);
createCanvas(windowWidth, windowHeight);
  frameRate(5)
  strokeWeight(str);
  stroke(0,50);

}

function draw() {
lineas()
  
  }


function lineas() {
  background(220);
  
  for(let i = 0; i < 10000; i++){
 
    push();
    
    let posX = random(m, width - m);
    let posY = random(m, height - m);
    
    
  
  
  translate(posX, posY);
    
  rotate(random(TWO_PI));
    line(-20,0,20,0);
    
    pop();
      }
}
  
