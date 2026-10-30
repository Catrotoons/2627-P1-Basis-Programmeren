//(Sorry als de code beetje on-netjes is) Had niet genoeg tijd voor button styles door de pngs.

// Bars stats
let hp = 100;
let energie = 100;
let blijheid = 100;
let hygiene = 100;
let schoonX = 0;

//Voor de lopen en npcen
let wachttijd = 60; 
let loopSnelheid = 0;
let richting = 4;
let isAanHetLopen = true;
let isAanHetLopenVies;

//Eten
let isAanHetEten = false;
let isAanHetSlapen = false;

//acties en timers
let etenTimer = 0;
let slapenTimer = 0;
let isAanHetSpelen = false;
let speelFase = 0;
let isAanHetSchoonmaken = false;
let schoonmaakTimer = 0;

//Kamers en default pose
let plaatjeTomodachiDefaultPose;
let plaatjeBuitenHuis;
let plaatjeBinnenHuisDefault;
let plaatjeKeuken;
let plaatjeBadkamer;
let plaatjeSlaapkamer;

//Bars
let plaatjeHPBar;
let plaatjeHygieneBar;
let plaatjeEnergieBar;
let plaatjeBlijheidBar;

//Acties
let plaatjeVies = false;
let plaatjeLopen = false;
let plaatjeLopenOmgedraaid = false;
let plaatjeEten = false;
let plaatjeSlapen = false;
let plaatjeSpeel1 = false;
let plaatjeSpeel2 = false;
let plaatjeSpeel3 = false;
let plaatjeSchoon = false;

//Loopjes en dood gaan
let plaatjeLopenVies = false;
let plaatjeLopenViesOmgedraaid = false;
let plaatjeViesDefault = false;
let plaatjeLopenMoe = false;
let plaatjeLopenMoeOmgedraaid = false;
let plaatjeDefaultMoe = false;
let plaatjeDefaultSad = false;
let plaatjeLopenSad = false;
let plaatjeLopenSadOmgedraaid = false;
let plaatjeDood = false;

// Knoppen
let knopEnterHuis;
let knopExitHuis;
let knopEtenKamer;
let knopSchoonmakenKamer;
let knopSlaapkamer;
let knopLivingroom;
let knopSpeel;
let knopRest;
let knopClean;
let knopFeed;
let knopRestart;

// Achtergrond
let actieveAchtergrond;

function setup() {
  createCanvas(1000, 650);

  actieveAchtergrond = plaatjeBuitenHuis; //Achtergrond

  //Controleert of er opgeslagen data bestaat in de browser 
  if (getItem('tamagotchi_hp') !== null) { 
    hp = getItem('tamagotchi_hp');
    energie = getItem('tamagotchi_energie'); //Laad opgeslagen data in hier
    blijheid = getItem('tamagotchi_blijheid');
    hygiene = getItem('tamagotchi_hygiene');
  }

  //Buttons voor acties, binnen en buiten ook
  knopEnterHuis = createButton('Naar Binnen');
  knopEnterHuis.position(30, 50);  
  knopEnterHuis.mousePressed(enterHuis); 
  knopEnterHuis.size(150, 40);
  
  knopExitHuis = createButton('Naar Buiten');
  knopExitHuis.position(30, 50);  
  knopExitHuis.mousePressed(exitHuis); 
  knopExitHuis.size(150, 40);
  knopExitHuis.hide();

  knopRestart = createButton('Restart');  //De tekst op de buttons
  knopRestart.position(425, 250);
  knopRestart.mousePressed(restartGame);
  knopRestart.size(150, 40);
  knopRestart.hide();

  knopSpeel = createButton('Speel');
  knopSpeel.position(30, 200);
  knopSpeel.mousePressed(speel);
  knopSpeel.size(150, 40);

  knopRest = createButton('Slaap');
  knopRest.position(30, 260);
  knopRest.mousePressed(slaap);
  knopRest.size(150, 40);
  knopRest.hide();

  knopClean = createButton('Schoonmaken');
  knopClean.position(30, 260);
  knopClean.mousePressed(maakSchoon);
  knopClean.size(150, 40);
  knopClean.hide();

  knopFeed = createButton('Geef Eten');
  knopFeed.position(30, 260);
  knopFeed.mousePressed(geefEten);
  knopFeed.size(150, 40);
  knopFeed.hide();

  //Binnen kamers buttons
  knopEtenKamer = createButton('Keuken');
  knopEtenKamer.position(830, 190); 
  knopEtenKamer.mousePressed(enterKeuken); 
  knopEtenKamer.size(150, 40);
  knopEtenKamer.hide();

  knopSchoonmakenKamer = createButton('Badkamer');
  knopSchoonmakenKamer.position(830, 250); 
  knopSchoonmakenKamer.mousePressed(enterBadkamer); 
  knopSchoonmakenKamer.size(150, 40);
  knopSchoonmakenKamer.hide();

  knopSlaapkamer = createButton('Slaapkamer');
  knopSlaapkamer.position(830, 310);
  knopSlaapkamer.mousePressed(enterBedroom);
  knopSlaapkamer.size(150, 40);
  knopSlaapkamer.hide();

  knopLivingroom = createButton('Woonkamer');
  knopLivingroom.position(830, 370);
  knopLivingroom.mousePressed(enterLivingroom);
  knopLivingroom.size(150, 40);
  knopLivingroom.hide();
}

function preload() { 
  
  //Alle images die ik geadd heb, sorry niet gesoorteerd
  plaatjeTomodachiDefaultPose = loadImage('poppetje.png'); 
  plaatjeBuitenHuis = loadImage('background.png');
  plaatjeBinnenHuisDefault = loadImage('Background2png.png');
  plaatjeKeuken = loadImage('Kitchen.png');
  plaatjeBadkamer = loadImage('Bathroom.png');
  plaatjeSlaapkamer = loadImage('Bedroom.png');
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
  plaatjeDood = loadImage('Catro death.png');
}

function draw() {
  background(200);

  image(actieveAchtergrond, 0, 0, 1000, 850);

  if (hp <= 0) { //Dood scherm, voor als ze dood is gegaan
    hp = 0;
    
    knopEnterHuis.hide(); 
    knopExitHuis.hide();
    knopSpeel.hide();
    knopRest.hide();
    knopClean.hide();
    knopFeed.hide();
    knopEtenKamer.hide();
    knopSchoonmakenKamer.hide();
    knopSlaapkamer.hide();
    knopLivingroom.hide();
    
    knopRestart.show();

    image(actieveAchtergrond, 0, 0, 1000, 850);
    image(plaatjeDood, 250, 250, 600, 600);

    fill("black");
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Je Tamagotchi is dood...", width / 2, 100); //Dood tekst 
    
    return; 
  }

  //Bars rechthoeken, elke keer min een doen
  noStroke(); 
  fill(255, 238, 64);
  rect(810, 140, blijheid * 1.7, 23);

  noStroke(); 
  fill(224, 49, 49);
  rect(810, 60, hp * 1.7, 23);

  noStroke(); 
  fill(55, 219, 69);
  rect(610, 60, energie * 1.7, 23);

  noStroke(); 
  fill(87, 167, 201);
  rect(610, 140, hygiene * 1.7, 23);

  //Transparant bars
  image(plaatjeHPBar, 520, -260, 700, 600); 
  image(plaatjeEnergieBar, 320, -260, 700, 600);
  image(plaatjeBlijheidBar, 520, -180, 700, 600);
  image(plaatjeHygieneBar, 320, -180, 700, 600);

  wachttijd = wachttijd - 1; 

  if (wachttijd <= 0) { //Zodat de poppetje rond kan npcen
    let kans = random(0, 100); //Kiest uit de 100
    if (kans < 50) { 
      isAanHetLopen = false; 
      wachttijd = 60; 
    } else {
      isAanHetLopen = true; 
      wachttijd = 120; 
      
      let richtingKans = random(0, 100);
      if (richtingKans < 50) {
        richting = -4; 
      } else {
        richting = 4;  
      }
    } 
  } 

  if (isAanHetLopen === true && isAanHetEten === false && isAanHetSlapen === false && isAanHetSpelen === false) {
    loopSnelheid = loopSnelheid + richting; //Laat de poppetje normaal lopen na acties
  }

  if (loopSnelheid > 400) { richting = -4; } //Min is links en plus is rechts
  if (loopSnelheid < -100) { richting = 4; }

  if (isAanHetSchoonmaken === true) { //Goede positie voor schoonmaken
    image(plaatjeSchoon, schoonX, 140, 1000, 1000);
  }
  else if (isAanHetSpelen === true) { //Zodat die op de goede positie speelt
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
  else if (hygiene <= 40) { //Veranderd loopje in vies loopje, zelfde posities en zo
    if (isAanHetLopen === false) {
      image(plaatjeViesDefault, 220 + loopSnelheid, 180, 475, 470);
    } else if (richting > 0) {
      image(plaatjeLopenVies, 220 + loopSnelheid, 150, 500, 500);
    } else {
      image(plaatjeLopenViesOmgedraaid, 220 + loopSnelheid, 150, 500, 500);
    }
  }
  else if (energie <= 40) { //Veranderd loopje in moe loopje, zelfde posities en zo
    if (isAanHetLopen === false) {
      image(plaatjeDefaultMoe, 220 + loopSnelheid, 180, 475, 470);
    } else if (richting > 0) {
      image(plaatjeLopenMoe, 220 + loopSnelheid, 150, 500, 500);
    } else {
      image(plaatjeLopenMoeOmgedraaid, 220 + loopSnelheid, 150, 500, 500);
    }
  }
  else if (blijheid <= 30) { //Veranderd loopje in sad loopje, zelfde posities en zo
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

  if (frameCount % 60 === 0) { //Hoeveel min de stats krijgen per 60 frames
    if (energie > 0) energie = energie - 2;  
    if (hygiene > 0) hygiene = hygiene - 2;  
    if (blijheid > 0) blijheid = blijheid - 3; 

    if (energie <= 0) hp = hp - 3; //Laat hp eraf gaan als ze op 0 zitten
    if (hygiene <= 0) hp = hp - 3; 
    if (blijheid <= 0) hp = hp - 2; 
    
    if (hp < 0) hp = 0;

    slaDataOp();
  }

  if (etenTimer > 0) { //Laat de gif goed afspelen
    etenTimer = etenTimer - 1;
    if (etenTimer <= 0) isAanHetEten = false; //Stopt als het op 0 zit
  }

  if (slapenTimer > 0) { //Laat de gif goed afspelen
    slapenTimer = slapenTimer - 1;
    if (slapenTimer <= 0) isAanHetSlapen = false; //Stopt als het op 0 zit
  }

  if (schoonmaakTimer > 0) { //Laat de gif goed afspelen
    schoonmaakTimer = schoonmaakTimer - 1;
    if (schoonmaakTimer <= 0) isAanHetSchoonmaken = false; //Stopt als het op 0 zit
  }
}

function slaDataOp() { //Slaat data op
  storeItem('tamagotchi_hp', hp);
  storeItem('tamagotchi_energie', energie);
  storeItem('tamagotchi_blijheid', blijheid);
  storeItem('tamagotchi_hygiene', hygiene);
}

function restartGame() { //Laat de game en stats restarten
  hp = 100; //Alles begint op 100 weer
  energie = 100;
  blijheid = 100;
  hygiene = 100;
  clearStorage(); //Verwijdert vorige data
  knopRestart.hide(); 
  actieveAchtergrond = plaatjeBuitenHuis;
  knopEnterHuis.show();
  knopSpeel.show();
}

function enterHuis() {
  actieveAchtergrond = plaatjeBinnenHuisDefault; //Knoppen wanneer ze moeten showen
  knopExitHuis.show();
  knopEnterHuis.hide();
  knopSpeel.show();
  knopRest.show();
  knopEtenKamer.show();
  knopSchoonmakenKamer.show();
  knopLivingroom.hide();
  knopSlaapkamer.show();
}

function exitHuis() {
  actieveAchtergrond = plaatjeBuitenHuis;
  knopEnterHuis.show();
  knopSpeel.show();
  knopExitHuis.hide();
  knopRest.hide();
  knopEtenKamer.hide();
  knopSchoonmakenKamer.hide();
  knopLivingroom.hide();
  knopSlaapkamer.hide();
  knopClean.hide();
  knopFeed.hide();
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
  knopSlaapkamer.show();
  knopClean.hide();
  knopFeed.hide();
}

function speel() {
  isAanHetSpelen = true; //Laat poppetje spelen
  speelFase = 1; //Begint op 1
  blijheid = blijheid + 80; //Geeft 80 blijheid :)
  if (blijheid > 100) blijheid = 100;
  slaDataOp();
}

function mouseClicked() {
  if (isAanHetSpelen === true) { //Laat poppetje spelen
    let charX = 220 + loopSnelheid; //Positie X
    let charY = 190; //Positie Y
    
    if (mouseX > charX && mouseX < charX + 460 && mouseY > charY && mouseY < charY + 460) { //Coordinaten voor mousePressed
      speelFase = speelFase + 1; //Elke klik +1 
      if (speelFase > 3) { //Niet verder dan 3
        isAanHetSpelen = false; 
        speelFase = 0;          
        blijheid = blijheid + 30; 
        if (blijheid > 100) blijheid = 100;
        slaDataOp();
      }
    }
  }
}

function maakSchoon() {
  isAanHetSchoonmaken = true; //Laat poppetje Schoon worden
  schoonmaakTimer = 70; //Hoelang de gif is
  plaatjeSchoon.setFrame(0);
  schoonX = 220 + loopSnelheid; //Positie waar de gif speelt
  hygiene = hygiene + 80; //Plus 80 stats hygiene
  if (hygiene > 100) hygiene = 100; 
  slaDataOp();
}

function geefEten() {
  isAanHetEten = true; //Laat poppetje eten
  etenTimer = 70; //Hoelang de gif speelt
  plaatjeEten.setFrame(0); //Begint altijd op frame 0 anders glitched het
  energie = energie + 20; //Plus 20 energie, minder dan slapen
  if (energie > 100) energie = 100;
  slaDataOp();
}

function slaap() { //Laat poppetje slapen
  isAanHetSlapen = true;
  slapenTimer = 90;
  energie = energie + 100; //Plus 100 energie voor slapen
  if (energie > 100) energie = 100; //Niet hoger dan 100
  slaDataOp(); //Slaat de data op
}

function loop() {}