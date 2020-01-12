var fade = 0;
var fadeSpeed = 1.6;
let sel;
let aztecas, bereberes, indios, incas, ingleses, italianos, japoneses, jemeres, lituanos, magiares, malies, malayos;

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

}

function setup() {

  createCanvas(460, 500);
  rect(1,1,1,1)
  textAlign(CENTER);
  background(255,0,255);
  sel = createSelect();
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


  sel.changed(mySelectEvent);
}


function mySelectEvent() {
  background(255,0,255);

  let item = sel.value();


  switch (item) {
    case 'Seleccionar':
    break;  
    case 'Aztecas':
    image(aztecas, -23,20,420,468);
    break;  
    case 'Bereberes':
    image(bereberes, -23,20,420,468);
    break;
    case 'Indios':
    image(indios, -23,20,420,468);
    break;
    case 'Incas':
    image(incas, -23,20,420,468);
    break;
    case 'Ingleses':
    image(ingleses, -23,20,420,468);
    break;
    case 'Italianos':
    image(italianos, -23,20,420,468);
    break;
    case 'Japoneses':
    image(japoneses, -23,20,420,468);
    break;
    case 'Jemeres':
    image(jemeres, -23,20,420,468);
    break;
    case 'Lituanos':
    image(lituanos, -23,20,420,468);
    break;
    case 'Magiares':
    image(magiares, -23,20,420,468);
    break;
    case 'Malíes':
    image(malies, -23,20,420,468);
    break;
    case 'Malayos':
    image(malayos, -23,20,420,468);
    break;
      
}
    

}
