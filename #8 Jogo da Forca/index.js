let numTentativas = document.getElementById('tentativas');
let gameWord = document.getElementById('forcaGame');
let palavra;
let displayedWord;
const inputUser = document.getElementById('userGame');

function buttonsActions() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.id == 'btnStart') {
        getWordGame();
        transferWord();
        startGaming();
      } else if (button.id == 'btnShow') {
        gameWord.textContent = palavra;
      } else if (button.id == 'btnReset') {
        transferWord();
      } else if (button.id == 'btnUserGame') {
        gameExe();
        winGame();
      }
    })
  });
}

function getWordGame() {
  const gameWords = ["gato", "cachorro", "peixe", "coelho", "elefante"];
  let lastResult = -1;
  let randomNum;

  do {
    randomNum = Math.floor(Math.random() * gameWords.length);
  } while (randomNum === lastResult);

  lastResult = randomNum;

  return gameWords[randomNum];
}

function transferWord() {

  palavra = getWordGame();
  displayedWord = Array(palavra.length).fill('_');
  gameWord.textContent = displayedWord.join(' ');
}

function startGaming() {
  const btnStart = document.getElementById('btnStart');
  const btnShow = document.getElementById('btnShow');
  const btnReset = document.getElementById('btnReset');
  const btnUserGame = document.getElementById('btnUserGame');

  btnStart.classList.remove('d-block');
  btnStart.classList.add('d-none');
  btnShow.classList.remove('d-none');
  btnReset.classList.remove('d-none');
  inputUser.classList.remove('d-none');
  btnUserGame.classList.remove('d-none');
}

function gameExe() {
  const userLetter = inputUser.value.toLowerCase();

  let found = false;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === userLetter) {
      displayedWord[i] = userLetter;
      found = true;
    }
  }

  if (found) {
    gameWord.textContent = displayedWord.join(' ');
  } else {
    alert(`A letra ${userLetter} não tem`);

    let valorAtual = parseInt(numTentativas.textContent);
    if (!isNaN(valorAtual)) {
      if (valorAtual > 0) {
        valorAtual--;
        numTentativas.textContent = valorAtual.toString();
      } else if (valorAtual <= 0) {
        gameWord.textContent = 'VOCE PERDEU';
      }
    } else {
      console.log('erro na funcao de dimnuir o numero de tentativas');
    }
  }
  inputUser.value = '';
}

function winGame() {
  let palavraString = gameWord.textContent;
  let novaString = palavraString.replace(/\s/g, '');
  console.log(novaString);

  if (novaString === palavra) {
    alert('VOCE VENCEU');
  } else {
  }
}

inputUser.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    gameExe();
  }
});


buttonsActions();
