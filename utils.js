"use strict";
// Beige only
function beige() {
  // Process
  let r2 = "250"
  let g2 = "220";
  let b2 = "202";

  // Output
  return `rgb(${r2}, ${g2}, ${b2})`;
}

// Yellow only
function yellow() {
  // Process
  let r3 = "255";
  let g3 = "239";
  let b3 = "100";

  // Output
  return `rgb(${r3}, ${g3}, ${b3})`;
}

// Blue only
function blue(r, g, b) {
  // Process
  let r4 = "26";
  let g4 = "167";
  let b4 = "236";

  // Output
  return `rgb(${r4}, ${g4}, ${b4})`;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initializeSvg() {
  let svg = document.getElementById("base-svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  return svg;
}

function createPacman(svg) {
  let pacman = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  pacman.setAttribute("r", 40);
  pacman.setAttribute("cx", 100);
  pacman.setAttribute("cy", 40);
  pacman.setAttribute("fill", beige());
  svg.appendChild(pacman);
  return pacman;
}

// For random color generating between blue and yellow
// Create an "odd" and "even" function using arrays and ranges

class Square {
  constructor(svg, width, height) {
    this.svg = svg;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.create();
  }

  create() {
    let obstacleSize = randomIntFromInterval(10, 20);

    let obstacle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    obstacle.setAttribute("width", obstacleSize);
    obstacle.setAttribute("height", obstacleSize);

    const x = randomIntFromInterval(100, this.width);
    const y = randomIntFromInterval(100, this.height);
    obstacle.setAttribute("x", x);
    obstacle.setAttribute("y", y);

    this.obstacle = obstacle;
    this.svg.appendChild(obstacle);
  }

  // store the color as a propety of the class
  setColor(color) {
    this.color = color;
    this.obstacle.setAttribute("fill", color);
  }

  // Is a point in a square?
  isPointInside(x, y) {
    if (x > this.x && y > this.y && x < this.x + this.size && y < this.y + this.size) {
      return true
    } else {
      return false
    }
  }
}

function generateRandomObstacle(svg, width, height) {
  return new Square(svg, width, height);
}

function distance2d(x1, y1, x2, y2) {
  return Math.sqrt(
    (x2 - x1) ** 2 +
    (y2 - y1) ** 2
  );
}


/*
// This generates different sized squares
function generateRandomObstacle(svg, obstacleCoords) {
  let obstacleSize = randomIntFromInterval(10,20);

  let obstacle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  obstacle.setAttribute("width", obstacleSize);
  obstacle.setAttribute("height", obstacleSize);

  // Positions
  const x = randomIntFromInterval(100, width);
  const y = randomIntFromInterval(100, height);
  obstacle.setAttribute("x", x);
  obstacle.setAttribute("y", y);

  //start of the new color code
  //have to ensure the varaible is a width or a number 
  // const totalObstacles = obstacleCoords.length;
  // const halfObstacles = Math.floor(totalObstacles / 2);
  // //We need to change the logic inside the if statement cause right now it only gives one result. The second color. 
  // if (obstacleCoords.length < halfObstacles) {
  //   obstacle.setAttribute("fill", yellow());
  // } else {
  //   obstacle.setAttribute("fill", blue());
  // }

  // Add the obstacle to the SVG canvas
  svg.appendChild(obstacle);

  return obstacle;

  // Color of the people - previous code below, this has now been replaced by if else code above
  //obstacle.setAttribute("fill", blue()); // I think this can be makeRGB() but limit the RGB code to just 2 colors

  // Is this padding that makes the character hit the squares?
  const widthPadding = obstacleSize * 0.7;
  const heightPadding = obstacleSize * 0.7;
  
  obstacleCoords.push({
    xMin: x - widthPadding,
    xMax: x + obstacleSize + widthPadding,
    yMin: y - heightPadding,
    yMax: y + obstacleSize + heightPadding,
  });
  svg.appendChild(obstacle);
  return obstacleCoords;
} */
