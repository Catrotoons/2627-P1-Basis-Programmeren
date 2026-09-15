let cloud1 = 0; //Maak namen specifiek, naam maakt geen verschil aan code.
let cloud2 = 0;
let cloud3 = 0;
let cloud4 = 0;
let sunX = 0;
let car1 = 0;
let car2 = 0;
let carGOAT = 0;
let car4 = 0;

function setup() {
  createCanvas(1000, 660); //Negeer nummer achter titel, is de volgorde waarin ik heb gemaakt (interrsant terugblik)
}

function draw() {
  background("lightblue"); //Kan ook (255, 0, 0) gebruiken voor moeilijkere kleuren (specifiek)

//Sun 6 
noStroke();
fill("orange");
circle(0 + sunX, 80, 125);  //SunX staat voor XERNEAS LOOPT, het staat op positie X dus loopt.
fill("yellow");
circle(0 +sunX, 80, 100);

  //Clouds 5
noStroke();
fill(210, 230 , 255); //X1, Y2, diameter (cirkel grootte)
circle(0 + cloud1, 90, 100);
circle(40 + cloud1, 90, 80);
circle(-40 + cloud1, 90, 80);
fill("white");
circle(0 + cloud1, 100, 100);
circle(40 + cloud1, 100, 80);
circle(-40 + cloud1, 100, 80);
//Cloud 2
fill(210, 230 , 255);
circle(0 + cloud2, 140, 100);
circle(40 + cloud2, 140, 80);
circle(-40 + cloud2, 140, 80);
fill("white");
circle(0 + cloud2, 150, 100);
circle(40 + cloud2, 150, 80);
circle(-40 + cloud2, 150, 80);
//Cloud3
fill(210, 230 , 255);
circle(0 + cloud3, 90, 100);
circle(40 + cloud3, 90, 80);
circle(-40 + cloud3, 90, 80);
fill("white");
circle(0 + cloud3, 100, 100);
circle(40 + cloud3, 100, 80);
circle(-40 + cloud3, 100, 80);
//Cloud4
fill(210, 230 , 255);
circle(0 + cloud4, 140, 100);
circle(40 + cloud4, 140, 80);
circle(-40 + cloud4, 140, 80);
fill("white");
circle(0 + cloud4, 150, 100);
circle(40 + cloud4, 150, 80);
circle(-40 + cloud4, 150, 80);

//Mountains 4 
  strokeWeight(2);
  stroke("black");
  fill(75);
  triangle(200, 600, 600, 600, 400, 100);
  fill(110);
  triangle(400, 600, 1000, 600, 750, 300);
  fill(150);
  triangle(50, 600, 350, 600, 200, 350); //Ze zien eruit als shit

  
  //Grass 2
noStroke();
fill("darkgreen");
rect(0, 570, 1000, 1000);
fill("green");
rect(0, 577, 1000, 1000);

  //Road and road stripes. (Hou voor de gras) 1
stroke(100);
fill(80);
rect(0, 585, 1000, 1000);
stroke(100);
fill(100);
rect(0, 590, 1000, 1000);
noStroke();
fill("white");
rect(-60, 620, 110, 10, 5); //Strepen hier onder
rect(115, 620, 110, 10, 5);
rect(295, 620, 110, 10, 5);
rect(475, 620, 110, 10, 5);
rect(655, 620, 110, 10, 5);
rect(835, 620, 110, 10, 5);
rect(1015, 620, 110, 10, 5);
rect(1195, 620, 110, 10, 5);

//Doe nummers boven bomen, is beter te zien.
noStroke();
fill("brown");
rect(50, 400, 23, 180);
fill("green");
circle(50, 360, 100);
fill("darkgreen");
circle(60, 350, 100);
fill("forestgreen");
circle(65, 365, 100);

//Tree 1
fill("brown");  //Laat bladeren op volgorde bewegen misschien, niet door elkaar.
rect(150, 400, 23, 180);
fill("green");
circle(150, 360, 100);
fill("darkgreen");
circle(160, 350, 100);
fill("forestgreen");
circle(165, 365, 100);
//Tree 2
fill("brown");
rect(350, 400, 23, 180);
fill("green");
circle(350, 360, 100);
fill("darkgreen");
circle(360, 350, 100);
fill("forestgreen");
circle(365, 365, 100);
//Tree 3
fill("brown");
rect(650, 400, 23, 180);
fill("green");
circle(650, 360, 100);
fill("darkgreen");
circle(660, 350, 100);
fill("forestgreen");
circle(665, 365, 100);
//Tree vier zit voor de autos

//Stoplight 7
fill(50); //0-255 zonder de andere is gewoon greyscale, 255 is wit.
rect(770, 300, 60, 150);
rect(790, 430, 20, 150, 10);
stroke("black");
fill("green");
circle(800, 330, 35);
fill("orange");
circle(800, 372, 35);
fill("red");
circle(800, 414, 35);

//Cars 6 (traffic and stuff)
noStroke();
fill("red"); //Verwijder wat autos anders te veel
rect(0 + car1, 490, 130, 90, 15);
rect(105 + car1, 530, 50, 50, 15);
fill(50);
circle(35 + car1, 580, 40);
circle(120 + car1, 580, 40);
//Car 2
fill("blue");
rect(0 + car2, 490, 130, 90, 15); //Extra nummer (15) is hoe glad de rand is. Zo x, x, x, x, 15
rect(105 + car2, 530, 50, 50, 15);
fill(50);
circle(35 + car2, 580, 40);
circle(120 + car2, 580, 40);
//Car 3 THE BEST ONE, make it the quickest 
fill("teal");
rect(0 + carGOAT, 530, 130, 90, 15);
rect(105 + carGOAT, 570, 50, 50, 15);
fill(50);
circle(35 + carGOAT, 620, 40);
circle(120 + carGOAT, 620, 40);
//Car 4 (low)
fill("yellow");
rect(0 + car4, 530, 130, 90, 15);
rect(105 + car4, 570, 50, 50, 15);
fill(50);
circle(35 + car4, 620, 40);
circle(120 + car4, 620, 40); 
//KEEP IN CASE!! Car 5 (low) fill("white"); rect(900, 530, 130, 90, 15); rect(1005, 570, 50, 50, 15); fill(50); 
//circle(935, 620, 40); MISSING one wheel!!

//Tree 4 
//Tree 4, misschien een beetje opgetyft of oneven vergeleken met andere
noStroke();
fill("brown");
rect(450, 550, 23, 180);
fill("green");
circle(450, 510, 100);
fill("darkgreen");
circle(460, 500, 100);
fill("forestgreen");
circle(465, 515, 100);

cloud1 = cloud1 +0.5; //De snelheid, elke keer komt 0.5 pixels erbij ofzo

if (cloud1 > 1100) {  //Canvas is 1000 als het buiten 1100 canvas gaat reset het naar -100
  cloud1 = -100;         //Uitleg 2: > is voor als het groter dan (buiten canvas gaat) reset
}

cloud2 = cloud2 +1;

if (cloud2 > 1100) {
  cloud2 = -100;
}

cloud3 = cloud3 +0.8;

if (cloud3 > 1100) {
  cloud3 = -100;
}

cloud4 = cloud4 +1.4;

if (cloud4 > 1100) {
  cloud4 = -100;
}

sunX = sunX +0.3;

if (sunX > 1100) {
  sunX = -100;
}

car1 = car1 +7;

if (car1 > 1100) {
  car1 = -200;
}

car2 = car2 +6;

if (car2 > 1100) {
  car2 = -200;
}

carGOAT = carGOAT +10;

if (carGOAT > 1100) {
  carGOAT = -200;
}

car4 = car4 +6.5;

if (car4 > 1100) {
  car4 = -200;
}

}
