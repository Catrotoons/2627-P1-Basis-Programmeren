//Variabelen
let Plaatje1; //Variabel voor plaatje

// Lege lijst om alle cirkels in op te slaan
let cirkels = []; 
let kleur = [];
let radius = 50;
let Xpositie = 0;
let ypositie = 0;
//// Lege lijst om alle stenen in op te slaan
let rechtStenen = [];


function setup() {
  createCanvas(1000, 650);

  randomSeed(40); //Laat de positie van achtergrond gras niet veranderen na elke reload, dus vast.
  
  for (let i = 0; i < 25; i++) {
    let c1 = {
      xpositie: random(0, 1000),
      ypositie: random(0, 650),
      radius: random(10, 200),
      kleur: color(132, 191, 37) //color() in plaats van fill(), voorkomt errors
    };
    cirkels.push(c1);
  }

}


function draw() {
  background(162, 212, 53);

  for (let i = 0; i < cirkels.length; i++) { 
    let cirkel = cirkels[i];
    fill(cirkel.kleur);
    noStroke();
    circle(cirkel.xpositie, cirkel.ypositie, cirkel.radius * 2);

  }

  noStroke();
  fill(255);
  rect(100, 100, 800, 300);

  stroke("black");
  ellipse(100, 100, 7.5, 50);

 

  
}

function TekenGras(x, y) {

}


