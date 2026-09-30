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

strokeWeight(1);

//6.
for (let i = 0; i < 10; i++) {
fill(i * 255, 0, 0); 
//Cirkels
if (i === 0) {
  fill("red");
circle(490, 270, 270);
} else if (i === 1) {
  fill("white");
circle(490, 270, 240);
} else if (i === 2) {
  fill("red");
  circle(490, 270, 210);
} else if (i === 3) {
  fill("white");
  circle(490, 270, 180); 
} else if (i === 4) {
  fill("red");
  circle(490, 270, 150);
} else if (i === 5) {
  fill("white");
  circle(490, 270, 120);
} else if (i === 6) {
  fill("red");
  circle(490, 270, 90);
} else if (i === 7) {
  fill("white");
  circle(490, 270, 60); 
} else if (i === 8) {
  fill("red");
  circle(490, 270, 30);
} else if (i === 9) {
  fill("white");
  circle(490, 270, 10);
}

//7. 
for (let i = 0; i < 21; i++) {
  if(i === 0) {
    fill ("white");
    rect(630, 120, 10, 20);
  } else if (i === 1) {
    fill(170);
    rect(630, 140, 30, 20);
  } else if (i === 2) {
    fill("white");
    rect(630, 160, 50, 20);
  } else if (i === 3) {
    fill(170);
    rect(630, 180, 70, 20);
  } else if (i === 4) {
    fill("white");
    rect(630, 200, 90, 20);
  } else if (i === 5) {
    fill(170);
    rect(630, 220, 110, 20);
  } else if (i === 6) {
    fill("white");
    rect(630, 240, 130, 20);
  } else if (i === 7) {
    fill(170);
    rect(630, 260, 150, 20);
  } else if (i === 8) {
    fill("white");
    rect(630, 280, 170, 20);
  } else if (i === 9) {
    fill(170);
    rect(630, 300, 190, 20);
  } else if (i === 10) {
    fill("white");
    rect(630, 320, 210, 20);
  } else if (i === 11) {
    fill(170);
    rect(630, 340, 190, 20);
  } else if (i === 12) {
    fill("white");
    rect(630, 360, 170, 20);
  } else if (i === 13) {
    fill(170);
    rect(630, 380, 150, 20);
  } else if (i === 14) {
    fill("white");
    rect(630, 400, 130, 20);
  } else if (i === 15) {
    fill(170);
    rect(630, 420, 110, 20);
  } else if (i === 16) {
    fill("white");
    rect(630, 440, 90, 20);
  } else if (i === 17) {
    fill(170);
    rect(630, 460, 70, 20);
  } else if (i === 18) {
    fill("white");
    rect(630, 480, 50, 20);
  } else if (i === 19) {
    fill(170);
    rect(630, 500, 30, 20);
  } else if (i === 20) {
    fill("white");
    rect(630, 520, 10, 20);
  }
  
}



}

strokeWeight(1);

}

