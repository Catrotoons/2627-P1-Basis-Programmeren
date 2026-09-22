let tile1 = 0;
let tile2 = 0;
let tile3 = 0;
let tile4 = 0;
let tile5 = 0;
let tile6 = 0;
let tile7 = 0;
let tile8 = 0;
let tile9 = 0;

function setup() {
  createCanvas(900, 650);
}

function draw() {
  background("red");

noStroke();
fill("blue");
  rect(450, 0, 500, 900);

  fill("black");
  rect(440, 0, 10, 900);

  square(230, 120, 430, 20);

  if (mouseX > 240 && mouseX < 240 + 130 && mouseY > 130 && mouseY < 130 + 130 && tile1 === 0) {  //Laat de kleur veranderen als de muis hovert erover
 fill("red"); 
} else fill("white"); //Rood als muis erop hovert anders gewoon wit, MouseYveltal en MouseXerneas
  square(240, 130, 130, 20);
  if (mouseX > 380 && mouseX < 380 + 130 && mouseY > 130 && mouseY < 130 + 130 && tile2 === 0) { 
 fill("red"); 
} else fill("white");
  square(380, 130, 130, 20);
  if (mouseX > 520 && mouseX < 520 + 130 && mouseY > 130 && mouseY < 130 + 130 && tile3 === 0) { //tile1 === 0 betekent: Is vakje 1 nog leeg?
 fill("red"); 
} else fill("white");
  square(520, 130, 130, 20);
  
  if (mouseX > 240 && mouseX < 240 + 130 && mouseY > 270 && mouseY < 270 + 130 && tile4 === 0) { 
 fill("red"); 
} else fill("white");
  square(240, 270, 130, 20);
  if (mouseX > 380 && mouseX < 380 + 130 && mouseY > 270 && mouseY < 270 + 130 && tile5 === 0) { 
 fill("red"); 
} else fill("white");
  square(380, 270, 130, 20);
  if (mouseX > 520 && mouseX < 520 + 130 && mouseY > 270 && mouseY < 270 + 130 && tile6 === 0) { 
 fill("red"); 
} else fill("white");
  square(520, 270, 130, 20);

  if (mouseX > 240 && mouseX < 240 + 130 && mouseY > 410 && mouseY < 410 + 130 && tile7 === 0) { 
 fill("red"); 
} else fill("white");
  square(240, 410, 130, 20);
  if (mouseX > 380 && mouseX < 380 + 130 && mouseY > 410 && mouseY < 410 + 130 && tile8 === 0) { 
 fill("red"); 
} else fill("white");
  square(380, 410, 130, 20);
  if (mouseX > 520 && mouseX < 520 + 130 && mouseY > 410 && mouseY < 410 + 130 && tile9 === 0) { 
 fill("red"); 
} else fill("white");
  square(520, 410, 130, 20);

  if (tile1 === 1) { 
   fill("blue");
  } else (mouseX > 240 && mouseX < 240 + 130 && mouseY > 130 && mouseY < 130 + 130)


}

function mousePressed () {
  tile1 = 1; }

