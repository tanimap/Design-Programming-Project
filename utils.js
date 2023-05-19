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

function gray(r, g, b) {
  // Process
  let r4 = "222";
  let g4 = "214";
  let b4 = "204";

  // Output
  return `rgb(${r4}, ${g4}, ${b4})`;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
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

// this can be improved:
// - check if x and y are already overlapping an existing obstacle.
// - random shapes / sizes
function generateRandomObstacle(svg, obstacleCoords) {
  const obstacleWidth = 50;
  const obstacleHeight = 50;
  let obstacle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  obstacle.setAttribute("width", obstacleWidth);
  obstacle.setAttribute("height", obstacleHeight);
  const x = randomIntFromInterval(40, width);
  const y = randomIntFromInterval(40, height);
  obstacle.setAttribute("x", x);
  obstacle.setAttribute("y", y);
  obstacle.setAttribute("fill", gray());
  const widthPadding = obstacleWidth * 0.7;
  const heightPadding = obstacleHeight * 0.7;
  obstacleCoords.push({
    xMin: x - widthPadding,
    xMax: x + obstacleWidth + widthPadding,
    yMin: y - heightPadding,
    yMax: y + obstacleHeight + heightPadding,
  });
  svg.appendChild(obstacle);
  return obstacleCoords;
}
