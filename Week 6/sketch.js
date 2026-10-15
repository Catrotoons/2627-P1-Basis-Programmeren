//Images toegevoegd
let plaatjeTomodachiDefaultPose;
let plaatjeBuitenHuis;
let plaatjeHealthbarVol;
let plaatjeFoodBarVol;
let plaatjeBinnenHuisDefault;
let plaatjeKeuken;

//Basic Teleportaties
let knopGaNaarBuiten;
let knopEnterHuis;
let knopMiniGameTeleportatie;
let knopExitHuis;

//Knoppen voor kamers teleportatie main
let knopSlapenKamer;
let knopEtenKamer;
let knopSchoonmakenKamer;

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

//Inside rooms
  knopEtenKamer = createButton('Kitchen');
  knopEtenKamer.position(830, 160); 
  knopEtenKamer.mousePressed(enterKeuken); 
  knopEtenKamer.size(150, 50);

  knopSchoonmakenKamer = createButton('Bathroom');
  knopSchoonmakenKamer.position(830, 220); 
  knopSchoonmakenKamer.mousePressed(enterBadkamer); 
  knopSchoonmakenKamer.size(150, 50);



}

function preload() { //Images uploaden
  plaatjeTomodachiDefaultPose = loadImage('poppetje.png'); 
 plaatjeBuitenHuis = loadImage('background.png');
plaatjeHealthbarVol = loadImage('hearts.png');
plaatjeFoodBarVol = loadImage('foodBar.png');
plaatjeBinnenHuisDefault = loadImage('Background2png.png');
plaatjeKeuken = loadImage('Kitchenbackground11.png');

}


function draw() {
  background(200);

  //Backgrounds
  image(actieveAchtergrond, 0, 0, 1000, 850);
  
  //Character
  image(plaatjeTomodachiDefaultPose, 220, 35, 580, 750);

  //Bars
  image(plaatjeHealthbarVol, 320, -760, 1400, 1000);
image(plaatjeFoodBarVol, 30, -725, 1400, 900);
}

function enterHuis() {
  actieveAchtergrond = plaatjeBinnenHuisDefault;

knopExitHuis.show();
knopEnterHuis.hide();
knopSpeel.show();
knopRest.show();
knopEtenKamer.show();
knopSchoonmakenKamer.show();
}

function exitHuis() {
  actieveAchtergrond = plaatjeBuitenHuis;

  knopEnterHuis.show();
  knopSpeel.show();
knopExitHuis.hide();
knopRest.hide();
knopEtenKamer.hide();
knopSchoonmakenKamer.hide();
}

function enterKeuken() {
  actieveAchtergrond = plaatjeKeuken;

  knopSpeel.hide();
  knopExitHuis.hide();
  knopRest.hide();
  knopEnterHuis.hide();
  knopEtenKamer.hide();
  knopSchoonmakenKamer.show();
}

function enterBadkamer() {}

function speel() {
}

