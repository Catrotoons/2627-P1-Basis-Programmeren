let optellen = a + b;
let aftellen = a - b;
let vermenigvuldigen = a * b;
let delen = a / b;

function setup() {
  createCanvas(1000, 660); //Adding the order of the parts I did. Could be interesting to look back at idk.
}

function draw() {
  background("lightblue");

//Sun 6 
noStroke();
fill("orange");
circle(750, 80, 125);
fill("yellow");
circle(750, 80, 100);

  //Clouds 5
noStroke();
fill(210, 230 , 255);
circle(100, 90, 100);
circle(140, 90, 80);
circle(60, 90, 80);
fill("white");
circle(100, 100, 100);
circle(140, 100, 80);
circle(60, 100, 80);
//Cloud 2
fill(210, 230 , 255);
circle(300, 140, 100);
circle(340, 140, 80);
circle(260, 140, 80);
fill("white");
circle(300, 150, 100);
circle(340, 150, 80);
circle(260, 150, 80);
//Cloud3
fill(210, 230 , 255);
circle(600, 90, 100);
circle(640, 90, 80);
circle(560, 90, 80);
fill("white");
circle(600, 100, 100);
circle(640, 100, 80);
circle(560, 100, 80);
//Cloud4
fill(210, 230 , 255);
circle(900, 140, 100);
circle(940, 140, 80);
circle(860, 140, 80);
fill("white");
circle(900, 150, 100);
circle(940, 150, 80);
circle(860, 150, 80);


  //Mountains 4 
  strokeWeight(2);
  stroke("black");
  fill(75);
  triangle(200, 600, 600, 600, 400, 100);
  fill(110);
  triangle(400, 600, 1000, 600, 750, 300);
  fill(150);
  triangle(50, 600, 350, 600, 200, 350); //They look like shit

  
  //Grass 2
noStroke();
fill("darkgreen");
rect(0, 570, 1000, 1000);
fill("green");
rect(0, 577, 1000, 1000);

  //Road and road stripes. (Keep infront of the grass) 1
stroke(100);
fill(80);
rect(0, 585, 1000, 1000);
stroke(100);
fill(100);
rect(0, 590, 1000, 1000);
noStroke();
fill("white");
rect(-60, 620, 110, 10, 5); //Stripes
rect(115, 620, 110, 10, 5);
rect(295, 620, 110, 10, 5);
rect(475, 620, 110, 10, 5);
rect(655, 620, 110, 10, 5);
rect(835, 620, 110, 10, 5);
rect(1015, 620, 110, 10, 5);
rect(1195, 620, 110, 10, 5);

//Trees (Space between each tree to make it easier to see.) 3
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
fill("brown");
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
//Tree four is infront of the cars.

//Cars 6 (traffic and stuff)
fill("red");
rect(45, 490, 130, 90, 15);
rect(150, 530, 50, 50, 15);
fill(50);
circle(80, 580, 40);
circle(165, 580, 40);
//Car 2
fill("blue");
rect(295, 490, 130, 90, 15);
rect(400, 530, 50, 50, 15);
fill(50);
circle(330, 580, 40);
circle(415, 580, 40);
//Car 3
fill("teal");
rect(795, 490, 130, 90, 15);
rect(900, 530, 50, 50, 15);
fill(50);
circle(830, 580, 40);
circle(915, 580, 40);
//Car 4 (low)
fill("yellow");
rect(400, 530, 130, 90, 15);
rect(505, 570, 50, 50, 15);
fill(50);
circle(435, 620, 40);
circle(520, 620, 40);
//Car 5 (low)
fill("white");
rect(900, 530, 130, 90, 15);
rect(1005, 570, 50, 50, 15);
fill(50);
circle(935, 620, 40);
circle(102, 620, 40);

//Stoplight 7
fill(50);
rect(770, 300, 60, 150);
rect(790, 430, 20, 150, 10);
stroke("black");
fill("green");
circle(800, 330, 35);
fill("orange");
circle(800, 372, 35);
fill("red");
circle(800, 414, 35);

//Tree 4 
//Tree 4, I can't tell if this one is not the same as the other ones, might've flunked it a bit.
noStroke();
fill("brown");
rect(450, 550, 23, 180);
fill("green");
circle(450, 510, 100);
fill("darkgreen");
circle(460, 500, 100);
fill("forestgreen");
circle(465, 515, 100);






}
