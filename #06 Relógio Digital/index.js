function atualizarRelogio() {
  let dataAtual = new Date();
  let horaLocal = String(dataAtual.getHours()).padStart(2, '0');
  let minutosLocal = String(dataAtual.getMinutes()).padStart(2, '0');
  let segundosLocal = String(dataAtual.getSeconds()).padStart(2, '0');
  const horario = document.getElementById('horas');
  horario.innerText = `${horaLocal}:${minutosLocal}:${segundosLocal}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();