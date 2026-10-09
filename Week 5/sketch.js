//Vragen
let huidigeVraagGroep = 0;
let vragen = [];
let antwoordKnop0, antwoordKnop1, antwoordKnop2, antwoordKnop3;
let scherm = "start";

//Achtergrond dingen
let cirkels = []; 
let kleur = [];
let radius = 50;
let Xpositie = 0;
let ypositie = 0;

//Button
let buttonReset; 
let buttonStart;

//Score
let score = 0;

//Feedback tekst
let feedbackTekst = "";    
let buttonVolgende;


function setup() {
  createCanvas(1000, 650);

  //Mijn antwoorden buttons maken
  antwoordKnop0 = createButton(''); //Button 1 
  antwoordKnop0.position(100, 420); //Hide voor nu
  antwoordKnop0.size(200, 200);
  antwoordKnop0.hide();

  antwoordKnop1 = createButton(''); //Button 2
  antwoordKnop1.position(300, 420);
  antwoordKnop1.size(200, 200);
  antwoordKnop1.hide();

  antwoordKnop2 = createButton(''); //Button 3
  antwoordKnop2.position(500, 420);
  antwoordKnop2.size(200, 200);
  antwoordKnop2.hide();

  antwoordKnop3 = createButton(''); //Button 4
  antwoordKnop3.position(700, 420);
  antwoordKnop3.size(200, 200);
  antwoordKnop3.hide();

  antwoordKnop0.mousePressed(CheckAntwoord0); //Checked als goed of fout is
  antwoordKnop1.mousePressed(CheckAntwoord1);
  antwoordKnop2.mousePressed(CheckAntwoord2);
  antwoordKnop3.mousePressed(CheckAntwoord3);

  //Quiz vragen, data objecten
  let vraag1 = { //10 keer copy en pasten met andere vraag en antwoord:
    vraag: "Wat hoort niet bij C.H.I.M.P.S?",
    antwoorden: ["Geen torens verkopen", "Geen Monkey Knowledge", "Geen abilities", "Geen income generation"], //(Van 0, 1, 2, 3)
    juisteAntwoord: 2
  };
  vragen.push(vraag1);

  let vraag2 = {
    vraag: "Wat is de sterkste MOAB-class bloon?",
    antwoorden: ["ZOMG", "BAD", "BFB", "DDT"],
    juisteAntwoord: 1
  };
  vragen.push(vraag2);

  let vraag3 = {
    vraag: "Wat is slechtste Druid upgrade?",
    antwoorden: ["Monarch of Storms", "Spirit of the Forest", "Avatar of Wrath", "Bestaat niet"],
    juisteAntwoord: 3
  };
  vragen.push(vraag3);

  let vraag4 = {
    vraag: "Wat is de slechste Hard gamemode in BTD6?",
    antwoorden: ["Half Cash", "Chimps", "Dubbel HP moabs", "Alternatieve bloons rondes"],
    juisteAntwoord: 0
  };
  vragen.push(vraag4);

  let vraag5 = {
    vraag: "Wat is de beste Village tegen DDTs?",
    antwoorden: ["Monkey Intelligence Bureau", "Primary Expertise", "Monkey City", "Geen van deze"],
    juisteAntwoord: 0
  };
  vragen.push(vraag5);

  let vraag6 = {
    vraag: "Wat is de beste Alchemist pad voor support?",
    antwoorden: ["Transforming Tonic", "Rubber to gold", "Bloon Master Alchemist", "Stronger Stimulant"],
    juisteAntwoord: 3
  };
  vragen.push(vraag6);

  let vraag7 = {
    vraag: "Welke class gebruik je het minst of niet bij Gwendolin?",
    antwoorden: ["Military Monkeys", "Magic Monkeys", "Support Monkeys", "Primary Monkeys"],
    juisteAntwoord: 0
  };
  vragen.push(vraag7);

  let vraag8 = {
    vraag: "Welke Druid upgrade gebruik je het meeste voor een Obyn strategie?",
    antwoorden: ["Druid of Wrath", "Jungle's bounty", "Poplust", "Ball lightning"],
    juisteAntwoord: 2
  };
  vragen.push(vraag8);

  let vraag9 = {
    vraag: "Wat is de meest handig Tack Shooter upgrade?",
    antwoorden: ["Inferno Ring", "Super Maelstrom", "The Tack Zone", "Ze zijn allemaal even goed"],
    juisteAntwoord: 2
  };
  vragen.push(vraag9);

  let vraag10 = {
    vraag: "Wat is de beste Paragon in BTD6? (Volgens de fandom)",
    antwoorden: ["Glaive Dominus", "Root of all nature", "Herald of Everfrost", "Navarch of the Seas"],
    juisteAntwoord: 3
  };
  vragen.push(vraag10);

  //Reset knop en opnieuw spelen
  buttonReset = createButton('Speel Opnieuw'); //Maakt reset button
  buttonReset.position(390, 450); 
  buttonReset.size(220, 60);
  buttonReset.style('background-color', '#FFFFFF');
  buttonReset.style('font-size', '20px');
  buttonReset.mousePressed(klikResetKnop); 
  buttonReset.hide(); 

  //Volgende vraag button
  buttonVolgende = createButton('Volgende Vraag');
  buttonVolgende.position(400, 350); 
  buttonVolgende.size(200, 50);
  buttonVolgende.style('background-color', '#FFFFFF');
  buttonVolgende.style('font-size', '18px');
  buttonVolgende.mousePressed(NaarVolgendeVraag); 
  buttonVolgende.hide();

  randomSeed(40); //Zodat cirkels niet de heletijd van plek veranderen
  
  //Achtergrond cirkels
  for (let i = 0; i < 25; i++) { //25 cirkels
    let c1 = { 
      xpositie: random(0, 1000),
      ypositie: random(0, 650),
      radius: random(10, 200),
      kleur: color(132, 191, 37) 
    };
    cirkels.push(c1); 
  }

  buttonStart = createButton('Quiz Start'); //Start quiz button
  buttonStart.position(380, 280); 
  buttonStart.size(220, 80);
  buttonStart.style('background-color', '#FFFFFF');
  buttonStart.style('font-size', '24px');
  buttonStart.mousePressed(mijnFunctie); 
}


function draw() {
  background(162, 212, 53);

  //Achtergrond cirkels inspawnen
  for (let i = 0; i < cirkels.length; i++) {  
    let cirkel = cirkels[i]; 
    fill(cirkel.kleur); 
    noStroke();
    circle(cirkel.xpositie, cirkel.ypositie, cirkel.radius * 2); 
  }

  //Bloemen
  TekenBloem1(850, 50); 
  TekenBloem1(200, 600);
  TekenStenen2(20, 30);
  TekenStenen2(400, 500);
  TekenStenen2(850, 630);
  TekenStenen3(100, 400);
  TekenStenen3(900, 0);
  TekenStenen3(0, 630);
  Teken3Gras(20, 120);
  Teken3Gras(550, 500);
  Teken3Gras(50, 550);

  if (scherm === "start") { //Laat start knop op de scherm zien
    textAlign(LEFT); //Zorgt ervoor dat de BTD6 tekst niet na restart verplaatst (opgezocht)

    //BTD6 titel text
    noStroke();
    fill(255);
    rect(90, 100, 800, 300);
textStyle(BOLD);  //BOLD om de tekst dikker te maken
    strokeWeight(8);
    stroke(0, 37, 73);
    textSize(100);
    fill(0, 222, 245);
    text("Bloons", 200, 220);  
    textSize(120);
    stroke(137, 24, 0);
    fill(255, 216, 0);
    text("TD", 520, 220);
    textSize(130);
    stroke(81, 0, 0);
    fill(254, 137, 0);
    text("6", 680, 220);
  }

  //Vragen displayen
  if (scherm === "quiz") { //Alleen uitvoeren als de quiz echt is gestart
    let huidigeVraag = vragen[huidigeVraagGroep]; //Pakt de actieve vraag uit de database via de teller ding
    
    noStroke();
    fill(255);
    rect(90, 100, 800, 120);
    
    fill(0);
    noStroke();
    textSize(24);
    textAlign(CENTER, CENTER); //Mijn coordinaten gebruiken
    text(huidigeVraag.vraag, 500, 160);
  }

  //Antwoorden checken
  textSize(32);
    textStyle(BOLD);
    if (feedbackTekst === "Goed!") {
      fill(41, 115, 27); //Groen voor goed
    } else {
      fill(137, 24, 0);  //Rood voor fout
    }
    text(feedbackTekst, 500, 270);
  
  //Eind scoor
    if (scherm === "eind") {
    noStroke();
    fill(255);
    rect(90, 100, 800, 400); //Rect adden 

    fill(0);
    noStroke();
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Quiz Afgelopen!", 500, 200);
    
    textSize(30);
    text("Jouw Score: " + score + " / " + vragen.length, 500, 280); //Laat de eindscore op het scherm zien
  }
} 


//Functies voor draw
function TekenGras(x, y) { 
}

function TekenStenen2(x, y) {
  noStroke();
  fill(186, 191, 137);
  rect(x, y, 50, 30, 5);
  rect(x + 55, y + 30, 30, 15, 5);
}

function TekenStenen3(x, y) {
  noStroke();
  fill(186, 191, 137);
  rect(x, y, 60, 40, 5);
  rect(x - 45, y - 10, 40, 20, 5);
  rect(x + 70, y, 20, 10, 5);
}

function Teken3Gras(x, y) {
  noStroke();
  fill(41, 115, 27)
  ellipse(x, y, 7.5, 50);
  ellipse(x + 15, y + 10, 7.5, 30);
  ellipse(x + 30, y, 7.5, 50);
}

function TekenBloem1(x, y) {
  noStroke();
  fill(255);
  circle(x, y, 40);
  fill(235, 212, 73);
  circle(x, y, 15);
}



function mijnFunctie() {
  scherm = "quiz"; //Zet de layout om naar de quiz scherm
  buttonStart.hide(); //Verbergt de startknop zodat het weg is
  antwoordKnop0.show();  //Laat de 4 antwoord buttons pas zien als het spel start
  antwoordKnop1.show();
  antwoordKnop2.show();
  antwoordKnop3.show();
  updateVraagScherm();  //Zet de 4 antwoorden van de eerste vraag op de knoppen
}

function updateVraagScherm() {
  let huidigeVraag = vragen[huidigeVraagGroep]; //Zoekt de actieve vraag op in de database
  antwoordKnop0.html(huidigeVraag.antwoorden[0]); //Plakt de 4 antwoord opties uit de data object, live op de 4 buttons
  antwoordKnop1.html(huidigeVraag.antwoorden[1]);
  antwoordKnop2.html(huidigeVraag.antwoorden[2]);
  antwoordKnop3.html(huidigeVraag.antwoorden[3]);
}

//Antwoorden checken
function CheckAntwoord0() { 
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 0) {
    score = score + 1; //Plus 1 als antwoord goed is
    feedbackTekst = "Goed!"; //Als antwoord is goed dan + 1 anders eelse fout
  } else {
    feedbackTekst = "Fout!";
  }
  antwoordGeklikt();
}

function CheckAntwoord1() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 1) { //(Checked welke knop op is gedrukt ook) Anders zou het denken dat het de eerste is gedrukt
    score = score + 1; 
    feedbackTekst = "Goed!";
  } else {
    feedbackTekst = "Fout!";
  }
  antwoordGeklikt();
}

function CheckAntwoord2() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 2) {
    score = score + 1; 
    feedbackTekst = "Goed!";
  } else {
    feedbackTekst = "Fout!";
  }
  antwoordGeklikt();
}

function CheckAntwoord3() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 3) {
    score = score + 1; 
    feedbackTekst = "Goed!";
  } else {
    feedbackTekst = "Fout!";
  }
  antwoordGeklikt();
}

function antwoordGeklikt() { 
  antwoordKnop0.hide(); //Verberged direct de 4 antwoordknoppen zodat de player niet nog een keer kan klikken
  antwoordKnop1.hide();
  antwoordKnop2.hide();
  antwoordKnop3.hide();
  buttonVolgende.show(); //Laat de volgende vraag button zien zodat de speler zelf door kan gaan
}

function NaarVolgendeVraag() {
  feedbackTekst = ""; //Maakt de tekst goed of fout weer leeg voor de volgende ronde
  buttonVolgende.hide(); 
  
  huidigeVraagGroep = huidigeVraagGroep + 1; //Zet opteller op de volgende vraag

   //Checked: Zijn er nog vragen over in de database?
  if (huidigeVraagGroep < vragen.length) {
    antwoordKnop0.show(); //Zowel laat het de knoppen zien anders eind, de quiz is klaar
    antwoordKnop1.show();
    antwoordKnop2.show();
    antwoordKnop3.show();
    updateVraagScherm();
  } else {
    scherm = "eind";
    buttonReset.show(); 
  }
}

//Restart knop function
function klikResetKnop() {
  score = 0; //Zet score weer naar 0
  huidigeVraagGroep = 0; //Zet de vraag weer op 0
  feedbackTekst = ""; //Haalt feedback tekst weg
  scherm = "start"; //Terug naar titel scherm
  buttonReset.hide(); //Verbergt speel opnieuw knop
  buttonStart.show(); //Laat start button zien
}