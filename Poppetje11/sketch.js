function setup() {
  createCanvas(800, 600);
  
}

function draw() {
  background("teal"); 

  circle(400, 200, 200);

  rect(300, 300, 200, 300);

  circle(340, 200, 50);

  circle(460, 200, 50);

  line(300, 300, 100, 100);

  line(500, 300, 700, 100); //Strokeweight(5) is how thick the line is. Stroke is the color of the line. 
  //stroke is de rand en strokeweight is de dikte. Nostroke disables the stroke shit.
}
