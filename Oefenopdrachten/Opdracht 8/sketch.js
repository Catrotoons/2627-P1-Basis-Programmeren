function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(199, 252, 255);

  TekenHuis(20, 260); //Coordinaten van de copie hier
  TekenHuis(180, 260);
  TekenHuis(340, 260);
  TekenHuis(500, 260);
  TekenHuis(660, 260);

  TekenCirkel(720, 60, 40);
  TekenRechthoek(0, 380, 800, 20);
  TekenLijn(100, 120, 100, 100);

  Tekst1("<-- lijn", 120, 115);

  let Som1Antwoord = Som1(10, 5); //Het rekent dan uit 10 + 5 enzovoort onder
  let Som2Antwoord = Som2(10, 5); //SomAntwoord is gewoon de antwoord, dus deze is 10 : 5 = 2
  let Som3Antwoord = Som3(10, 5);
  let Som4Antwoord = Som4(10, 5);


  Tekst1("10 + 5 = " + Som1Antwoord, 0, 20,); //Text = dan de antwoord dus hier gewoon 15, met de coordinaten erachter
  Tekst1("10 / 5 = " + Som2Antwoord, 110, 20,);
  Tekst1("10 x 5 = " + Som3Antwoord, 0, 50,);
  Tekst1("10 - 5 = " + Som4Antwoord, 110, 50,);


}

function TekenHuis(x, y) { //Huis is een ding samen, dus je kan copieeren
  stroke(36, 20, 0);
  fill(255, 233, 201);
  rect(x, y, 120, 120);
fill(204, 84, 59);
  triangle(x, y, x + 120, y, x + 60, y - 80);
fill(199, 249, 255);
  rect(x + 75, y + 30, 40, 40);
fill(163, 115, 83);
  rect(x + 30, y + 70, 30, 50);
}

function TekenCirkel(x, y, straal) { //Straal is de helf van de diameter
  stroke(237, 148, 47);
  fill(255, 251, 133);
  circle(x, y, straal * 2);

} 

function TekenRechthoek(x, y, breedte, hoogte) { 
noStroke();
  fill(72, 161, 102);
  rect(x, y, breedte, hoogte);
}

function TekenLijn(x, y, eindx, eindy) {
stroke("black");
  line(x, y, eindx, eindy);
}

function Tekst1(tekst, x, y) {
fill("black");
  noStroke();
  textSize(20);
  text(tekst, x, y);
}

function Som1(a, b) { //Telt op dus (10, 5) = 10 + 5
return a + b;
}

function Som2(a, b) {
return a / b;
}

function Som3(a, b) {
return a * b;
}

function Som4(a, b) {
return a - b;
}