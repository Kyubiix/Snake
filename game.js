// Get the canvas element
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Create the snake
var snake = [
  {x: 150, y: 150},
  {x: 140, y: 150},
  {x: 130, y: 150},
  {x: 120, y: 150},
  {x: 110, y: 150}
];

// Create the food
var food = {
  x: Math.floor(Math.random()*(canvas.width-10)),
  y: Math.floor(Math.random()*(canvas.height-10))
};

// Create the score
var score = 0;

// Set the initial direction
var direction = "right";

// Create the game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  for (var i = 0; i < snake.length; i++) {
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
  }

  // Draw the food
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(food.x, food.y, 10, 10);

  // Draw the score
  ctx.fillStyle = "#ffffff";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, canvas.height - 10);

  // Move the snake
  var head = {x: snake[0].x, y: snake[0].y};
  if (direction === "right") {
    head.x += 10;
  } else if (direction === "left") {
    head.x -= 10;
  } else if (direction === "up") {
    head.y -= 10;
  } else if (direction === "down") {
    head.y += 10;
  }

  // Check for collision with food
  if (head.x === food.x && head.y === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random()*(canvas.width-10)),
      y: Math.floor(Math.random()*(canvas.height-10))
    };
  } else {
    snake.pop();
  }

  // Check for collision with walls
  if (head.x < 0 || head.x > canvas.width-10 || head.y < 0 || head.y > canvas.height-10) {
    alert("Game Over");
    clearInterval(gameInterval);
  }

  // Check for collision with snake
  for (var i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      alert("Game Over");
      clearInterval(gameInterval);
    }
  }

  snake.
