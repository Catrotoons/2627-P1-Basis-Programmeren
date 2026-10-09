let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let kleurnoppen = [];
let huidigeAchtergrond = "white"; 
let afbeeldingen = [];
let dierknoppen = [];
let actieveAfbeeldingIndex = -1;

function preload() {
  // Loop door alle dierennamen in de bestanden-lijst
  for (let i = 0; i < bestanden.length; i++) {
    let pad = "assets/" + bestanden[i] + ".png"; //Assets = naam van mijn map, De naam van het dier uit array op positie i, De bestands type van het plaatje.
    let img = loadImage(pad);
    afbeeldingen.push(img);
  }
}

function setup() {
  createCanvas(800, 400);

  for (let i = 0; i < kleuren.length; i++) { //Loopt door alle kleuren heen om knoppen te maken
    let Button1 = createButton(kleuren[i]); //Maakt de knop met de tekst van de kleur
    Button1.style('background-color', kleuren[i]); //Geef de knop zijn eigen achtergrondkleur
    Button1.position(10 + (i * 100), 50);  //Zet de knoppen netjes naast elkaar op het scherm
    kleurnoppen.push(Button1);

    Button1.mousePressed(() => { //Als je op deze knop klikt, verandert de achtergrondkleur
      huidigeAchtergrond = kleuren[i]; //Sla de knop op in de lijst kleurnoppen
    });
  }

  // De for-loop voor de dierenknoppen staat in de setup()
  for (let i = 0; i < bestanden.length; i++) {
    let dierKnop = createButton(bestanden[i]);
    dierKnop.position(10 + (i * 75), 150);

    dierKnop.mousePressed(() => { 
       actieveAfbeeldingIndex = i;
    });
    dierknoppen.push(dierKnop);
  }
}

function draw() {
  background(huidigeAchtergrond);

  for (let i = 0; i < kleurnoppen.length; i++) { 
    if (kleuren[i] === huidigeAchtergrond) { //Als de kleur van de knop hetzelfde is als de achtergrond-
      kleurnoppen[i].hide(); //Verberg de knop
    } else { 
      kleurnoppen[i].show(); //Anders laat de knop zien
    }
  }

  // De check om de actieve dierenknop te verbergen en de rest te tonen
  for (let i = 0; i < dierknoppen.length; i++) {
    if (i === actieveAfbeeldingIndex) {
      dierknoppen[i].hide();
    } else {
      dierknoppen[i].show();
    }
  }

  if (actieveAfbeeldingIndex > -1) {
    image(afbeeldingen[actieveAfbeeldingIndex], 300, 200, 150, 150);
  }
}


