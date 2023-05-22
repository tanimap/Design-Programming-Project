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
  pacman.setAttribute("cx", 40);
  pacman.setAttribute("fill", beige());
  svg.appendChild(pacman);
  return pacman;
}

// For random color generating between blue and yellow
// Create an "odd" and "even" function using arrays and ranges

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

  // Color of the people
  obstacle.setAttribute("fill", blue()); // I think this can be makeRGB() but limit the RGB code to just 2 colors

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
}
