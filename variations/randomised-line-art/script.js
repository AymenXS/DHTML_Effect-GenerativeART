// Randomised Line ART

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Line {
  constructor(canvas) {
    this.canvas = canvas;
    this.startX = Math.random() * this.canvas.width;
    this.startY = Math.random() * this.canvas.height;
    this.endX = Math.random() * this.canvas.width;
    this.endY = Math.random() * this.canvas.height;
    this.lineWidth = Math.floor(Math.random() * 15 + 1);
    this.hue = Math.floor(Math.random() * 360);
  }
  draw(context) {
    context.strokeStyle = "hsl(" + this.hue + ",100%, 50%)";
    context.lineWidth = this.lineWidth;
    context.beginPath();
    context.moveTo(this.startX, this.startY);
    context.lineTo(this.endX, this.endY);
    context.stroke();
  }
}

const lineArrays = [];
const linesAmount = 30;
const line = new Line(canvas);

for (i = 0; i < linesAmount; i++) {
  lineArrays[i] = new Line(canvas);
}
console.log(lineArrays);
lineArrays.forEach((line) => line.draw(ctx));
