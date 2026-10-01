let colors1 = ["red", "green", "blue", "purple", "yellow"];
let colors2 = ["red", "green", "blue", "purple", "yellow"];
let colors3 = ["red", "green", "blue", "purple", "yellow"];
let colors4 = ["red", "green", "blue", "purple", "yellow"];
let Numbers1 = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
let Array1 = [ 3, 55, 93, 20, 102, 6];
let Array2 = [14, 22, 80, 5];
let Woord1 = "Overheidsfinancieringstekort";
let randomKleuren = [];
let mijnGetallen = [];


function setup() {
  createCanvas(380, 350);
  let Kleur1 = colors2.shift(); 
colors2.push(Kleur1); 

let Kleur2 = colors3.shift(); 
colors3.push(Kleur2); 
colors3.splice(1, 2);
colors4.sort();

//8
for (let i = 0; i < 5; i++) {
  let rKleur = color(random(255), random(255), random(255));
  randomKleuren.push(rKleur);
}

for (let i = 0; i < 12; i++) {
  let randomGetal = round(random(0, 100));
 mijnGetallen.push(randomGetal); 
}
}

function draw() {
  background(220);

fill("black");
  text( "1", 20, 15)
text("2", 20, 100)
text("3.", 20, 190)
text("4.", 20, 250)
text("5.", 120, 15)
text("6.", 120, 100)
text("7.", 120, 190)
text("8.", 120, 280)
text("9.", 240, 15)

//1
for (let i = 0; i < colors1.length; i++) { //Start de loop hier
fill(colors1[i]); //Geeft kleur aan tekst
text(colors1[i], 20, 30 + (i * 15)); //Schrijft tekst op scherm. De X is altijd 20, De Y begint op 30 en zakt elke ronde 15 pixels
}

//2
for (let i = 0; i < colors2.length; i++) {
  fill(colors2[i]);
  text(colors2[i], 20, 115 + (i * 15));
}

//3
for (let i = 0; i < colors3.length; i++) {
  fill(colors3[i]);
  text(colors3[i], 20, 200 + (i * 15));
}

//4
let Rules1 = 0;
for (let i = 0; i < Numbers1.length; i++) {
 if (Numbers1[i] < 300) {
fill("black");

text(Numbers1[i], 20, 265 + (Rules1 * 15));
Rules1 = Rules1 + 1;
}
}

//5
let Totaal5 = 0;
for (let i = 0; i < Array1.length; i++) {
  Totaal5 = Totaal5 + Array1[i];
}

for (let i = 0; i < Array2.length; i++) {
  Totaal5 = Totaal5 + Array2[i];
}

fill("black");
text(Totaal5, 120, 35);

//6
let AantalE = 0;
for (let i = 0; i < Woord1.length; i++) {
  if (Woord1[i] === "e") {
    AantalE = AantalE + 1;
  } 
}

fill("black");
text(AantalE, 120, 120);

//7
for (let i = 0; i < colors4.length; i++) {
  fill(colors4[i]);
  text(colors4[i], 120, 205 + (i * 15));
}

//8,2
for (let i = 0; i < randomKleuren.length; i++) {
fill(randomKleuren[i]);
noStroke();
rect(120 + (i * 20), 295, 15, 15);
}
stroke(0);

//9
let totaal9 = 0;
for (let i = 0; i < mijnGetallen.length; i++) {
 totaal9 = totaal9 + mijnGetallen[i];
 fill("black");
  text(mijnGetallen[i], 240, 35 + (i * 15));
}
let gemiddelde = totaal9 / mijnGetallen.length;
text("Totaal: " + totaal9, 240, 230);
text("Gemiddelde: " + round(gemiddelde), 240, 245);

}