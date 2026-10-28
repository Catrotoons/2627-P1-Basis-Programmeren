//Bars
let hp = 100;
let energie = 100;
let blijheid = 100;
let hygiene = 100;

//Voor het lopen en npcen
let wachttijd = 60; //60 frames per seconde
let loopSnelheid = 0;
let richting = 4;
let isAanHetLopen = true;

//Bewegingen 

//Images toegevoegd
let plaatjeTomodachiDefaultPose;
let plaatjeBuitenHuis;
let plaatjeBinnenHuisDefault;
let plaatjeKeuken;
let plaatjeBadkamer;
let plaatjeSlaapkamer;
let plaatjeMinigame;
let plaatjeSlapen;

let plaatjeHPBar;
let plaatjeHygieneBar;
let plaatjeEnergieBar;
let plaatjeBlijheidBar;

let plaatjeVies = false;
let plaatjeLopen = false;
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
  knopEtenKamer.position(830, 190); 
  knopEtenKamer.mousePressed(enterKeuken); 
  knopEtenKamer.size(150, 50);
  knopEtenKamer.hide();

  knopSchoonmakenKamer = createButton('Bathroom');
  knopSchoonmakenKamer.position(830, 250); 
  knopSchoonmakenKamer.mousePressed(enterBadkamer); 
  knopSchoonmakenKamer.size(150, 50);
  knopSchoonmakenKamer.hide();

  knopSlaapkamer = createButton('Bedroom');
  knopSlaapkamer.position(830, 310);
  knopSlaapkamer.mousePressed(enterBedroom);
  knopSlaapkamer.size(150, 50);
  knopSlaapkamer.hide();

  knopMinigame = createButton('Minigame');
  knopMinigame.position(830, 500);
  knopMinigame.mousePressed(enterMinigame);
  knopMinigame.size(150, 50);


  knopLivingroom = createButton('Livingroom');
  knopLivingroom.position(830, 370);
  knopLivingroom.mousePressed(enterLivingroom);
  knopLivingroom.size(150, 50);
  knopLivingroom.hide();

  //Functies voor games of default

}

function preload() { //Images uploaden
  plaatjeTomodachiDefaultPose = loadImage('poppetje.png'); 
 plaatjeBuitenHuis = loadImage('background.png');
plaatjeBinnenHuisDefault = loadImage('Background2png.png');
plaatjeKeuken = loadImage('Kitchen.png');
plaatjeBadkamer = loadImage('Bathroom.png');
plaatjeSlaapkamer = loadImage('Bedroom.png');
plaatjeMinigame = loadImage('Minigame.png');
plaatjeLopen = loadImage('loopvn.gif');
plaatjeVies = loadImage('Dirty.png');
plaatjeLopenOmgedraaid = loadImage('loopvnOmgedraaid.gif');
plaatjeSlapen = loadImage('Sleeping.png');
plaatjeHPBar = loadImage('HP bar.png');
plaatjeBlijheidBar = loadImage('Blijheid bar.png');
plaatjeHygieneBar = loadImage('Hygiene bar.png');
plaatjeEnergieBar = loadImage('Energie bar.png');
}


function draw() {
  background(200);

  //Backgrounds
  image(actieveAchtergrond, 0, 0, 1000, 850);
  
  //Character
//image(plaatjeVies, 350, 150, 550, 550);
//image(plaatjeSlapen, 350, 150, 550, 550);

//Bars
noStroke(); //Blijheid
fill(255, 238, 64);
rect(810, 140, blijheid * 1.7, 23);

noStroke(); //HP
fill(224, 49, 49);
rect(810, 60, hp * 1.7, 23);

noStroke(); //Energie
fill(55, 219, 69);
rect(610, 60, energie * 1.7, 23);

noStroke(); //Hygiene
fill(87, 167, 201);
rect(610, 140, hygiene * 1.7, 23);

image(plaatjeHPBar, 520, -260, 700, 600);
image(plaatjeEnergieBar, 320, -260, 700, 600);
image(plaatjeBlijheidBar, 520, -180, 700, 600);
image(plaatjeHygieneBar, 320, -180, 700, 600);

//Lopen loop / npcen
wachttijd = wachttijd - 1; //Klok telt af

if (wachttijd <= 0) { //Als de klok op 0 staat kiest een nieuwe actie
  let kans = random(0, 100);
  if (kans < 50) {
    isAanHetLopen = false; //50% kans sta still
    wachttijd = 60; //Wacht 1 seconde
  } else {
    isAanHetLopen = true; //50% kans ga lopen
    wachttijd = 120; //Loop 2 seconden
    
    //Kies random een richting (links of rechts)
    let richtingKans = random(0, 100);
    if (richtingKans < 50) {
      richting = -4; // Loop naar links
    } else {
      richting = 4;  // Loop naar rechts
    }
  } 
} 

//Als het moet lopen, verander de X pos
if (isAanHetLopen === true) {
  loopSnelheid = loopSnelheid + richting;
}

if (loopSnelheid > 400) {  //Muur rechts draai om naar links
  richting = -4; 
}

if (loopSnelheid < -100) { //Muur links draai om naar rechts
  richting = 4;
}

//Teken exact EEN plaatje op basis van wat het doet
if (isAanHetLopen === false) {
    image(plaatjeTomodachiDefaultPose, 220 + loopSnelheid, 180, 475, 470); //Sta still
  } 
  else if (richting > 0) {
    image(plaatjeLopen, 220 + loopSnelheid, 150, 500, 500); //Gaat naar rechts
  } 
  else {
    image(plaatjeLopenOmgedraaid, 220 + loopSnelheid, 150, 500, 500); //Loopt naar links
  }

  //Bars 
  if (frameCount % 60 === 0) {
  blijheid = blijheid - 1; // Wordt langzaam ongelukkig
}

if (frameCount % 60 === 0) { 
energie = energie - 1;  // Wordt langzaam moe
}

if (frameCount % 60 === 0) {
  //Alleen energie eraf halen als de energie nog groter is dan 0
  if (energie > 0) {
    energie = energie - 1;
  }

  if (hygiene > 0) {
    hygiene = hygiene - 1;
  }

  if (blijheid > 0) {
    blijheid = blijheid - 1;
  }

  if (energie === 0) {
    hp = hp - 1; // Schade door uitputting
  }
  if (hygiene === 0) {
    hp = hp - 1; // Schade door onhygienisch
  }
  if (blijheid === 0) {
    hp = hp - 1; // Schade door eenzaamheid
  }
}

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

function slaap() {}


