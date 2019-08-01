var SliderAmplitude;
var SliderFrequency;
var SliderPhase;
var SliderBias;
var funktion;
var Dsign = '+';
var Csign = '-';

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight - 320);
  canvas.parent('sketch-div');
  noFill();
  SliderAmplitude = document.getElementById('SliderAmplitude');
  SliderFrequency = document.getElementById('SliderFrequency');
  SliderPhase = document.getElementById('SliderPhase');
  SliderBias = document.getElementById('SliderBias');
  funktion = createElement('h1', 'f(x)=sin(x*' + SliderAmplitude.value + ')');
}

function draw() {
  translate(width / 2, height / 2);
  background(255);
  if (SliderBias.value < 0) { Dsign = '-'; } else { Dsign = '+'; }
  if (SliderPhase.value < 0) { Csign = '+'; } else { Csign = '-'; }
  funktion.html('f(x)=' + SliderAmplitude.value / 10 + '*sin(' + SliderFrequency.value / 10 + '*x' + Csign + abs(SliderPhase.value) + ')' + Dsign + abs(SliderBias.value / 100));
  strokeWeight(2);
  line(0, height, 0, -height);
  line(-width, 0, width, 0);
  var a = SliderAmplitude.value / 10, b = SliderFrequency.value / 10, c = SliderPhase.value, d = SliderBias.value / 100;
  strokeWeight(4);
  stroke(0, 50);
  beginShape()//normal sine function for comparison
  for (var x = -width; x < width / 2; x += 2) {
    var output = (-1 * sin(radians(1 * x - 0)) - 0) * (100 - 4 * 2);
    vertex(x, output);
  }
  endShape();
  stroke(0);
  beginShape()
  for (var x = -width; x < width / 2; x += 2) {
    var output = (-a * sin(radians(b * x - c)) - d) * (100 - 4 * 2);
    vertex(x, output);
  }
  endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 320);
}
