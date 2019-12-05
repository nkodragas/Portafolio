let foto;

function preload() {
  foto = loadImage("peaks.jpeg");
}


function setup() {
  createCanvas(foto.width, foto.height);
  rectMode(CENTER);
  noLoop();
}

let sp = 10; // spacer o "espaciador"

function draw() {
  background(0);
  noStroke();
   n = noise(millis() / 1200);
  for (let y = 0; y < height; y += sp+n) {
    for (let x = 0; x < width; x += sp+n) {
      let col = foto.get(x, y);
      miLindoTrazo(x, y, col);
    }
  }
}

function miLindoTrazo(x, y, col){
 let b = brightness(col);
  let r = red(col);
  let g = green(col);
  let bl = blue(col);
  let n =  round(map(b, 0, 255, 40, 0));
  for(let i = 0; i < n; i++){
   let nx = random(-sp+n, sp+n);
    let ny = random(-sp+n, sp+n);
    
    let c = color(r, g, bl);
    fill(c);
  ellipse(x + nx, y + ny, 2, 2);
  triangle(x, nx, y, x, x, 0);
  }
  
}