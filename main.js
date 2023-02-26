// Animated Lines

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Line {
  // Declaration of the variables used to create one Line: Start/End Position, Line Width, Color, Path and MaxLength of the Path
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.history = [{ x: this.x, y: this.y }];
    this.lineWidth = Math.floor(Math.random() * 15 + 1);
    this.hue = Math.floor(Math.random() * 360);
    this.maxLength = 5;
  }
  // The function for drawing one Line
  draw(context) {
    context.strokeStyle = "hsl(" + this.hue + ", 100%, 50%)";
    context.lineWidth = this.lineWidth;
    context.beginPath();
    context.moveTo(this.history[0].x, this.history[0].y);
    for (let i = 0; i < this.history.length; i++) {
      context.lineTo(this.history[i].x, this.history[i].y);
    }
    context.stroke();
  }
  // The function for updating a Line's path
  update() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.history.push({ x: this.x, y: this.y });
    if (this.history.length > this.maxLength) {
      this.history.shift();
    }
  }
}

// Initiation of the class, the amount of lines to be draw and the execution
const lineArrays = [];
const linesAmount = 3;
const line = new Line(canvas);

for (i = 0; i < linesAmount; i++) {
  lineArrays[i] = new Line(canvas);
}
lineArrays.forEach((line) => line.draw(ctx));

// Animating the whole process
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lineArrays.forEach((line) => {
    line.draw(ctx);
    line.update();
  });
  requestAnimationFrame(animate);
}
animate();
