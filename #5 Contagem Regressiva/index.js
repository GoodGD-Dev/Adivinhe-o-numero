document.getElementById('startBtn').addEventListener('click', () => {
  const userDate = new Date(document.getElementById('userData').value);
  const currentDate = new Date();
  if (userDate <= currentDate) {
    document.getElementById('dateOutput').textContent = 'A data deve ser no futuro.';
    return;
  }

  const diffTime = userDate - currentDate;

  let years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
  let months = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  let days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  // Verifica se cada unidade é maior que zero para mostrá-la
  let output = 'Faltam';
  if (years > 0) output += ` ${years} anos,`;
  if (months > 0) output += ` ${months} meses,`;
  if (days > 0) output += ` ${days} dias,`;
  if (hours > 0) output += ` ${hours} horas,`;
  if (minutes > 0) output += ` ${minutes} minutos e`;
  if (seconds > 0) output += ` ${seconds} segundos`;

  // Remove a vírgula extra no final se necessário
  if (output.endsWith(',')) {
    output = output.slice(0, -1); // remove a última vírgula
  }

  document.querySelector('.restante').style.color = "black";
  document.querySelector('.restante').style.fontSize = "3vh";
  document.getElementById('dateOutput').textContent = output.trim() + '.';
});
