let colors = ["red", "green", "blue", "purple", "yellow"];

function setup() {
  createCanvas(380, 350);

let eersteKleur = colors.shift(); //Haalt rood weg
colors.push(eersteKleur); //Plakt rood erachteraan

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

for (let i = 0; i < colors.length; i++) { //Start de loop hier
fill(colors[i]); //Geeft kleur aan tekst
text(colors[i], 20, 30 + (i * 15)); //Schrijft tekst op scherm. De X is altijd 20, De Y begint op 30 en zakt elke ronde 15 pixels
}

}