let dobblesteenwaarde = 1;

function setup() {
  createCanvas(1000, 600);
  
}

function draw() {
  background("teal"); 

if (dobblesteenwaarde === 1) {
circle(350, 170, 80);   
}

if (dobblesteenwaarde === 2) {
  circle(350, 170, 80);
  circle(350, 300, 80);
}

if (dobblesteenwaarde === 3) {
  circle(350, 170, 80);
  circle(350, 300, 80);
  circle(350, 430, 80);
}

if (dobblesteenwaarde === 4) {
  circle(350, 170, 80);
  circle(350, 300, 80);
  circle(350, 430, 80);
  circle(610, 170, 80);

}

if (dobblesteenwaarde === 5) {
  circle(350, 170, 80);
  circle(350, 300, 80);
  circle(350, 430, 80);
  circle(610, 170, 80);
  circle(610, 300, 80);
}

if (dobblesteenwaarde === 6) {
  circle(350, 170, 80);
  circle(350, 300, 80);
  circle(350, 430, 80);
  circle(610, 170, 80);
  circle(610, 300, 80);
  circle(610, 430, 80);

}

  fill("white");
  strokeWeight(8);
  square(280, 100, 400, 15);
  fill("black");
  circle(350, 170, 80);
  circle(350, 300, 80);
  circle(350, 430, 80);
  circle(610, 170, 80);
  circle(610, 300, 80);
  circle(610, 430, 80);


}

function keyPressed (){
  (keyCode === 32);
}


let dobblesteenwaarde = random(1, 6);


