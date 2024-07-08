let userClick = '';
let resultado = '';
let resultShowAlert = document.getElementById('mensagem');
let resultShowGame = document.getElementById('result');
const buttons = document.querySelectorAll('button');

function clickGame() {

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.id == 'pedra') {
        userClick = 'pedra';
      } else if (button.id == 'papel') {
        userClick = 'papel';
      } else if (button.id == 'tesoura') {
        userClick = 'tesoura';
      }
      randomGame();
      resultGame(userClick, resultado);
      console.log(resultado);
    })
  });
}

function randomGame() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    resultado = 'pedra';
  } else if (randomNum == 1) {
    resultado = 'papel';
  } else if (randomNum == 2) {
    resultado = 'tesoura';
  }
}

function resultGame(jogador, bot) {
  if (jogador == 'pedra' && bot == 'pedra') {
    resultShowAlert.classList.remove('mensagemView');
    resultShowGame.textContent = '🪨x🪨';
    resultShowAlert.textContent = 'Voce Empatou';
    resultShowGame.style.backgroundColor = '#ffc107';
    resultShowAlert.style.backgroundColor = '#ffc107';
    resultShowAlert.classList.add('mensagemView');
    setTimeout(() => {
      removeAll();
    }, 2000);
  } else if (jogador == 'pedra' && bot == 'papel') {
    resultShowAlert.classList.remove('mensagemView');
    resultShowGame.textContent = '🪨x📑';
    resultShowAlert.textContent = 'Voce Perdeu';
    resultShowGame.style.backgroundColor = '#dc3545';
    resultShowAlert.style.backgroundColor = '#dc3545';
    resultShowAlert.classList.add('mensagemView');
    setTimeout(() => {
      removeAll();
    }, 2000);
  } else if (jogador == 'pedra' && bot == 'tesoura') {
    resultShowAlert.classList.remove('mensagemView');
    resultShowGame.textContent = '🪨x✂️';
    resultShowAlert.textContent = 'Voce Ganhou';
    resultShowGame.style.backgroundColor = '#198754';
    resultShowAlert.style.backgroundColor = '#198754';
    resultShowAlert.classList.add('mensagemView');
    setTimeout(() => {
      removeAll();
    }, 2000);
  } else if (jogador == 'papel' && bot == 'pedra') {
    resultShowGame.textContent = '📑x🪨';
    resultShowAlert.textContent = 'Voce Ganhou';
    resultShowAlert.classList.remove('mensagemView');
    resultShowGame.style.backgroundColor = '#198754';
    resultShowAlert.style.backgroundColor = '#198754';
    resultShowAlert.classList.add('mensagemView');
    setTimeout(() => {
      removeAll();
    }, 2000);
  } else if (jogador == 'papel' && bot == 'papel') {
    resultShowGame.textContent = '📑x📑';
    resultShowAlert.textContent = 'Voce Empatou';
    resultShowAlert.classList.remove('mensagemView');
    resultShowGame.style.backgroundColor = '#ffc107';
    resultShowAlert.style.backgroundColor = '#ffc107';
    resultShowAlert.classList.add('mensagemView');
    setTimeout(() => {
      removeAll();
    }, 2000);
  } else if (jogador == 'papel' && bot == 'tesoura') {
    resultShowGame.textContent = '📑x✂️';
    resultShowAlert.textContent = 'Voce Perdeu';
    resultShowAlert.classList.remove('mensagemView');
    resultShowGame.style.backgroundColor = '#dc3545';
    resultShowAlert.style.backgroundColor = '#dc3545';
    resultShowAlert.classList.add('mensagemView');
    setTimeout(() => {
      removeAll();
    }, 2000);
  } else if (jogador == 'tesoura' && bot == 'pedra') {
    resultShowGame.textContent = '✂️x🪨';
    resultShowAlert.textContent = 'Voce Perdeu';
    resultShowAlert.classList.remove('mensagemView');
    resultShowGame.style.backgroundColor = '#dc3545';
    resultShowAlert.style.backgroundColor = '#dc3545';
    resultShowAlert.classList.add('mensagemView');
    setTimeout(() => {
      removeAll();
    }, 2000);
  } else if (jogador == 'tesoura' && bot == 'papel') {
    resultShowGame.textContent = '✂️x📑';
    resultShowAlert.textContent = 'Voce Ganhou';
    resultShowAlert.classList.remove('mensagemView');
    resultShowGame.style.backgroundColor = '#198754';
    resultShowAlert.style.backgroundColor = '#198754';
    resultShowAlert.classList.add('mensagemView');
    setTimeout(() => {
      removeAll();
    }, 2000);
  } else if (jogador == 'tesoura' && bot == 'tesoura') {
    resultShowGame.textContent = '✂️x✂️';
    resultShowAlert.textContent = 'Voce Empatou';
    resultShowAlert.classList.remove('mensagemView');
    resultShowGame.style.backgroundColor = '#ffc107';
    resultShowAlert.style.backgroundColor = '#ffc107';
    resultShowAlert.classList.add('mensagemView');
    setTimeout(() => {
      removeAll();
    }, 2000);
  }
}

function removeAll() {
  resultShowAlert.classList.remove('mensagemView');
}

clickGame();