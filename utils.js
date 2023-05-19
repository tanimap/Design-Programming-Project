"use strict";
// Yellow only
function yellow() {
  // Process
  let r3 = "255";
  let g3 = "238";
  let b3 = "0";

  // Output
  return `rgb(${r3}, ${g3}, ${b3})`;
}

function gray(r, g, b) { // maybe this can be makeRGB() but only with 2 colors
  // Process
  let r4 = "222";
  let g4 = "214";
  let b4 = "204";

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
  pacman.setAttribute("fill", yellow());
  svg.appendChild(pacman);
  return pacman;
}

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
  obstacle.setAttribute("fill", gray()); // I think this can be makeRGB() but limit the RGB code to just 2 colors

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
