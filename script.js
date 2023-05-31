"use strict";

let gameContainer = document.getElementById("grid-item");

let width = gameContainer.clientWidth;
let height = gameContainer.clientHeight;

let svg = initializeSvg();
let pacman = createPacman(svg);
let obstacles = [];

for (let i = 0; i < 15; i++) {
  obstacles.push(generateRandomObstacle(svg, width, height));
}

let direction = Math.random() < 0.5 ? "horiz" : "vert";
let dx = randomIntFromInterval(3, 7); // controls speed
let dy = randomIntFromInterval(3, 7); // controls speed
let x = parseInt(pacman.getAttribute("cx"));
let y = parseInt(pacman.getAttribute("cy"));

function animate() {
  if (direction === "horiz") {
    x += dx;
  } else {
    y += dy;
  }
  pacman.setAttribute("cx", x);
  pacman.setAttribute("cy", y);

  if (x < 20 || x > width - 20) {
    dx = -dx;
  }

  if (y < 20 || y > height - 20) {
    dy = -dy;
  }

  // This detects collisions and will allow circle to change colors whenever it collides
  let collisionDetected = false;

  for (let i = 0; i < obstacles.length; i++) {
    let obstacle = obstacles[i];

    if (obstacle.isPointInside(x, y)) {
      collisionDetected = true;

      if (obstacle.obstacle.getAttribute("fill") === blue()) {
        pacman.setAttribute("fill", blue());
      } else if (obstacle.obstacle.getAttribute("fill") === yellow()) {
        pacman.setAttribute("fill", yellow());
      }

      obstacle.rearrangeObstacles();

      if (direction === "horiz") {
        dx = -dx;
      } else {
        dy = -dy;
      }
    }
  }

  const dir = randomIntFromInterval(1, 1000);
  if (dir < 10) {
    if (direction === "horiz") {
      direction = "vert";
    } else {
      direction = "horiz";
    }
  }

  requestAnimationFrame(animate);
}

animate();