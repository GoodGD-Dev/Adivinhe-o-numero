let chute = document.getElementById("adivinhar");
let botao = document.querySelector('button');
let resultado = document.getElementById('resultado');
const display = document.querySelector('.main');
const showResult = document.querySelector('.main__resultado');
const win = document.querySelector('.main__resultado__text');

function resultadoWin () {
  document.querySelector('.main__resultado').style.display = 'flex';
  document.querySelector('.main__resultado__text').classList.add('sucess')
}
function resultadoLose () {
  document.querySelector('.main__resultado').style.display = 'flex';
  document.querySelector('.main__resultado__text').classList.add('fail')
}

function removeAll () {
  document.querySelector('.main').style.display = 'block';
  document.querySelector('.main__resultado').style.display = 'none';
}

  chute.addEventListener('change', () => {
    let chutado = chute.value;
  })

  
  botao.addEventListener('click', (e) => {
    e.preventDefault();
  
    let randomnum = Math.floor(Math.random() * 101);
    
    if (chute.value >= 0 && chute.value <= 100) {    
      resultado.textContent = randomnum;
  
      if (randomnum === parseInt(chute.value)) {
        resultadoWin();
        win.innerHTML = `!!! Voce <span class="sucess">acertou</span> !!!`;
        setTimeout(() => {
          removeAll();
        }, 2000)
      } else {
          resultadoLose();
          win.innerHTML = `!!! Voce <span class="fail">errou</span> !!!`;
          setTimeout(() => {
            removeAll();
          }, 2000)
        }
    } 
  });