var x = -600;
var fadeSpeed = 1.6;
let sel;
let fps
let aztecas, bereberes, indios, incas, ingleses, italianos, japoneses, jemeres, lituanos, magiares, malies, malayos, coreanos, bulgaros, birmanos, bizantnos, celtas, chinos, cumanos, eslavos, españoles, etiopes, francos, godos, hunos, mayas, mongoles, persas, portugueses, sarracenos, tartaros, teutones, turcos, vietnamitas, vikingos, nicov;

function preload() {
  aztecas = loadImage("Aztecs.gif");
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
  sound1 = loadSound('Aztecs.ogg');
  sound2 = loadSound('Berbers.ogg');
  sound3 = loadSound('Britons.ogg');
  sound4 = loadSound('Bulgarians.ogg');
  sound5 = loadSound('Burmese.ogg');
  sound6 = loadSound('Byzantines.ogg');
  sound7 = loadSound('Celts.ogg');
  sound8 = loadSound('Chinese.ogg');
  sound9 = loadSound('Cumans.ogg');
  sound10 = loadSound('Ethiopians.ogg');
  sound11 = loadSound('Franks.ogg');
  sound12 = loadSound('Goths.ogg');
  sound13 = loadSound('Huns.ogg');
  sound14 = loadSound('Incas.ogg');
  sound15 = loadSound('Indians.ogg');
  sound16 = loadSound('Italians.ogg');
  sound17 = loadSound('Japanese.ogg');
  sound18 = loadSound('Khmer.ogg');
  sound19 = loadSound('Lithuanians.ogg');
  sound35 = loadSound('Magyars.ogg');
  sound20 = loadSound('Malay.ogg');
  sound21 = loadSound('Malians.ogg');
  sound22 = loadSound('Mayans.ogg');
  sound23 = loadSound('Mongols.ogg');
  sound24 = loadSound('Persians.ogg');
  sound25 = loadSound('Portuguese.ogg');
  sound26 = loadSound('Saracens.ogg');
  sound27 = loadSound('Slavs.ogg');
  sound28 = loadSound('Spanish.ogg');
  sound29 = loadSound('Tatars.ogg');
  sound30 = loadSound('Teutons.ogg');
  sound31 = loadSound('Turks.ogg');
  sound32 = loadSound('Vietnamese.ogg');
  sound33 = loadSound('Vikings.ogg');
  sound34= loadSound('Koreans.ogg');
  




}

function setup() {

  frameRate(59)
  createCanvas(460, 500);
  rect(1, 1, 1, 1)
  textAlign(CENTER);
  radio = createRadio();
  radio.option('Hide');
  radio.option('Aztecs');
  radio.option('Berbers');
  radio.option('Britons');
  radio.option('Burmese');
  radio.option('Byzantines');
  radio.option('Bulgarians');
  radio.option('Celts');
  radio.option('Chinese');
  radio.option('Cumans');
  radio.option('Ethiopians');
  radio.option('Franks');
  radio.option('Goths');
  radio.option('Huns');
  radio.option('Incas');
  radio.option('Indians');
  radio.option('Italians');
  radio.option('Japanese');
  radio.option('Koreans');
  radio.option('Khmer');
  radio.option('Lithuanians');
  radio.option('Magyars');
  radio.option('Malay');
  radio.option('Malians');
  radio.option('Mayans');
  radio.option('Mongols');
  radio.option('Persians');
  radio.option('Portuguese');
  radio.option('Saracens');
  radio.option('Slavs');
  radio.option('Spanish');
  radio.option('Tatars');
  radio.option('Teutons');
  radio.option('Turks');
  radio.option('Vietnamise');
  radio.option('Vikings');
  radio.style('width/2', 'width/2');

  clear()

}

function salida() {
  rect(1, 1, 1, 1)
  textAlign(CENTER);

}


function mouseClicked() {

  x = -500

}

function keyPressed() {
  salida()
}


function draw() {

  clear();

  x = x + 4
  if (x > -23) {
    x = -23
  }


  let item = radio.value();


  switch (item) {
    case 'Hide':
      break;
    case 'Aztecs':
      if (sound1.isPlaying() == false) {
        sound1.play();
        sound1.setVolume(0, 3, 3)
      }
      image(aztecas, x, 21, 420, 468);
      break;
    case 'Berbers':
      if (sound2.isPlaying() == false) {
        sound2.play();
        sound2.setVolume(0, 3, 3)
      }
      image(bereberes, x, 20, 420, 468);
      break;
    case 'Indians':
      if (sound15.isPlaying() == false) {
        sound15.play();
        sound15.setVolume(0, 3, 3)
      }
      image(indios, x, 20, 420, 468);
      break;
    case 'Incas':
      if (sound14.isPlaying() == false) {
        sound14.play();
        sound14.setVolume(0, 3, 3)
      }
      image(incas, x, 20, 420, 468);
      break;
    case 'Britons':
      if (sound3.isPlaying() == false) {
        sound3.play();
        sound3.setVolume(0, 3, 3)
      }
      image(ingleses, x, 20, 420, 468);
      break;
    case 'Italians':
      if (sound16.isPlaying() == false) {
        sound16.play();
        sound16.setVolume(0, 3, 3)
      }
      image(italianos, x, 20, 420, 468);
      break;
    case 'Japanese':
      if (sound17.isPlaying() == false) {
        sound17.play();
        sound17.setVolume(0, 3, 3)
      }
      image(japoneses, x, 20, 420, 468);
      break;
    case 'Khmer':
      if (sound18.isPlaying() == false) {
        sound18.play();
        sound18.setVolume(0, 3, 3)
      }
      image(jemeres, x, 20, 420, 468);
      break;
    case 'Lithuanians':
      if (sound19.isPlaying() == false) {
        sound19.play();
        sound19.setVolume(0, 3, 3)
      }
      image(lituanos, x, 20, 420, 468);
      break;
    case 'Magyars':
      if (sound35.isPlaying() == false) {
        sound35.play();
        sound35.setVolume(0, 3, 3)
      }
      image(magiares, x, 20, 420, 468);
      break;
    case 'Malians':
      if (sound21.isPlaying() == false) {
        sound21.play();
        sound21.setVolume(0, 3, 3)
      }
      image(malies, x, 20, 420, 468);
      break;
    case 'Malay':
      if (sound20.isPlaying() == false) {
        sound20.play();
        sound20.setVolume(0, 3, 3)
      }
      image(malayos, x, 20, 420, 468);
      break;
    case 'Koreans':
      if (sound34.isPlaying() == false) {
        sound34.play();
        sound34.setVolume(0, 3, 3)
      }
      image(coreanos, x, 20, 420, 468);
      break;
    case 'Bulgarians':
      if (sound4.isPlaying() == false) {
        sound4.play();
        sound4.setVolume(0, 3, 3)
      }
      image(bulgaros, x, 20, 420, 468);
      break;
    case 'Burmese':
      if (sound5.isPlaying() == false) {
        sound5.play();
        sound5.setVolume(0, 3, 3)
      }
      image(birmanos, x, 20, 420, 468);
      break;
    case 'Byzantines':
      if (sound6.isPlaying() == false) {
        sound6.play();
        sound6.setVolume(0, 3, 3)
      }
      image(bizantinos, x, 20, 420, 468);
      break;
    case 'Celts':
      if (sound7.isPlaying() == false) {
        sound7.play();
        sound7.setVolume(0, 3, 3)
      }
      image(celtas, x, 20, 420, 468);
      break;
    case 'Chinese':
      if (sound8.isPlaying() == false) {
        sound8.play();
        sound8.setVolume(0, 3, 3)
      }
      image(chinos, x, 20, 420, 468);
      break;
    case 'Cumans':
      if (sound9.isPlaying() == false) {
        sound9.play();
        sound9.setVolume(0, 3, 3)
      }
      image(cumanos, x, 20, 420, 468);
      break;
    case 'Slavs':
      if (sound27.isPlaying() == false) {
        sound27.play();
        sound27.setVolume(0, 3, 3)
      }
      image(eslavos, x, 20, 420, 468);
      break;
    case 'Spanish':
      if (sound28.isPlaying() == false) {
        sound28.play();
        sound28.setVolume(0, 3, 3)
      }
      image(españoles, x, 20, 420, 468);
      break;
    case 'Ethiopians':
      if (sound10.isPlaying() == false) {
        sound10.play();
        sound10.setVolume(0, 3, 3)
      }
      image(etiopes, x, 20, 420, 468);
      break;
    case 'Franks':
      if (sound11.isPlaying() == false) {
        sound11.play();
        sound11.setVolume(0, 3, 3)
      }
      image(francos, x, 20, 420, 468);
      break;
    case 'Goths':
      if (sound12.isPlaying() == false) {
        sound12.play();
        sound12.setVolume(0, 3, 3)
      }
      image(godos, x, 20, 420, 468);
      break;
    case 'Huns':
      if (sound13.isPlaying() == false) {
        sound13.play();
        sound13.setVolume(0, 3, 3)
      }
      image(hunos, x, 20, 420, 468);
      break;
    case 'Mayans':
      if (sound22.isPlaying() == false) {
        sound22.play();
        sound22.setVolume(0, 3, 3)
      }
      image(mayas, x, 20, 420, 468);
      break;
    case 'Mongols':
      if (sound23.isPlaying() == false) {
        sound23.play();
        sound23.setVolume(0, 3, 3)
      }
      image(mongoles, x, 20, 420, 468);
      break;
    case 'Persians':
      if (sound24.isPlaying() == false) {
        sound24.play();
        sound24.setVolume(0, 3, 3)
      }
      image(persas, x, 20, 420, 468);
      break;
    case 'Portuguese':
      if (sound25.isPlaying() == false) {
        sound25.play();
        sound25.setVolume(0, 3, 3)
      }
      image(portugueses, x, 20, 420, 468);
      break;
    case 'Saracens':
      if (sound26.isPlaying() == false) {
        sound26.play();
        sound26.setVolume(0, 3, 3)
      }
      image(sarracenos, x, 20, 420, 468);
      break;
    case 'Tatars':
      if (sound29.isPlaying() == false) {
        sound29.play();
        sound29.setVolume(0, 3, 3)
      }
      image(tartaros, x, 20, 420, 468);
      break;
    case 'Teutons':
      if (sound30.isPlaying() == false) {
        sound30.play();
        sound30.setVolume(0, 3, 3)
      }
      image(teutones, x, 20, 420, 468);
      break;
    case 'Turks':
      if (sound31.isPlaying() == false) {
        sound31.play();
        sound31.setVolume(0, 3, 3)
      }
      image(turcos, x, 20, 420, 468);
      break;
    case 'Vietnamise':
      if (sound32.isPlaying() == false) {
        sound32.play();
        sound32.setVolume(0, 3, 3)
      }
      image(vietnamitas, x, 20, 420, 468);
      break;
    case 'Vikings':
      if (sound33.isPlaying() == false) {
        sound33.play();
        sound33.setVolume(0, 3, 3)
      }
      image(vikingos, x, 20, 420, 468);
      break;





  }

}
