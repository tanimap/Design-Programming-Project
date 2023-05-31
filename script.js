"use strict";

let gameContainer = document.getElementById("grid-item");

let width = gameContainer.clientWidth;
let height = gameContainer.clientHeight;

// we enter our obstacle coordinates in our obstacle map to know
// when to avoid things.
let obstacleCoords = [];
//I created two forloops each 15 of different colors. 
let svg = initializeSvg();
let pacman = createPacman(svg);

// Generate yellow obstacles
for (let i = 0; i < 15; i++) {
  let obstacle = generateRandomObstacle(svg, width, height);
  obstacle.setColor("yellow");
  obstacleCoords.push(obstacle);
}

// Generate blue obstacles
for (let i = 0; i < 15; i++) {
  let obstacle = generateRandomObstacle(svg, width, height);
  obstacle.setColor("blue");
  obstacleCoords.push(obstacle);
}

let x = 50;
let y = 50;
let dx = 4;
let dy = 4;
let direction = "horiz";

/*
function animate() {
  if (direction == "horiz") {
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
}
  for (let i = 0; i < obstacleCoords.length; i++) {
    let obstacle = obstacleCoords[i];

    if (
      obstacle.xMin < x &&
      obstacle.xMax > x &&
      obstacle.yMin < y &&
      obstacle.yMax > y
    ) {
      if (direction == "horiz") {
        dx = -dx;
      } else {
        dy = -dy;
      }
    }

  // change direction randomly:
  const dir = randomIntFromInterval(1, 1000);
  if (dir < 10) {
    if (direction == "horiz") {
      direction = "vert";
    } else {
      direction = "horiz";
    }
  }

  requestAnimationFrame(animate);
}

animate();
*/








/*
for (let i = 0; i < 15; i++)  {
  obstacleCoords = generateRandomObstacle(svg, obstacleCoords);
  obstacleCoords.setAttribute("fill", yellow());
}
for (let i = 0; i < 15; i++)  {
  obstacleCoords = generateRandomObstacle(svg, obstacleCoords);
  obstacleCoords.setAttribute("fill", blue());
}
*/


function animate() {
  if (direction == "horiz") {
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

  for (let i = 0; i < obstacleCoords.length; i++) {
    let obstacle = obstacleCoords[i];

    if (
      obstacle.xMin < x &&
      obstacle.xMax > x &&
      obstacle.yMin < y &&
      obstacle.yMax > y
    ) {
      if (direction == "horiz") {
        dx = -dx;
      } else {
        dy = -dy;
      }
    }
  }

  // low chance to change direction randomly:
  const dir = randomIntFromInterval(1, 1000);
  if (dir < 10) {
    if (direction == "horiz") {
      direction = "vert";
    } else {
      direction = "horiz";
    }
  }
  requestAnimationFrame(animate);
}

animate();

