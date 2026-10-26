//Bewegingen 
let loopSnelheid= 0;

//Images toegevoegd
let plaatjeTomodachiDefaultPose;
let plaatjeBuitenHuis;
let plaatjeHealthbarVol;
let plaatjeFoodBarVol;
let plaatjeBinnenHuisDefault;
let plaatjeKeuken;
let plaatjeBadkamer;
let plaatjeSlaapkamer;
let plaatjeMinigame;

let plaatjeLopen = false;
let plaatjeVies = false;
let plaatjeLopenOmgedraaid = false;

//Basic Teleportaties
let knopGaNaarBuiten;
let knopEnterHuis;
let knopMiniGameTeleportatie;
let knopExitHuis;

//Knoppen voor kamers teleportatie main
let knopSlapenKamer;
let knopEtenKamer;
let knopSchoonmakenKamer;
let knopSlaapkamer;
let knopMinigame;
let knopLivingroom;

//Knoppen voor acties
let knopSpeel;
let knopRest;
let knopClean;
let knopFeed;

//Achtergrond
let actieveAchtergrond;

function setup() {
  createCanvas(1000, 650);

  actieveAchtergrond = plaatjeBuitenHuis;

  //Outside
  knopEnterHuis = createButton('Go inside');
  knopEnterHuis.position(30, 50);  //Change buttons styles, (draw one)
  knopEnterHuis.mousePressed(enterHuis); 
  knopEnterHuis.size(220, 100);
  

  knopExitHuis = createButton('Go outside');
  knopExitHuis.position(30, 50);  //Change buttons styles, (draw one)
  knopExitHuis.mousePressed(exitHuis); 
  knopExitHuis.size(220, 100);
  knopExitHuis.hide();
  

//Buttons for actions
  knopSpeel = createButton('Play');
  knopSpeel.position(30, 200);
  knopSpeel.mousePressed(speel);
  knopSpeel.size(150, 50);

  knopRest = createButton('Sleep');
  knopRest.position(30, 260);
  knopRest.mousePressed(speel);
  knopRest.size(150, 50);
  knopRest.hide();

  knopClean = createButton('Clean');
  knopClean.position(30, 260);
  knopClean.mousePressed(maakSchoon);
  knopClean.size(150, 50);
  knopClean.hide();

  knopFeed = createButton('Feed');
  knopFeed.position(30, 260);
  knopFeed.mousePressed(geefEten);
  knopFeed.size(150, 50);
  knopFeed.hide();

//Inside rooms
  knopEtenKamer = createButton('Kitchen');
  knopEtenKamer.position(830, 160); 
  knopEtenKamer.mousePressed(enterKeuken); 
  knopEtenKamer.size(150, 50);
  knopEtenKamer.hide();

  knopSchoonmakenKamer = createButton('Bathroom');
  knopSchoonmakenKamer.position(830, 220); 
  knopSchoonmakenKamer.mousePressed(enterBadkamer); 
  knopSchoonmakenKamer.size(150, 50);
  knopSchoonmakenKamer.hide();

  knopSlaapkamer = createButton('Bedroom');
  knopSlaapkamer.position(830, 280);
  knopSlaapkamer.mousePressed(enterBedroom);
  knopSlaapkamer.size(150, 50);
  knopSlaapkamer.hide();

  knopMinigame = createButton('Minigame');
  knopMinigame.position(830, 500);
  knopMinigame.mousePressed(enterMinigame);
  knopMinigame.size(150, 50);


  knopLivingroom = createButton('Livingroom');
  knopLivingroom.position(830, 340);
  knopLivingroom.mousePressed(enterLivingroom);
  knopLivingroom.size(150, 50);
  knopLivingroom.hide();

  //Functies voor games of default

}

function preload() { //Images uploaden
  plaatjeTomodachiDefaultPose = loadImage('poppetje.png'); 
 plaatjeBuitenHuis = loadImage('background.png');
plaatjeHealthbarVol = loadImage('hearts.png');
plaatjeFoodBarVol = loadImage('foodBar.png');
plaatjeBinnenHuisDefault = loadImage('Background2png.png');
plaatjeKeuken = loadImage('Kitchen.png');
plaatjeBadkamer = loadImage('Bathroom.png');
plaatjeSlaapkamer = loadImage('Bedroom.png');
plaatjeMinigame = loadImage('Minigame.png');
plaatjeLopen = loadImage('loopvn.gif');
plaatjeVies = loadImage('Dirty.png');
plaatjeLopenOmgedraaid = loadImage('loopvnOmgedraaid.gif');
}


function draw() {
  background(200);

  //Backgrounds
  image(actieveAchtergrond, 0, 0, 1000, 850);
  
  //Character
  image(plaatjeTomodachiDefaultPose, 220, 180, 475, 470);
image(plaatjeLopen, 220 + loopSnelheid, 150, 500, 500);
image(plaatjeLopenOmgedraaid, 220 - loopSnelheid, 150, 500, 500);
//image(plaatjeVies, 350, 150, 550, 550);

  //Bars (Change later)
  image(plaatjeHealthbarVol, 320, -760, 1400, 1000);
image(plaatjeFoodBarVol, 30, -725, 1400, 900);

//Lopen loop
loopSnelheid = loopSnelheid + 5;

if (loopSnelheid > 650) {
plaatjeLopenOmgedraaid = true;
}

if (plaatjeLopen = true) {
plaatjeLopenOmgedraaid = false;
}

if (plaatjeLopenOmgedraaid = true) {
plaatjeLopen = false;
}

//if (loopSnelheid > 650) {
  //loopSnelheid = -600;}

}

//Buttons functies
function enterHuis() {
  actieveAchtergrond = plaatjeBinnenHuisDefault;

knopExitHuis.show();
knopEnterHuis.hide();
knopSpeel.show();
knopRest.show();
knopEtenKamer.show();
knopSchoonmakenKamer.show();
knopLivingroom.hide();
knopSlaapkamer.show();
knopMinigame.show();
}

function exitHuis() {
  actieveAchtergrond = plaatjeBuitenHuis;

  knopEnterHuis.show();
  knopSpeel.show();
knopExitHuis.hide();
knopRest.hide();
knopEtenKamer.hide();
knopSchoonmakenKamer.hide();
knopMinigame.show();
knopLivingroom.hide();
knopSlaapkamer.hide();
knopClean.hide();
knopFeed.hide();

text("Outside", 500, 100);
}

function enterKeuken() {
  actieveAchtergrond = plaatjeKeuken;

  knopSpeel.hide();
  knopExitHuis.hide();
  knopRest.hide();
  knopEnterHuis.hide();
  knopEtenKamer.hide();
  knopSchoonmakenKamer.show();
  knopSlaapkamer.show();
  knopLivingroom.show();
  knopClean.hide();
knopFeed.show();
}

function enterBadkamer() {
  actieveAchtergrond = plaatjeBadkamer;
  knopSpeel.hide();
  knopExitHuis.hide();
  knopRest.hide();
  knopEnterHuis.hide();
  knopEtenKamer.show();
  knopSchoonmakenKamer.hide();
  knopSlaapkamer.show();
  knopLivingroom.show();
  knopClean.show();
knopFeed.hide();
}

function enterBedroom() {
  actieveAchtergrond = plaatjeSlaapkamer;
  knopSpeel.show();
  knopExitHuis.hide();
  knopRest.show();
  knopEnterHuis.hide();
  knopEtenKamer.show();
  knopSchoonmakenKamer.show();
  knopMinigame.show();
  knopSlaapkamer.hide();
  knopLivingroom.show();
  knopClean.hide();
knopFeed.hide();
}

function enterLivingroom() {
  actieveAchtergrond = plaatjeBinnenHuisDefault;
knopExitHuis.show();
knopEnterHuis.hide();
knopSpeel.show();
knopRest.show();
knopEtenKamer.show();
knopSchoonmakenKamer.show();
knopLivingroom.hide();
knopMinigame.show();
knopSlaapkamer.show();
knopClean.hide();
knopFeed.hide();
}

function enterMinigame() {
  actieveAchtergrond = plaatjeMinigame;
  knopExitHuis.show();
knopEnterHuis.hide();
knopSpeel.hide();
knopRest.hide();
knopEtenKamer.hide();
knopSchoonmakenKamer.hide();
knopLivingroom.hide();
knopSlaapkamer.hide();
knopMinigame.hide();
knopClean.hide();
knopFeed.hide();
}

function speel() {}

function maakSchoon() {}

function geefEten() {}

function loop() {}



