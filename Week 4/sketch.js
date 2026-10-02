//Arrays
let xPosities = []; //Slaat de X plek op van links naar rechts
let yPosities = []; //Slaat de Y plek op, de hoogte
let snelheden = []; //Slaat de val snelheid op
let groottes = [];  //Slaat de breedte hoogte van de vorm op
let vormTypes = []; //Slaat op welke form het is 0 = cirkel, 1 = vierkant (Gewoon voor de zekerheid als ik vergeet sorry veel notes.)
let colors0en1 = [];
let pallet0 = ["#FFFFFF", "#A8BCFF", "#3D76FF", "#0E0075", "#A1AECC", "#00BBFF", "#0067A3", "#001447"];


//Variabelen
let aantalVormen = 25; //Hoeveelheid vormen er zijn
let Start = false; //For backspace start

function setup() {
  createCanvas(800, 600);
   rectMode(CENTER); //(Proberen om manieren te vinden om code te fixen op p5 want het doet irritant)

  for (let i = 0; i < aantalVormen; i++) { //Van opdracht 6 nog

    xPosities.push(int(random(0, 800))); //Random X postie horizontaal, dus waar de vorm spawnt eigenlijk
yPosities.push(int(random(-1000, 0))); //Van waar het valt, zorgt voor vloede animation
snelheden.push(int(random(5, 15))); //Gewoon hoe snel de vormen vallen
groottes.push(int(random(50, 250))); //Hoe groot de vormen zijn
vormTypes.push(int(random(2))); //0 is voor cirkel en 1 is voor square dus

let gekozenKleur = int(random(0, pallet0.length)); //Random kleur kiezen
colors0en1.push(pallet0[gekozenKleur]); //Zet het in colors0en1

}

}

function draw() {
  background(0);

noStroke();

for (let i = 0; i < xPosities.length; i++) { //Snelheid voor droppen random
  
  if (Start === true) {
  yPosities[i] = yPosities[i] + snelheden[i]; }//Dropspeed nogsteeds

 fill(colors0en1[i]); //Mijn kleuren tuff
  
 if (vormTypes[i] === 0) {
    circle(xPosities[i], yPosities[i], groottes[i]); //Als het een cirkel is doe deze posities en groottes
} else {
  square(xPosities[i], yPosities[i], groottes[i]); //Als het een square is doe deze posities en groottes
}

if (yPosities[i] > 900 && Start === true) { 
yPosities[i] = -200; //Reset boven platform
xPosities[i] = int(random(0, 800)); //Random X posities
snelheden[i] = int(random(5, 15)); //Random snelheden

let Newcolor1 = int(random(0, pallet0.length)); //Nieuwe kleur bij spawn
colors0en1[i] = pallet0[Newcolor1]; 
}

}

}

function keyPressed() {
if (keyCode === 8) { //8 is backspace als het goed is, had opgezocht
Start =  true;
return false; //Geen browserscrolling ofzo gewoon even uitproberen wat dit doet, want code werkt niet de heletijd
}

}