let i = 0
let PositieX7  = 630;
let breedte7 = 0
let breedte3 = 0

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(220);

fill("black");
  text("1.", 20, 15);
text("2.", 20, 105);
text("3.",  80, 105);
text("4.",  80, 205);
text("5.",  540, 20);
text("6.", 350, 105);
text("7.", 625, 105);

//1.

for (let i = 0; i < 10; i++) {
if (i === 6) {
  fill("blue");
} else { 
  fill("white");
}

  rect(i * 50, 20, 50, 50);
}

//2.
for (let i = 0; i < 5; i++) {
fill(i * 60);

  rect(20, 120 + (i * 50), 50);
}

//3.
let Opdracht3X = 90

for (let i = 0; i < 4; i++) {
  fill(0, i * 60, 0);
  
  rect(Opdracht3X, 120, (i + 1) * 25, 50);
  Opdracht3X = Opdracht3X + ((i + 1) * 25);
}

//4.
let Opdracht4X = 90

for (let i = 0; i < 4; i++) {
  fill(0, 0, 255 - (i * 75));
rect(Opdracht4X, 220, (i + 1) * 25, (i + 1) * 50);
Opdracht4X = Opdracht4X + ((i + 1) * 25);
}

//5.
let Opdracht5X = 575;

for (let i = 0; i < 6; i++) {
  strokeWeight(0 + (i * 2.5));
fill("white");

circle(Opdracht5X, 50, 50);
Opdracht5X = Opdracht5X + 65;
}

strokeWeight(1);

//6.
let = Opdracht6IDK = 270;

for (let i = 0; i < 10; i++) {
if (i % 2 === 0) {
  fill("red");
} else {
  fill("white");
}
circle(490, 270, Opdracht6IDK );
Opdracht6IDK = Opdracht6IDK - 30;
}

//7. 
PositieX7 = 630
for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    fill ("white");
  } else {
  fill(170); 
  }

  if (i < 11) {
breedte7 = 20 + (i * 12);
} else { 
  breedte7 = 140 - ((i - 10) * 12);
}

rect(625, 120 + (i * 15), breedte7, 15); 
}


strokeWeight(1);




}

