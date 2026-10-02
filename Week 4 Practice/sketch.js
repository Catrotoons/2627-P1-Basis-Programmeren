//Vormen voor beweging:
let circle1 = 0;
let circle2 = 0;
let circle3 = 0;
let circle4 = 0;
let square1 = 0;
let square2 = 0;
let square3 = 0;
let square4 = 0;

//Randomizen
let = circle1randomspeed = 0; //Speed
let = circle2randomspeed = 0;
let = circle3randomspeed = 0;
let = circle4randomspeed = 0;
let = square1randomspeed = 0;
let = square2randomspeed = 0;
let = square3randomspeed = 0;
let = square4randomspeed = 0;

let = circle1randomsize = 0; //Size
let = circle2randomsize = 0;
let = circle3randomsize = 0;
let = circle4randomsize = 0;
let = square1randomsize = 0;
let = square2randomsize = 0;
let = square3randomsize = 0;
let = square4randomsize = 0;


//let VormenAantal1 = (50); //Aantal vormen

function setup() {
  createCanvas(800, 600);

circle1randomspeed = int(random(5, 20)); //Randomizen locatie Xerneas
circle1randomlocatieX = int(random(0, 600));
circle1randomsize = int(random(50, 275));
circleX1 = int(random(0, 800));

circle2randomspeed = int(random(5, 20)); 
circle2randomlocatieX = int(random(0, 600));
circle2randomsize = int(random(50, 275));
circleX2 = int(random(0, 800));

circle3randomspeed = int(random(5, 20)); 
circle3randomlocatieX = int(random(0, 600));
circle3randomsize = int(random(50, 275));
circleX3 = int(random(0, 800));

circle4randomspeed = int(random(5, 20)); 
circle4randomlocatieX = int(random(0, 600));
circle4randomsize = int(random(50, 275));
circleX4 = int(random(0, 800));

square1randomspeed = int(random(5, 20)); 
square1randomlocatieX = int(random(0, 600));
square1randomsize = int(random(50, 250));
squareX1 = int(random(0, 800));

square2randomspeed = int(random(5, 20)); 
square2randomlocatieX = int(random(0, 600));
square2randomsize = int(random(50, 100));
squareX2 = int(random(0, 800));

square3randomspeed = int(random(5, 20)); 
square3randomlocatieX = int(random(0, 600));
square3randomsize = int(random(50, 250));
squareX3 = int(random(0, 800));

square4randomspeed = int(random(5, 20)); 
square4randomlocatieX = int(random(0, 600));
square4randomsize = int(random(50, 250));
squareX4 = int(random(0, 800));

}


function draw() {
  background(244, 240, 255);


//Circles and squares
strokeWeight(4);
stroke(39, 26, 71);

fill(255, 255, 255);
circle(circleX1, 0 + circle1, circle1randomsize);

fill(168, 188, 255);
circle(circleX2, 0 + circle2, circle2randomsize);

fill(99, 147, 255);
circle(circleX3, 0 + circle3, circle3randomsize);

fill(23, 127, 255);
circle(circleX4, 0 + circle4, circle4randomsize);

fill(255, 255, 255);
square(squareX1, 0 + square1, square1randomsize);

fill(184, 239, 255);
square(squareX2, 0 + square2, square2randomsize);

fill(112, 222, 255);
square(squareX3, 0 + square3, square3randomsize);

fill(38, 197, 255);
square(squareX4, 0 + square4, square4randomsize);

//Bewegingen vormen

circle1 = circle1 + circle1randomspeed;
if (circle1 > 800) {
  circle1 = -200;
circleX1 = int(random(0, 800)); 
circle1randomspeed = int(random(5, 20));
circle1randomsize = int(random(50, 275));
circle1randomlocatieX = int(random(0, 600));
}

circle2 = circle2 + circle2randomspeed;
if (circle2 > 800) {
  circle2 = -200;
circleX2 = int(random(0, 800)); 
circle2randomspeed = int(random(5, 20));
circle2randomsize = int(random(50, 275));
circle2randomlocatieX = int(random(0, 600));
}

circle3 = circle3 + circle3randomspeed;
if (circle3 > 800) {
  circle3 = -200;
circleX3 = int(random(0, 800)); 
circle3randomspeed = int(random(5, 20));
circle3randomsize = int(random(50, 275));
circle3randomlocatieX = int(random(0, 600));
}

circle4 = circle4 + circle4randomspeed;
if (circle4 > 800) {
  circle4 = -200;
circleX4 = int(random(0, 800));
circle4randomspeed = int(random(5, 20)); 
circle4randomsize = int(random(50, 275));
circle4randomlocatieX = int(random(0, 600));
}

square1 = square1 + square1randomspeed;
if (square1 > 800) {
  square1 = -200;
squareX1 = int(random(0, 800)); 
square1randomspeed = int(random(5, 20));
square1randomsize = int(random(50, 100));
square1randomlocatieX = int(random(0, 600));
}

square2 = square2 + square2randomspeed;
if (square2 > 800) {
  square2 = -200;
squareX2 = int(random(0, 800)); 
square2randomspeed = int(random(5, 20));
square2randomsize = int(random(50, 100));
square2randomlocatieX = int(random(0, 600));
}

square3 = square3 + square3randomspeed;
if (square3 > 800) {
  square3 = -200;
squareX3 = int(random(0, 800)); 
square3randomspeed = int(random(5, 20));
square3randomsize = int(random(50, 100));
square3randomlocatieX = int(random(0, 600));
}

square4 = square4 + square4randomspeed;
if (square4 > 800) {
  square4 = -200;
squareX4 = int(random(0, 800)); 
square4randomspeed = int(random(5, 20));
square4randomsize = int(random(50, 100));
square4randomlocatieX = int(random(0, 600));
}


}





