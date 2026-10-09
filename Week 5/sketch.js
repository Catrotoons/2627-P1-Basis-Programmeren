//Variabelen
let Plaatje1; //Variabel voor plaatje

let huidigeVraagGroep = 0; //Vragen
let vragen = [];
let antwoordKnop0, antwoordKnop1, antwoordKnop2, antwoordKnop3;
let scherm = "start";

// Lege lijst om alle cirkels in op te slaan
let cirkels = []; 
let kleur = [];
let radius = 50;
let Xpositie = 0;
let ypositie = 0;

//Score
let score = 0;


function setup() {
  createCanvas(1000, 650);

antwoordKnop0 = createButton('');
antwoordKnop0.position(100, 420);
antwoordKnop0.size(200, 200);
antwoordKnop0.hide();

antwoordKnop1 = createButton('');
antwoordKnop1.position(300, 420);
antwoordKnop1.size(200, 200);
antwoordKnop1.hide();

antwoordKnop2 = createButton('');
antwoordKnop2.position(500, 420);
antwoordKnop2.size(200, 200);
antwoordKnop2.hide();

antwoordKnop3 = createButton('');
antwoordKnop3.position(700, 420);
antwoordKnop3.size(200, 200);
antwoordKnop3.hide();

  let vraag1 = {
  vraag: "Wat hoort niet bij C.H.I.M.P.S?",
  antwoorden: ["Geen torens verkopen", "Geen Monkey Knowledge", "Geen abilities", "Geen income generation"],
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

let vraag4= {
  vraag: "Wat is de slechste Hard gamemode in BTD6?",
  antwoorden: ["Half Cash", "Chimps", "Dubbel HP moabs", "Alternatieve bloons rondes"],
  juisteAntwoord: 0
};
vragen.push(vraag4);

let vraag5= {
  vraag: "Wat is de beste Village tegen DDTs?",
  antwoorden: ["Monkey Intelligence Bureau", "Primary Expertise", "Monkey City", "Geen van deze"],
  juisteAntwoord: 0
};
vragen.push(vraag5);

let vraag6= {
  vraag: "Wat is de beste Alchemist pad voor support?",
  antwoorden: ["Transforming Tonic", "Rubber to gold", "Bloon Master Alchemist", "Stronger Stimulant"],
  juisteAntwoord: 3
};
vragen.push(vraag6);

let vraag7= {
  vraag: "Welke class gebruik je het minst of niet bij Gwendolin?",
  antwoorden: ["Military Monkeys", "Magic Monkeys", "Support Monkeys", "Primary Monkeys"],
  juisteAntwoord: 0
};
vragen.push(vraag7);

let vraag8= {
  vraag: "Welke Druid upgrade gebruik je het meeste voor een Obyn strategie?",
  antwoorden: ["Druid of Wrath", "Jungle's bounty", "Poplust", "Ball lightning"],
  juisteAntwoord: 2
};
vragen.push(vraag8);

let vraag9= {
  vraag: "Wat is de meest handig Tack Shooter upgrade?",
  antwoorden: ["Inferno Ring", "Super Maelstrom", "The Tack Zone", "Ze zijn allemaal even goed"],
  juisteAntwoord: 2
};
vragen.push(vraag9);

let vraag10= {
  vraag: "Wat is de beste Paragon in BTD6? (Volgens de fandom)",
  antwoorden: ["Glaive Dominus", "Root of all nature", "Herald of Everfrost", "Navarch of the Seas"],
  juisteAntwoord: 3
};
vragen.push(vraag10);

antwoordKnop0.mousePressed(CheckAntwoord0);
  antwoordKnop1.mousePressed(CheckAntwoord1);
  antwoordKnop2.mousePressed(CheckAntwoord2);
  antwoordKnop3.mousePressed(CheckAntwoord3);


  randomSeed(40); //Laat de positie van achtergrond gras niet veranderen na elke reload, dus vast.
  
  for (let i = 0; i < 25; i++) { 
    let c1 = { //Maakt een object (een pakketje) met alle eigenschappen van een cirkel
      xpositie: random(0, 1000),
      ypositie: random(0, 650),
      radius: random(10, 200),
      kleur: color(132, 191, 37) //color() in plaats van fill(), voorkomt errors
    };
    cirkels.push(c1); //push() stopt het gemaakte pakketje (c1) achteraan in de cirkels lijst
  }

  //Button START
  let buttonStart = createButton('Quiz Start'); //Maakt een knop genaamd "Start Quiz".
  buttonStart.position(380, 280); //Knop positie
  buttonStart.size(220, 80)
  buttonStart.style('background-color', '#FFFFFF');
  buttonStart.style('font-size', '24px');
  buttonStart.mousePressed(mijnFunctie); 

  function mijnFunctie() {
  scherm = "quiz"; //Switched het scherm naar de quiz
    buttonStart.hide(); //Verbergt de start knop
    antwoordKnop0.show();
    antwoordKnop1.show();
    antwoordKnop2.show();
    antwoordKnop3.show();
    updateVraagScherm(); 
}



}


function draw() {
  background(162, 212, 53);

  for (let i = 0; i < cirkels.length; i++) {  //Loopt door de cirkelslijst heen (cirkels.length is hoe lang de lijst is dus gewoon 20)
    let cirkel = cirkels[i]; // Pak cirkel nummer [i] uit de lijst (0, daarna 1, 2, etc je weet wel)
    fill(cirkel.kleur); //Selecteer de opgeslagen kleur van deze specifieke cirkel
    noStroke();
    circle(cirkel.xpositie, cirkel.ypositie, cirkel.radius * 2); //Tekent de cirkel op het scherm (X, Y, Diameter). Diameter is radius * 2.
  }

//Bloemen
TekenBloem1(850, 50);
TekenBloem1(200, 600);
  
  //Mijn stenen achtergrond
  TekenStenen2(20, 30);
  TekenStenen2(400, 500);
  TekenStenen2(850, 630);
  TekenStenen3(100, 400);
  TekenStenen3(900, 0);
  TekenStenen3(0, 630);

  //Gras stukjes 3 achtergrond
  Teken3Gras(20, 120);
  Teken3Gras(550, 500);
  Teken3Gras(50, 550);

  //Witte achtergrond rechthoek
  noStroke();
  fill(255);
  rect(90, 100, 800, 300);

//Title: "BloonsTD6"
textStyle(BOLD);  
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

if (scherm === "quiz") {
  let huidigeVraag = vragen[huidigeVraagGroep];
  
  // Tekent mijn witte rechthoek
  rect(90, 100, 800, 120);
  
  // Teken de vraagtekst
  fill(0);
  textSize(24);
  text(huidigeVraag.vraag, 200, 150);

}
} 


//Grass bladeren
function TekenGras(x, y) {

}

//Twee stukjes stenen
function TekenStenen2(x, y) {
noStroke();
fill(186, 191, 137);
rect(x, y, 50, 30, 5);
rect(x + 55, y + 30, 30, 15, 5);

}

//Drie stukjes stenen
function TekenStenen3(x, y) {
noStroke();
fill(186, 191, 137);
rect(x, y, 60, 40, 5);
rect(x - 45, y - 10, 40, 20, 5);
rect(x + 70, y, 20, 10, 5);
}

//Gras stukjes
function Teken3Gras(x, y) {
  noStroke();
  fill(41, 115, 27)
  ellipse(x, y, 7.5, 50);
  ellipse(x + 15, y + 10, 7.5, 30);
  ellipse(x + 30, y, 7.5, 50);
}

//Bloemen
function TekenBloem1(x, y) {
noStroke();
  fill(255);
  circle(x, y, 40);
  fill(235, 212, 73);
  circle(x, y, 15);
}

antwoordKnop0.show();
  antwoordKnop1.show();
  antwoordKnop2.show();
  antwoordKnop3.show();

function updateVraagScherm() {

  let huidigeVraag = vragen[huidigeVraagGroep];

antwoordKnop0.html(huidigeVraag.antwoorden[0]);
antwoordKnop1.html(huidigeVraag.antwoorden[1]);
antwoordKnop2.html(huidigeVraag.antwoorden[2]);
antwoordKnop3.html(huidigeVraag.antwoorden[3]);

}

//Vraag 1
function CheckAntwoord0() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 0) {
    score = score + 1; 
  }
  volgendeVraag();
  }

  //Vraag 2
function CheckAntwoord1() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 1) {
    score = score + 1; 
  }
  volgendeVraag();
  }

  //Vraag 3
function CheckAntwoord2() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 2) {
    score = score + 1; 
  }
  volgendeVraag();
  }

  //Vraag 4
function CheckAntwoord3() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 3) {
    score = score + 1; 
  }
  volgendeVraag();
  }

  //Vraag 5
function CheckAntwoord4() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 4) {
    score = score + 1; 
  }
  volgendeVraag();
  }

  //Vraag 6
function CheckAntwoord5() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 5) {
    score = score + 1; 
  }
  volgendeVraag();
  }

  //Vraag 7
function CheckAntwoord6() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 6) {
    score = score + 1; 
  }
  volgendeVraag();
  }

  //Vraag 8
function CheckAntwoord7() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 7) {
    score = score + 1; 
  }
  volgendeVraag();
  }

  //Vraag 9
function CheckAntwoord8() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 8) {
    score = score + 1; 
  }
  volgendeVraag();
  }

  //Vraag 10
function CheckAntwoord9() {
  let huidigeVraag = vragen[huidigeVraagGroep];
  if (huidigeVraag.juisteAntwoord === 9) {
    score = score + 1; 
  }
  volgendeVraag();
  }