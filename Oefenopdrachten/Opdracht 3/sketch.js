let score= ceil(random(100));  

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(200);

textSize(15);
text("Je score is tussen 80 en 90", 20, 40);
text("score" + score, 20, 20);

if (score >= 90) {
  text = fill("green:)")
  
  ("Uitstekend", 20, 20); 
}

}


