const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');


function randomGame() {
  let randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);
  let resultado = '';

  if (randomNum == 0) {
    let resultado = 'pedra';
    console.log(resultado);
  } else if (randomNum == 1) {
    let resultado = 'papel';
    console.log(resultado);
  } else if (randomNum == 2) {
    let resultado = 'tesoura';
    console.log(resultado);
  }
}

function resultGame(jogador, bot) {
  if (jogador == 'pedra' && bot == 'pedra') {
    console.log('empate');
  } else if (jogador == 'pedra' && bot == 'papel') {
    console.log('vc perdeu');
  } else if (jogador == 'pedra' && bot == 'tesoura') {
    console.log('vc ganhou');
  } else if (jogador == 'papel' && bot == 'pedra') {
    console.log('vc ganhou');
  } else if (jogador == 'papel' && bot == 'papel') {
    console.log('empate');
  } else if (jogador == 'papel' && bot == 'tesoura') {
    console.log('vc perdeu');
  } else if (jogador == 'tesoura' && bot == 'pedra') {
    console.log('vc perdeu');
  } else if (jogador == 'tesoura' && bot == 'papel') {
    console.log('vc ganhou');
  } else if (jogador == 'tesoura' && bot == 'tesoura') {
    console.log('empatou');
  }
}

function click(botao) {
  botao.addEventListener('click', () => {
    let botaoId = botao.id;
    let userClick = '';

    if (botao.id == pedra) {
      userClick = 'pedra';
    } else if (botaoId == papel) {
      userClick = 'papel';
    } else if (botaoId == tesoura) {
      userClick = 'tesoura';
    };
    console.log(userClick);
    randomGame();

  })
}

click(pedra);
click(papel);
click(tesoura);