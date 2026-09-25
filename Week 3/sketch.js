//Variabelen
let tile1 = 0; //Tile waardes gewoon op 0 zodat waarde 1 voor blauw is en 2 voor rood is wanneer je klikt.
let tile2 = 0;
let tile3 = 0;
let tile4 = 0;
let tile5 = 0;
let tile6 = 0;
let tile7 = 0;
let tile8 = 0;
let tile9 = 0;
let beurt = 1;
let redturn
let winnaar = 0;

function setup() {
  createCanvas(900, 650);
}

function draw() {
  background(237, 81, 81);

  //Achtergrond
  noStroke();
  fill(67, 178, 240);
  rect(450, 0, 500, 900);
  fill(27, 19, 48);
  rect(440, 0, 10, 900);
  square(230, 120, 430, 20);

  //Aesthetic border
  rect(0, 640, 900, 100);
  rect(0, 0, 900, 10);
  
  //Start knop
  textSize(70);
  strokeWeight(10);
  fill(27, 19, 48);
  rect(720, 550, 150, 60, 20);
  fill(241, 237, 255);
  textSize(30);
  text("Restart", 745, 590);
  
  //Text red/blue (1)-
  strokeWeight(3);
  stroke("black");
  fill(241, 237, 255);
  if (beurt === 1) {
  }

  stroke(27, 19, 48);
  
  //Einde game
  textSize(70);
  if (winnaar === 1) {
    text("Player 1 has won!", 180, 80);
  } else if (winnaar === 2) {
    text("Player 2 has won!", 180, 80);
  } else if  (winnaar === 3) {
    text("Tie!", 380, 80);
  } else {
  
  //-Text red/blue (2)
  textSize(70);  
  if (beurt === 1) {
    text("Blue's turn!", 270 ,80);
  }  else if (beurt === 2) {
    text("Red's turn!", 280 ,80);
  }
  }

  //Tile 1
  if (tile1 === 1) { //Uitleg voor zelf: Als tile1 gelijk is aan 1 dan wordt het blauw (dus als je erop klikt) anders is hover gewoon rood en als er niks op zit is het wit.
    fill(102, 212, 255);
  }
  else if(tile1 === 2){
    fill(247, 127, 109)
  }
  else if (mouseX > 240 && mouseX < 240 + 130 && mouseY > 130 && mouseY < 130 + 130 && tile1 === 0) {
    fill(208, 202, 230);
  } else {
    fill(241, 237, 255);
  }  //Rood als muis erop hovert anders gewoon wit, MouseYveltal en MouseXerneas
square(240, 130, 130, 20);

  //Tile 2
  if (tile2 === 1) {
    fill(102, 212, 255);
  } 
  else if(tile2 === 2){
    fill(247, 127, 109)
  } else if (mouseX > 380 && mouseX < 380 + 130 && mouseY > 130 && mouseY < 130 + 130 && tile2 === 0) {
    fill(208, 202, 230);
  } else {
    fill(241, 237, 255);
  }
  square(380, 130, 130, 20);

  //Tile 3
  if (tile3 === 1) {
    fill(102, 212, 255);
  } else if(tile3 === 2){
    fill(247, 127, 109)
  } else if (mouseX > 520 && mouseX < 520 + 130 && mouseY > 130 && mouseY < 130 + 130 && tile3 === 0) {
    fill(208, 202, 230);
  } else {
    fill(241, 237, 255);
  }
  square(520, 130, 130, 20);

  //Tile 4
  if (tile4 === 1) {
    fill(102, 212, 255);
  } else if(tile4 === 2){
    fill(247, 127, 109)
  } else if (mouseX > 240 && mouseX < 240 + 130 && mouseY > 270 && mouseY < 270 + 130 && tile4 === 0) {
    fill(208, 202, 230);
  } else {
    fill(241, 237, 255);
  }
  square(240, 270, 130, 20);

  //Tile 5
  if (tile5 === 1) {
    fill(102, 212, 255);
  } else if(tile5 === 2){
    fill(247, 127, 109)
  } else if (mouseX > 380 && mouseX < 380 + 130 && mouseY > 270 && mouseY < 270 + 130 && tile5 === 0) {
    fill(208, 202, 230);
  } else {
    fill(241, 237, 255);
  }
  square(380, 270, 130, 20);

  //Tile 6
  if (tile6 === 1) {
    fill(102, 212, 255);
  } else if(tile6 === 2){
    fill(247, 127, 109)
  } else if (mouseX > 520 && mouseX < 520 + 130 && mouseY > 270 && mouseY < 270 + 130 && tile6 === 0) {
    fill(208, 202, 230);
  } else {
    fill(241, 237, 255);
  }
  square(520, 270, 130, 20);

  //Tile 7
  if (tile7 === 1) {
    fill(102, 212, 255);
  } else if(tile7 === 2){
    fill(247, 127, 109)
  } else if (mouseX > 240 && mouseX < 240 + 130 && mouseY > 410 && mouseY < 410 + 130 && tile7 === 0) {
    fill(208, 202, 230);
  } else {
    fill(241, 237, 255);
  }
  square(240, 410, 130, 20);

  //Tile 8
  if (tile8 === 1) {
    fill(102, 212, 255);
  } else if(tile8 === 2){
    fill(247, 127, 109)
  } else if (mouseX > 380 && mouseX < 380 + 130 && mouseY > 410 && mouseY < 410 + 130 && tile8 === 0) {
    fill(208, 202, 230);
  } else {
    fill(241, 237, 255);
  }
  square(380, 410, 130, 20);

  //Tile 9
  if (tile9 === 1) {
    fill(102, 212, 255);
  } else if(tile9 === 2){
    fill(247, 127, 109)
  } else if (mouseX > 520 && mouseX < 520 + 130 && mouseY > 410 && mouseY < 410 + 130 && tile9 === 0) {
    fill(208, 202, 230);
  } else {
    fill(241, 237, 255);
  }
  square(520, 410, 130, 20);

}

//MousePressed area:
function mousePressed() {

  if (mouseX > 720 && mouseX < 870 && mouseY > 550 && mouseY < 610) {
    tile1 = 0
    tile2 = 0
    tile3 = 0
    tile4 = 0
    tile5 = 0
    tile6 = 0 
    tile7 = 0
    tile8 = 0
    tile9 = 0
  if (winnaar = 0) { 
    return;
  }
}

if (winnaar !== 0) { return; }

  //Klikken
  if (mouseX > 240 && mouseX < 240 + 130 && mouseY > 130 && mouseY < 130 + 130 && tile1 === 0) { //Als je klikt nu wordt het blauw, beetje zelfde code als hover maar dan met mousePressed
    tile1 = beurt;
    beurt = beurt + 1;
    if (beurt === 3) {
      beurt = 1;
    }
  }
  if (mouseX > 380 && mouseX < 380 + 130 && mouseY > 130 && mouseY < 130 + 130 && tile2 === 0) {
    tile2 = beurt;
    beurt = beurt + 1;
    if (beurt === 3) {
      beurt = 1;
    }
  }
  if (mouseX > 520 && mouseX < 520 + 130 && mouseY > 130 && mouseY < 130 + 130 && tile3 === 0) {
    tile3 = beurt;
    beurt = beurt + 1;
    if (beurt === 3) {
      beurt = 1;
    }
  }
  if (mouseX > 240 && mouseX < 240 + 130 && mouseY > 270 && mouseY < 270 + 130 && tile4 === 0) {
    tile4 = beurt;
    beurt = beurt + 1;
    if (beurt === 3) {
      beurt = 1;
    }
  }
  if (mouseX > 380 && mouseX < 380 + 130 && mouseY > 270 && mouseY < 270 + 130 && tile5 === 0) {
    tile5 = beurt;
    beurt = beurt + 1;
    if (beurt === 3) {
      beurt = 1;
    }
  }
  if (mouseX > 520 && mouseX < 520 + 130 && mouseY > 270 && mouseY < 270 + 130 && tile6 === 0) {
    tile6 = beurt;
    beurt = beurt + 1;
    if (beurt === 3) {
      beurt = 1;
    }
  }
  if (mouseX > 240 && mouseX < 240 + 130 && mouseY > 410 && mouseY < 410 + 130 && tile7 === 0) {
    tile7 = beurt;
    beurt = beurt + 1;
    if (beurt === 3) {
      beurt = 1;
    }
  }
  if (mouseX > 380 && mouseX < 380 + 130 && mouseY > 410 && mouseY < 410 + 130 && tile8 === 0) {
    tile8 = beurt;
    beurt = beurt + 1;
    if (beurt === 3) {
      beurt = 1;
    }
  }
  if (mouseX > 520 && mouseX < 520 + 130 && mouseY > 410 && mouseY < 410 + 130 && tile9 === 0) {
    tile9 = beurt;
    beurt = beurt + 1;
    if (beurt === 3) {
      beurt = 1;
    }
  }

  //Winnaar 1
    if (tile1 === 1 && tile2 === 1 && tile3 === 1) { //De acht manieren waarop je kan winnen hier:
      winnaar = 1;
    }
    
if (tile4 === 1 && tile5 === 1 && tile6 === 1) {
      winnaar = 1;
    }

    if (tile7 === 1 && tile8 === 1 && tile9 === 1) {
      winnaar = 1;
    }

    if (tile1 === 1 && tile4 === 1 && tile7 === 1) {
      winnaar = 1;
    }

    if (tile2 === 1 && tile5 === 1 && tile8 === 1) {
      winnaar = 1;
    }

    if (tile3 === 1 && tile6 === 1 && tile9 === 1) {
      winnaar = 1;
    }

if (tile1 === 1 && tile5 === 1 && tile9 === 1) {
      winnaar = 1;
    }

if (tile7 === 1 && tile5 === 1 && tile3 === 1) {
      winnaar = 1;
    }
    
    //Winnaar 2
if (tile1 === 2 && tile2 === 2 && tile3 === 2) { //De acht manieren waarop je kan winnen hier:
      winnaar = 2;
    }
    
if (tile4 === 2 && tile5 === 2 && tile6 === 2) {
      winnaar = 2;
    }

    if (tile7 === 2 && tile8 === 2 && tile9 === 2) {
      winnaar = 2;
    }

    if (tile1 === 2 && tile4 === 2 && tile7 === 2) {
      winnaar = 2;
    }

    if (tile2 === 2 && tile5 === 2 && tile8 === 2) {
      winnaar = 2;
    }

    if (tile3 === 2 && tile6 === 2 && tile9 === 2) {
      winnaar = 2;
    }

if (tile1 === 2 && tile5 === 2 && tile9 === 2) {
      winnaar = 2;
    }

if (tile7 === 2 && tile5 === 2 && tile3 === 2) {
      winnaar = 2;
    }

    if (tile1 !== 0 && tile2 !== 0 && tile3 !== 0 && tile4 !== 0 && tile5 !== 0 && tile6 !== 0 && tile7 !== 0 && tile8 !== 0 && tile9 !== 0 && winnaar === 0) {
  winnaar = 3

  }

}






