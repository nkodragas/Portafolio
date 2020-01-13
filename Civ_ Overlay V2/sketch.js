<script>var x = -600;
var fadeSpeed = 1.6;
let sel;
let fps
let aztecas, bereberes, indios, incas, ingleses, italianos, japoneses, jemeres, lituanos, magiares, malies, malayos, coreanos, bulgaros, birmanos, bizantnos, celtas, chinos, cumanos, eslavos, españoles, etiopes, francos, godos, hunos, mayas, mongoles, persas, portugueses, sarracenos, tartaros, teutones, turcos, vietnamitas, vikingos;

function preload() {
  aztecas = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/4e57d39a-973c-45bd-bd48-928a88fe65e3.png");
  bereberes = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/30f06c1d-e02c-4882-9a16-f730071f23d5.png");
  indios = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/46b9829f-41a8-46d9-a54a-f4f2d34608cc.png");
  incas = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/f9f07c08-6586-46ce-8105-fa2d5183d58c.png");
  ingleses = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/c717f65d-7e58-4ed2-8179-ede9ee7309af.png");
  italianos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/9dac41b9-965a-4f92-aff3-339930df8c0b.png");
  japoneses = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/7198e4e1-db98-442f-b143-37ae1d3a1b73.png");
  jemeres = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/c505bdc2-5a89-407e-964f-c0c571b1fbe7.png");
  lituanos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/2b5b0b68-5b28-44d3-bd0d-7d8abe6af4f8.png");
  magiares = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/c65d6629-9a85-48f3-a7c6-a8c2039369fa.png");
  malies = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/de2465a3-38d8-4362-8996-278dca636d06.png");
  malayos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/f06cfbca-ba01-47e2-ba98-8bcc41ca2998.png");
  coreanos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/ab4abe08-8c76-4ae0-9286-968939cb0125.png");
  bulgaros = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/19a6ce66-3dd5-4dcd-923b-f26785fe27ef.png");
  birmanos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/385a63e6-7e49-4d47-82ad-8b737f7505da.png");
  bizantinos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/921cbeef-1c1b-4214-aa01-85af40b24680.png");
  celtas = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/b7f8b8a1-5939-45e0-9c8b-e9206eb2fcfa.png");
  chinos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/669b0733-2853-4145-a2cf-ef6bfe48ef30.png");
  cumanos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/4a0deac8-ba60-4a03-9570-bb632853ec45.png");
  eslavos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/df71c5a1-dcdf-4a82-b23e-5b77237c7cc2.png");
  españoles = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/d32f29c9-6eb0-41ae-94b5-4cb446de4693.png");
  etiopes = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/633c0b14-9e9a-41b0-bb07-c9ab2f32587f.png");
  francos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/64dabe41-efa8-46b4-9e92-0c431e2db7e1.png");
  godos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/10cbde9a-53f2-4516-a367-93064c45b63b.png");
  hunos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/9da60744-d9d0-47c6-9d65-058cbc33ba66.png");
  mayas = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/7efe97f3-6ffb-45fc-a8c9-624546e97071.png");
  mongoles = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/e6c82a61-5c28-4ba2-859d-94132cadbde9.png");
  persas = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/1631fabc-8f4b-426c-93a7-9e470a92670a.png");
  portugueses = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/077a5051-a659-4961-9f95-929bac7fc699.png");
  sarracenos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/4529361c-611c-4a12-87f0-f2681ab23424.png");
  tartaros = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/d803188c-af4f-4205-a1ad-bb0232ac59e1.png");
  teutones = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/fa12c0d0-c2cb-4ff7-b609-f8783d045a57.png");
  turcos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/67dc34e4-6711-4f27-89e0-783164d0a268.png");
  vietnamitas = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/e18d3f9a-494f-4d8d-b40b-376417be02b6.png");
  vikingos = loadImage("https://assets.editor.p5js.org/5d6470bf0056f3001e6e4d2b/dbdb57e2-8d0d-4ebe-ac26-92cdaa3ad719.png");


}

function setup() {
  // let inp = createInput('');
  // inp.input(myInputEvent);
  frameRate(59)
  createCanvas(460, 500);
  rect(1, 1, 1, 1)
  textAlign(CENTER);
 // background(255, 0, 255);
  sel = createSelect();
  sel.position(2, 2);
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

  x = -500

}

function keyPressed() {
  salida()
}

function draw() {
  clear();
  //background(255, 0, 255);
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

}</script>
