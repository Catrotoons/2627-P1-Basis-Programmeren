let i = 0


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
for (let i = 0; i < 4; i++) {
  fill(0, i * 60, 0);
//Blokken
if (i === 0) {
  rect(90, 120, 25, 50);
} else if (i === 1) {
  rect(115, 120, 50, 50);
} else if (i === 2) {
  rect(165, 120, 75, 50);
} else if (i === 3) {
  rect(240, 120, 100, 50);
}
}

//4.
for (let i = 0; i < 4; i++) {
  fill(0, 0, 255 - (i * 75));
//Blokken
  if (i === 0) {
    rect(90, 220, 25, 50);
  } else if (i === 1) {
    rect(115, 220, 50, 100);
  } else if (i === 2) {
    rect(165, 220, 75, 150);
  } else if (i === 3) {
    rect(240, 220, 100, 200);
  }
}

//5.
for (let i = 0; i < 6; i++) {
  strokeWeight(0 + (i * 2.5));
fill("white");
  //Cirkels
if (i === 0) {
  circle(575, 50, 50);
  } else if (i === 1) {
    circle(640, 50, 50);
  } else if (i === 2) {
    circle(705, 50, 50);
  } else if (i === 3) {
    circle(770, 50, 50);
  } else if (i === 4) {
    circle(835, 50, 50);
  } else if (i === 5) {
    circle(900, 50, 50);
  }
}

//6.
for (let i = 0; i < 10; i++) {

}

strokeWeight(1);

}

