// Random Lines

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Line {
// Declaration of the variables used to create one Line: Start/End Position, Line Width and Color
  constructor(canvas) {
    this.canvas = canvas;
    this.startX = Math.random() * this.canvas.width;
    this.startY = Math.random() * this.canvas.height;
    this.endX = Math.random() * this.canvas.width;
    this.endY = Math.random() * this.canvas.height;
    this.lineWidth = Math.floor(Math.random() * 15 + 1);
    this.hue = Math.floor(Math.random() * 360);
  }
  // The function for drawing one Line 
  draw(context) {
    context.strokeStyle = "hsl(" + this.hue + ",100%, 50%)";
    context.lineWidth = this.lineWidth;
    context.beginPath();
    context.moveTo(this.startX, this.startY);
    context.lineTo(this.endX, this.endY);
    context.stroke();
  }
}

// Initiation of the class, the amount of lines to be draw and the execution
const lineArrays = [];
const linesAmount = 30; 
const line = new Line(canvas);

for (i = 0; i < linesAmount; i++) {
  lineArrays[i] = new Line(canvas);
}
lineArrays.forEach((line) => line.draw(ctx));
