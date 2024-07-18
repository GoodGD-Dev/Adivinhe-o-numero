const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Retângulo preenchido
ctx.fillStyle = 'blue'; // Cor de preenchimento
ctx.fillRect(15, 15, 150, 100); // x, y, largura, altura

// Fazendo um X
const size = 80; // Tamanho do X
const centerX = canvas.width / 2;
const centerY = canvas.height / 8;

// Definindo a cor e largura da linha
ctx.strokeStyle = 'purple';
ctx.lineWidth = 3;

// Desenhando a primeira diagonal do X
ctx.beginPath();
ctx.moveTo(centerX - size / 2, centerY - size / 2);
ctx.lineTo(centerX + size / 2, centerY + size / 2);
ctx.stroke();

// Desenhando a segunda diagonal do X
ctx.beginPath();
ctx.moveTo(centerX + size / 2, centerY - size / 2);
ctx.lineTo(centerX - size / 2, centerY + size / 2);
ctx.stroke();

// Retângulo contornado
ctx.strokeStyle = 'red'; // Cor da borda
ctx.lineWidth = 5; // Largura da linha
ctx.strokeRect(325, 15, 150, 100); // x, y, largura, altura

// Circulo contornado
ctx.beginPath();
ctx.arc(90, 225, 75, 0, Math.PI * 3, false); // x, y, raio, ângulo inicial, ângulo final
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.stroke();


// Uma linha
ctx.beginPath();
ctx.moveTo(190, 150); // Ponto inicial
ctx.lineTo(300, 280); // Ponto final
ctx.strokeStyle = 'purple';
ctx.lineWidth = 3;
ctx.stroke();

// Triangulo
ctx.beginPath();
ctx.moveTo(400, 150); // Move para o primeiro vértice
ctx.lineTo(350, 280); // Linha para o segundo vértice
ctx.lineTo(450, 280); // Linha para o terceiro vértice
ctx.closePath(); // Fecha o caminho

// Define a cor de preenchimento e preenche o triângulo
ctx.fillStyle = 'blue';
ctx.fill();


// Adicionando texto
ctx.font = '30px Arial';
ctx.fillStyle = 'orange';
ctx.fillText('Hello Canvas!', 25, 350);

ctx.strokeStyle = 'black';
ctx.strokeText('Hello Canvas!', 25, 380);

// Faz o L
ctx.beginPath();
ctx.moveTo(325, 325);
ctx.lineTo(325, 425);
ctx.lineTo(400, 425);
ctx.strokeStyle = 'green';
ctx.lineWidth = 5;
ctx.stroke();