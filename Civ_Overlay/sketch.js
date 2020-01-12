let sel;
let aztecas;
let bereberes;

function preload() {
  aztecas = loadImage("Aztecas.png");
  bereberes = loadImage("Bereberes.png");
}

function setup() {

  createCanvas(500, 600);
  textAlign(CENTER);
  background(0,255,0);
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
  sel.option('Vinkingos');


  sel.changed(mySelectEvent);
}


function mySelectEvent() {
  background(0,255,0);

  let item = sel.value();


  switch (item) {
    case 'Seleccionar':
    break;  
    case 'Aztecas':
    image(aztecas, -23,100,420,468);
    break;  
    case 'Bereberes':
    image(bereberes, -23,100,420,468);
    break;


      
}
    

}
