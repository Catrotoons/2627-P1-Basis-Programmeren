let optellen = a + b;
let aftellen = a - b;
let vermenigvuldigen = a * b;
let delen = a / b;

function setup() {
  createCanvas(1000, 660); //Adding the order of the parts I did. Could be interesting to look back at idk.
}

function draw() {
  background("lightblue");

  //Mountains 4
  triangle(200, 600, 600, 600, 400, 100);
  
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

//Tree 4, I can't tell if this one is not the same as the other ones, might've flunked it a bit.
fill("brown");
rect(450, 550, 23, 180);
fill("green");
circle(450, 510, 100);
fill("darkgreen");
circle(460, 500, 100);
fill("forestgreen");
circle(465, 515, 100);





}
