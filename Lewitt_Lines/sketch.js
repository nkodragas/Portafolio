let p = [];
let q, i

function setup() {
  createCanvas(600,500);


}

function draw() {
  loop()

 stroke(11);
  strokeWeight(0.1);
 for (var b = 0; b < 10; b++) {
lineas()

}

}
function lineas() {
  
  let q = random(width - 100)
  let m = random(height - 100)
 append(p, [q, m]);
  //
  for (var i = 0; i <= p.length-1; i+=1) {
    line(
    p[p.length-1][0], // x1
    p[p.length-1][1], // y1
    p[i][0], // x2
    p[i][1] // y2
    );
          noLoop()
  }
}

