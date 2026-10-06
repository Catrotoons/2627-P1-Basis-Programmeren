//Variabelen
let Plaatje1; //Variabel voor plaatje

// Lege lijst om alle cirkels in op te slaan
let cirkels = []; 
let kleur = [];
let radius = 50;
let Xpositie = 0;
let ypositie = 0;


function setup() {
  createCanvas(1000, 650);

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

strokeWeight(8);
  stroke(0, 37, 73);
textSize(100);
fill(0, 222, 245);
text("Bloons", 120, 220);  

//text("BloonsTD6 Quiz", 120, 200);

} //Draw fanctie end


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


