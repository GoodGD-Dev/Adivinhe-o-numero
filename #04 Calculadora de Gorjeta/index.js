let valorConta = document.getElementById('valorConta');
let percento = document.getElementById('porcentagem');
const panelResult = document.querySelector('.panel__result');
const startBtn = document.getElementById('calcular');

function calcula() {
  let fracao = percento.value / 100;
  return valorConta.value * fracao;
};
let test = calcula();
console.log(test);

startBtn.addEventListener('click', () => {
  let resultado = calcula();
  panelResult.innerHTML = `R$ ${resultado}`;
  panelResult.style.display = 'block';
  console.log('click');
})



