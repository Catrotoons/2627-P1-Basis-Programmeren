let cirkels = [];
let kleur = [];
let radius = 50;
let Xpositie = 50;
let ypositie = 150;
let vragen = [];
let huidigeVraag = [];
let snelHeidX = []; 
let snelHeidY = []; 
let punten = 0;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 100; i++) {
    let c = {
      xpositie: random(50, 600),
      ypositie: random(50, 300),
      radius: random(10, 50),
      kleur: random(["red", "blue", "green", "yellow"]),
      snelHeidX: random(1, 5),
      snelHeidY: random(1, 5)
    };
    cirkels.push(c);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < cirkels.length; i++) {
    let huidigeCirkel = cirkels[i];

    // Tekent de cirkel met de juiste object variabelen
    fill(huidigeCirkel.kleur);
    circle(huidigeCirkel.xpositie, huidigeCirkel.ypositie, huidigeCirkel.radius * 2);

    // Update de posities met de snelheiden uit de object
    huidigeCirkel.xpositie = huidigeCirkel.xpositie + huidigeCirkel.snelHeidX;
    huidigeCirkel.ypositie = huidigeCirkel.ypositie + huidigeCirkel.snelHeidY;

    // Stuiteren tegen de muren zodat ze in beeld blijven
    if (huidigeCirkel.xpositie > width || huidigeCirkel.xpositie < 0) {
      huidigeCirkel.snelHeidX = huidigeCirkel.snelHeidX * -1;
    }
    if (huidigeCirkel.ypositie > height || huidigeCirkel.ypositie < 0) {
      huidigeCirkel.snelHeidY = huidigeCirkel.snelHeidY * -1;
    }
  }

fill(0);
  textSize(24);
  text(punten, 20, 40);
}


function mousePressed() {
  for (let i = 0; i < cirkels.length; i ++) {
    let cirkel = cirkels[i]
    let afstandTotMuis = dist(mouseX, mouseY, cirkel.xpositie, cirkel.ypositie);
    if (afstandTotMuis <= cirkel.radius) {
      punten += 1;
      cirkels.splice(i, 1);
    }
  }
}
