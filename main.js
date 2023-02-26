// Animated Spirals

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Canvas Shadows
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowColor = "black";
ctx.shadowBlur = 5;

class Line {
  // Declaration of the variables used to create one Line: Start/End Position, Line Width, Color, Path and MaxLength of the Path
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.history = [{ x: this.x, y: this.y }];
    this.lineWidth = Math.floor(Math.random() * 15 + 1);
    this.hue = Math.floor(Math.random() * 360);
    this.maxLength = Math.floor(Math.random() * 150 + 10);
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = 7;
    this.lifeSpan = this.maxLength * 2;
    this.timer = 0;
    this.angle = 0;
    this.curve = 0.05;
    this.velocityCurve = 0.05;
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
    this.timer++;
    this.angle += 0.1;
    this.curve += this.velocityCurve;
    if (this.timer < this.lifeSpan) {
      this.x += Math.sin(this.angle) * this.curve;
      this.y += Math.cos(this.angle) * this.curve;
      this.history.push({ x: this.x, y: this.y });
      if (this.history.length > this.maxLength) {
        this.history.shift();
      }
    } else if (this.history.length <= 1) {
      this.reset();
    } else {
      this.history.shift();
    }
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.history = [{ x: this.x, y: this.y }];
    this.timer = 0;
    this.angle = 0;
    this.curve = 0;
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
