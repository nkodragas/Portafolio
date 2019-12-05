function setup() {
  createCanvas(400, 400);
    background( 176, 30, 68)
  img = loadImage('pics/image.png');
}

function draw() {

}
function mousePressed() {

  stamp(mouseX, mouseY)

  }


function stamp(){
let x = 50
let y = 70
o = random(1,50)
      image(img, mouseX-25, mouseY-50, x+o, y+o);



  


  }