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
let isAanHetLopenVies;

//Eten
let isAanHetEten = false;
let isAanHetSlapen = false;

//Bewegingen
let etenTimer = 0;
let slapenTimer = 0;
let isAanHetSpelen = false;
let speelFase = 0;
let isAanHetSchoonmaken = false;
let schoonmaakTimer = 0;

//Images toegevoegd
let plaatjeTomodachiDefaultPose;
let plaatjeBuitenHuis;
let plaatjeBinnenHuisDefault;
let plaatjeKeuken;
let plaatjeBadkamer;
let plaatjeSlaapkamer;
let plaatjeMinigame;

let plaatjeHPBar;
let plaatjeHygieneBar;
let plaatjeEnergieBar;
let plaatjeBlijheidBar;

let plaatjeVies = false;
let plaatjeLopen = false;
let plaatjeLopenOmgedraaid = false;
let plaatjeEten = false;
let plaatjeSlapen = false;
let plaatjeSpeel1 = false;
let plaatjeSpeel2 = false;
let plaatjeSpeel3 = false;
let plaatjeSchoon = false;

let plaatjeLopenVies = false;
let plaatjeLopenViesOmgedraaid = false;
let plaatjeViesDefault = false;
let plaatjeLopenMoe = false;
let plaatjeLopenMoeOmgedraaid = false;
let plaatjeDefaultMoe = false;
let plaatjeDefaultSad = false;
let plaatjeLopenSad = false;
let plaatjeLopenSadOmgedraaid = false;

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
  knopEnterHuis = createButton('Ga naar binnen');
  knopEnterHuis.position(30, 50);  //Change buttons styles, (draw one)
  knopEnterHuis.mousePressed(enterHuis); 
  knopEnterHuis.size(220, 100);
  

  knopExitHuis = createButton('Ga naar buiten');
  knopExitHuis.position(30, 50);  //Change buttons styles, (draw one)
  knopExitHuis.mousePressed(exitHuis); 
  knopExitHuis.size(220, 100);
  knopExitHuis.hide();
  

//Buttons for actions
  knopSpeel = createButton('Speel');
  knopSpeel.position(30, 200);
  knopSpeel.mousePressed(speel);
  knopSpeel.size(150, 50);

  knopRest = createButton('Slaap');
  knopRest.position(30, 260);
  knopRest.mousePressed(slaap);
  knopRest.size(150, 50);
  knopRest.hide();

  knopClean = createButton('Maak schoon');
  knopClean.position(30, 260);
  knopClean.mousePressed(maakSchoon);
  knopClean.size(150, 50);
  knopClean.hide();

  knopFeed = createButton('Geef eten');
  knopFeed.position(30, 260);
  knopFeed.mousePressed(geefEten);
  knopFeed.size(150, 50);
  knopFeed.hide();

//Inside rooms
  knopEtenKamer = createButton('Keuken');
  knopEtenKamer.position(830, 190); 
  knopEtenKamer.mousePressed(enterKeuken); 
  knopEtenKamer.size(150, 50);
  knopEtenKamer.hide();

  knopSchoonmakenKamer = createButton('Badkamer');
  knopSchoonmakenKamer.position(830, 250); 
  knopSchoonmakenKamer.mousePressed(enterBadkamer); 
  knopSchoonmakenKamer.size(150, 50);
  knopSchoonmakenKamer.hide();

  knopSlaapkamer = createButton('Slaapkamer');
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
plaatjeEten = loadImage('Eating.gif');
plaatjeLopenVies = loadImage('Dirtywalk1.gif');
plaatjeLopenViesOmgedraaid = loadImage('Walkdirty2.gif');
plaatjeViesDefault = loadImage('Dirty.png');
plaatjeLopenMoe = loadImage('Walktired1.gif');
plaatjeLopenMoeOmgedraaid = loadImage('Walktired2.gif');
plaatjeDefaultMoe = loadImage('Tired.png');
plaatjeDefaultSad = loadImage('Sad.png');
plaatjeLopenSad = loadImage('Walksad1.gif');
plaatjeLopenSadOmgedraaid = loadImage('Walksad2.gif');
plaatjeSpeel1 = loadImage('Play1.png');
plaatjeSpeel2 = loadImage('Play2.png');
plaatjeSpeel3 = loadImage('Play3.png');
plaatjeSchoon = loadImage('Schoon.gif');
}


function draw() {
  background(200);

  //Backgrounds
  image(actieveAchtergrond, 0, 0, 1000, 850);
  
  //Character
//image(plaatjeVies, 350, 150, 550, 550);
//image(plaatjeSlapen, 350, 150, 550, 550);
//image(plaatjeEten, 350, 128, 550, 550);

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
if (isAanHetLopen === true && isAanHetEten === false && isAanHetSlapen === false && isAanHetSpelen === false) {
  loopSnelheid = loopSnelheid + richting;
}

if (loopSnelheid > 400) {  //Muur rechts draai om naar links
  richting = -4; 
}

if (loopSnelheid < -100) { //Muur links draai om naar rechts
  richting = 4;
}

//Teken exact EEN plaatje op basis van wat het doet 

if (isAanHetSchoonmaken === true) {
  // We tekenen de GIF op dezelfde plek met een mooie grootte
  image(plaatjeSchoon, 220 + loopSnelheid, 150, 500, 500);
}

if (isAanHetSpelen === true) {
  if (speelFase === 1) {
    image(plaatjeSpeel1, 220 + loopSnelheid, 190, 460, 460);
  } else if (speelFase === 2) {
    image(plaatjeSpeel2, 220 + loopSnelheid, 190, 460, 460);
  } else if (speelFase === 3) {
    image(plaatjeSpeel3, 220 + loopSnelheid, 190, 460, 460);
  }
}
else if (isAanHetEten === true) {
  image(plaatjeEten, 220 + loopSnelheid, 128, 550, 550);
}
else if (isAanHetSlapen === true) {
  image(plaatjeSlapen, 220 + loopSnelheid, 128, 550, 550);
}
else if (hygiene <= 40) {
  if (isAanHetLopen === false) {
    image(plaatjeViesDefault, 220 + loopSnelheid, 180, 475, 470);
  } else if (richting > 0) {
    image(plaatjeLopenVies, 220 + loopSnelheid, 150, 500, 500);
  } else {
    image(plaatjeLopenViesOmgedraaid, 220 + loopSnelheid, 150, 500, 500);
  }
}
else if (energie <= 40) {
  if (isAanHetLopen === false) {
    image(plaatjeDefaultMoe, 220 + loopSnelheid, 180, 475, 470);
  } else if (richting > 0) {
    image(plaatjeLopenMoe, 220 + loopSnelheid, 150, 500, 500);
  } else {
    image(plaatjeLopenMoeOmgedraaid, 220 + loopSnelheid, 150, 500, 500);
  }
}
else if (blijheid <= 30) {
  if (isAanHetLopen === false) {
    image(plaatjeDefaultSad, 220 + loopSnelheid, 180, 475, 470);
  } else if (richting > 0) {
    image(plaatjeLopenSad, 220 + loopSnelheid, 150, 500, 500);
  } else {
    image(plaatjeLopenSadOmgedraaid, 220 + loopSnelheid, 150, 500, 500);
  }
}
else if (isAanHetLopen === false) {
  image(plaatjeTomodachiDefaultPose, 220 + loopSnelheid, 180, 475, 470);
} 
else if (richting > 0) {
  image(plaatjeLopen, 220 + loopSnelheid, 150, 500, 500);
} 
else {
  image(plaatjeLopenOmgedraaid, 220 + loopSnelheid, 150, 500, 500);
}

// Bars gecombineerd
  if (frameCount % 60 === 0) {
    if (energie > 0) {
      energie = energie - 3;  //Word langzaam moe
    }
    if (hygiene > 0) {
      hygiene = hygiene - 2;  //Worden langzaam vies
    }
    if (blijheid > 0) {
      blijheid = blijheid - 5; //Word langzaam eenzaam
    }

    if (energie <= 0) {
      hp = hp - 3; //Schade door uitputting
    }
    if (hygiene <= 0) {
      hp = hp - 3; //Schade door onhygienisch zijn
    }
    if (blijheid <= 0) {
      hp = hp - 2; //Schade door eenzaamheid
    }
    
    if (hp < 0) {
      hp = 0;
    }
  }

  if (isAanHetEten === true) {
  image(plaatjeEten, 220 + loopSnelheid, 128, 550, 550);
} else if (hygiene <= 0) {
} else if (energie <= 0) {
}

if (etenTimer > 0) {
  etenTimer = etenTimer - 1;
  if (etenTimer <= 0) {
    isAanHetEten = false;
  }
}

if (isAanHetSlapen === true) {
  image(plaatjeSlapen, 220 + loopSnelheid, 128, 550, 550);
} else if (hygiene <= 0) {
} else if (energie <= 0) {
}

if (slapenTimer > 0) {
  slapenTimer = slapenTimer - 1;
  if (slapenTimer <= 0) {
    isAanHetSlapen = false;
  }
}

if (isAanHetSchoonmaken === true) {
  schoonmaakTimer = schoonmaakTimer - 1;
  if (schoonmaakTimer <= 0) {
    isAanHetSchoonmaken = false;
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

function speel() {
  isAanHetSpelen = true;
  speelFase = 1;
  blijheid = blijheid + 80;
  if (blijheid > 100) {
    blijheid = 100;
} 
}

function mouseClicked() {
  // Check of we in de speel-modus zitten
  if (isAanHetSpelen === true) {
    // We berekenen waar het poppetje op het scherm staat (X en Y)
    let charX = 220 + loopSnelheid;
    let charY = 190;
    
    //Checked of je ergens op het poppetje klikt
    if (mouseX > charX && mouseX < charX + 460 && mouseY > charY && mouseY < charY + 460) {
      speelFase = speelFase + 1; //Naar de volgende fase
      
      //Als het voorbij fase 3 zijn, is het spel klaar
      if (speelFase > 3) {
        isAanHetSpelen = false; // Stop met spelen
        speelFase = 0;          // Reset de fase
        
       //Je krijgt hier pas happiness
        blijheid = blijheid + 30;
        if (blijheid > 100) {
          blijheid = 100;
        }
      }
    }
  }
}

function maakSchoon() {
  isAanHetSchoonmaken = true;
  schoonmaakTimer = 90; // Hoelang de animatie duurt (in frames)

  // Hygiene direct weer omhoog!
  hygiene = hygiene + 80;
  if (hygiene > 100) {
    hygiene = 100;
  }
}

function geefEten() {
  isAanHetEten = true;
  etenTimer = 65;

  energie = energie + 20; 
  if (energie > 100) {
    energie = 100;
  }
}

function loop() {}

function slaap() {
  isAanHetSlapen = true;
  slapenTimer = 90;

  energie = energie + 80; 
  if (energie > 100) {
    energie = 100;
  }
}


