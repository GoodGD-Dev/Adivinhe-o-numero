const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');
const pauseButton = document.getElementById('pauseButton');
const resumeButton = document.getElementById('resumeButton');
const restartButton = document.getElementById('restartButton');
const onePlayerButton = document.getElementById('onePlayerButton');
const twoPlayerButton = document.getElementById('twoPlayerButton');

// Definição das variáveis do jogo
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;
const ballRadius = 10;

const paddleHeight = 100;
const paddleWidth = 10;
const paddleOffset = 70; // Offset maior para posicionar as paletas mais dentro da tela
let paddle1Y = (canvas.height - paddleHeight) / 2;
let paddle2Y = (canvas.height - paddleHeight) / 2;
const paddleSpeed = 10;

let player1Score = 0;
let player2Score = 0;
const winningScore = 5;
let gameOver = false;
let gamePaused = false;
let singlePlayer = false;

let keysPressed = {};

// Função principal para desenhar o jogo
function draw() {
  if (gamePaused) return;

  // Limpa o canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameOver) {
    ctx.fillStyle = '#fff';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 20);
    ctx.fillText(`Player 1: ${player1Score} - Player 2: ${player2Score}`, canvas.width / 2, canvas.height / 2 + 20);
    restartButton.style.display = 'block';
    return;
  }

  // Desenha a bola
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2, true);
  ctx.fill();

  // Desenha as paletas
  ctx.fillRect(paddleOffset, paddle1Y, paddleWidth, paddleHeight);
  ctx.fillRect(canvas.width - paddleWidth - paddleOffset, paddle2Y, paddleWidth, paddleHeight);

  // Desenha o placar
  ctx.font = '20px Arial';
  ctx.fillText(player1Score, 100, 50);
  ctx.fillText(player2Score, canvas.width - 100, 50);

  // Atualiza a posição da bola
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Verifica colisões com as bordas verticais
  if (ballY > canvas.height - ballRadius || ballY < ballRadius) {
    ballSpeedY = -ballSpeedY;
  }

  // Verifica colisões com as paletas e as áreas de pontos
  if (ballX - ballRadius <= paddleOffset + paddleWidth) {
    if (ballX - ballRadius <= 0) {
      player2Score++;
      resetBall();
    } else if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
      ballSpeedX = -ballSpeedX;
      let deltaY = ballY - (paddle1Y + paddleHeight / 2);
      ballSpeedY = deltaY * 0.35;
    }
  }

  if (ballX + ballRadius >= canvas.width - paddleWidth - paddleOffset) {
    if (ballX + ballRadius >= canvas.width) {
      player1Score++;
      resetBall();
    } else if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
      ballSpeedX = -ballSpeedX;
      let deltaY = ballY - (paddle2Y + paddleHeight / 2);
      ballSpeedY = deltaY * 0.35;
    }
  }

  if (player1Score >= winningScore || player2Score >= winningScore) {
    gameOver = true;
  }

  // Movimenta as paletas com as teclas pressionadas
  if (keysPressed['w'] && paddle1Y > 0) {
    paddle1Y -= paddleSpeed;
  }
  if (keysPressed['s'] && paddle1Y < canvas.height - paddleHeight) {
    paddle1Y += paddleSpeed;
  }

  if (singlePlayer) {
    // Movimenta a paleta do jogador 2 automaticamente (IA simples)
    if (paddle2Y + paddleHeight / 2 < ballY && paddle2Y < canvas.height - paddleHeight) {
      paddle2Y += paddleSpeed * 0.5;
    } else if (paddle2Y + paddleHeight / 2 > ballY && paddle2Y > 0) {
      paddle2Y -= paddleSpeed * 0.5;
    }
  } else {
    // Movimenta a paleta do jogador 2 com as teclas pressionadas
    if (keysPressed['ArrowUp'] && paddle2Y > 0) {
      paddle2Y -= paddleSpeed;
    }
    if (keysPressed['ArrowDown'] && paddle2Y < canvas.height - paddleHeight) {
      paddle2Y += paddleSpeed;
    }
  }
}

// Função para resetar a bola após um ponto
function resetBall() {
  ballSpeedX = -ballSpeedX;
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedY = 5;
}

// Função para reiniciar o jogo
function restartGame() {
  player1Score = 0;
  player2Score = 0;
  gameOver = false;
  resetBall();
  restartButton.style.display = 'none';
}

// Função para pausar o jogo
function pauseGame() {
  gamePaused = true;
  pauseButton.style.display = 'none';
  resumeButton.style.display = 'block';
}

// Função para retomar o jogo
function resumeGame() {
  gamePaused = false;
  pauseButton.style.display = 'block';
  resumeButton.style.display = 'none';
}

// Função para escolher modo de um jogador
function chooseOnePlayer() {
  singlePlayer = true;
  onePlayerButton.style.display = 'none';
  twoPlayerButton.style.display = 'none';
  pauseButton.style.display = 'block';
}

// Função para escolher modo de dois jogadores
function chooseTwoPlayers() {
  singlePlayer = false;
  onePlayerButton.style.display = 'none';
  twoPlayerButton.style.display = 'none';
  pauseButton.style.display = 'block';
}

// Função para rastrear as teclas pressionadas
document.addEventListener('keydown', (evt) => {
  keysPressed[evt.key] = true;
});

document.addEventListener('keyup', (evt) => {
  keysPressed[evt.key] = false;
});

pauseButton.addEventListener('click', pauseGame);
resumeButton.addEventListener('click', resumeGame);
restartButton.addEventListener('click', restartGame);
onePlayerButton.addEventListener('click', chooseOnePlayer);
twoPlayerButton.addEventListener('click', chooseTwoPlayers);

// Loop principal do jogo
setInterval(draw, 30);
