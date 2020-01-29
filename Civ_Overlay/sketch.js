var x = -600;
var fadeSpeed = 1.6;
let sel;
let fps
let aztecas, bereberes, indios, incas, ingleses, italianos, japoneses, jemeres, lituanos, magiares, malies, malayos, coreanos, bulgaros, birmanos, bizantnos, celtas, chinos, cumanos, eslavos, españoles, etiopes, francos, godos, hunos, mayas, mongoles, persas, portugueses, sarracenos, tartaros, teutones, turcos, vietnamitas, vikingos;

function preload() {
  aztecas = loadImage("Aztecas.png");
  bereberes = loadImage("Bereberes.png");
  indios = loadImage("Indios.png");
  incas = loadImage("Incas.png");
  ingleses = loadImage("Ingleses.png");
  italianos = loadImage("Italianos.png");
  japoneses = loadImage("Japoneses.png");
  jemeres = loadImage("Jemeres.png");
  lituanos = loadImage("Lituanos.png");
  magiares = loadImage("Magiares.png");
  malies = loadImage("Malíes.png");
  malayos = loadImage("Malayos.png");
  coreanos = loadImage("Coreanos.png");
  bulgaros = loadImage("Bulgaros.png");
  birmanos = loadImage("Birmanos.png");
  bizantinos = loadImage("Bizantinos.png");
  celtas = loadImage("Celtas.png");
  chinos = loadImage("Chinos.png");
  cumanos = loadImage("Cumanos.png");
  eslavos = loadImage("Eslavos.png");
  españoles = loadImage("Españoles.png");
  etiopes = loadImage("Etiopes.png");
  francos = loadImage("Francos.png");
  godos = loadImage("Godos.png");
  hunos = loadImage("Hunos.png");
  mayas = loadImage("Mayas.png");
  mongoles = loadImage("Mongoles.png");
  persas = loadImage("Persas.png");
  portugueses = loadImage("Portugueses.png");
  sarracenos = loadImage("Sarracenos.png");
  tartaros = loadImage("Tartaros.png");
  teutones = loadImage("Teutones.png");
  turcos = loadImage("Turcos.png");
  vietnamitas = loadImage("Vietnamitas.png");
  vikingos = loadImage("Vikingos.png");


}

function setup() {
  // let inp = createInput('');
  // inp.input(myInputEvent);
  frameRate(59)
  createCanvas(460, 500);
  rect(1, 1, 1, 1)
  textAlign(CENTER);
  background(255, 0, 255);
  sel = createSelect();
  sel.position(0, 1);
  sel.option('Seleccionar');
  sel.mouseOver(salida)



  sel.changed(mySelectEvent);


}

function salida() {
rect(1, 1, 1, 1)
  textAlign(CENTER);
  //background(255, 0, 255);
  sel = createSelect();
  // sel.mouseOver(salida)
  sel.position(0, 0);
  sel.option('Seleccionar');
  sel.option('Aztecas');
  sel.option('Bereberes');
  sel.option('Birmanos');
  sel.option('Bizantinos');
  sel.option('Búlgaros');
  sel.option('Celtas');
  sel.option('Chinos');
  sel.option('Coreanos');
  sel.option('Cumanos');
  sel.option('Eslavos');
  sel.option('Españoles');
  sel.option('Etíopes');
  sel.option('Francos');
  sel.option('Godos');
  sel.option('Hunos');
  sel.option('Incas');
  sel.option('Indios');
  sel.option('Ingleses');
  sel.option('Italianos');
  sel.option('Japoneses');
  sel.option('Jemeres');
  sel.option('Lituanos');
  sel.option('Magiares');
  sel.option('Malayos');
  sel.option('Malíes');
  sel.option('Mayas');
  sel.option('Mongoles');
  sel.option('Persas');
  sel.option('Portugueses');
  sel.option('Sarracenos');
  sel.option('Tártaros');
  sel.option('Teutones');
  sel.option('Turcos');
  sel.option('Vietnamitas');
  sel.option('Vikingos');

}


function mouseClicked() {
  x = -600
}



function draw() {
clear()
 // background(255, 0, 255);
  mySelectEvent()
  x = x + 4
  if (x > -23) {
    x = -23
  }

}

function mySelectEvent() {

  let item = sel.value();


  switch (item) {
    case 'Seleccionar':
      break;
    case 'Aztecas':
      image(aztecas, x, 21, 420, 468);
      break;
    case 'Bereberes':
      image(bereberes, x, 20, 420, 468);
      break;
    case 'Indios':
      image(indios, x, 20, 420, 468);
      break;
    case 'Incas':
      image(incas, x, 20, 420, 468);
      break;
    case 'Ingleses':
      image(ingleses, x, 20, 420, 468);
      break;
    case 'Italianos':
      image(italianos, x, 20, 420, 468);
      break;
    case 'Japoneses':
      image(japoneses, x, 20, 420, 468);
      break;
    case 'Jemeres':
      image(jemeres, x, 20, 420, 468);
      break;
    case 'Lituanos':
      image(lituanos, x, 20, 420, 468);
      break;
    case 'Magiares':
      image(magiares, x, 20, 420, 468);
      break;
    case 'Malíes':
      image(malies, x, 20, 420, 468);
      break;
    case 'Malayos':
      image(malayos, x, 20, 420, 468);
      break;
    case 'Coreanos':
      image(coreanos, x, 20, 420, 468);
      break;
    case 'Búlgaros':
      image(bulgaros, x, 20, 420, 468);
      break;
    case 'Birmanos':
      image(birmanos, x, 20, 420, 468);
      break;
    case 'Bizantinos':
      image(bizantinos, x, 20, 420, 468);
      break;
    case 'Celtas':
      image(celtas, x, 20, 420, 468);
      break;
    case 'Chinos':
      image(chinos, x, 20, 420, 468);
      break;
    case 'Cumanos':
      image(cumanos, x, 20, 420, 468);
      break;
    case 'Eslavos':
      image(eslavos, x, 20, 420, 468);
      break;
    case 'Españoles':
      image(españoles, x, 20, 420, 468);
      break;
    case 'Etíopes':
      image(etiopes, x, 20, 420, 468);
      break;
    case 'Francos':
      image(francos, x, 20, 420, 468);
      break;
    case 'Godos':
      image(godos, x, 20, 420, 468);
      break;
    case 'Hunos':
      image(hunos, x, 20, 420, 468);
      break;
    case 'Mayas':
      image(mayas, x, 20, 420, 468);
      break;
    case 'Mongoles':
      image(mongoles, x, 20, 420, 468);
      break;
    case 'Persas':
      image(persas, x, 20, 420, 468);
      break;
    case 'Portugueses':
      image(portugueses, x, 20, 420, 468);
      break;
    case 'Sarracenos':
      image(sarracenos, x, 20, 420, 468);
      break;
    case 'Tartaros':
      image(tartaros, x, 20, 420, 468);
      break;
    case 'Teutones':
      image(teutones, x, 20, 420, 468);
      break;
    case 'Turcos':
      image(turcos, x, 20, 420, 468);
      break;
    case 'Vietnamitas':
      image(vietnamitas, x, 20, 420, 468);
      break;
    case 'Vikingos':
      image(vikingos, x, 20, 420, 468);
      break;



  }

}
