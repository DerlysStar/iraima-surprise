// Mostrar sorpresa
document.getElementById('surpriseBtn').addEventListener('click', () => {
  document.getElementById('surprise').classList.toggle('hidden');
});

// Corazones flotantes
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
for (let i = 0; i < 30; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random()
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    ctx.fillStyle = `rgba(255, 105, 180, ${h.opacity})`;
    ctx.beginPath();
    ctx.moveTo(h.x, h.y);
    ctx.bezierCurveTo(h.x - h.size / 2, h.y - h.size / 2, h.x - h.size, h.y + h.size / 3, h.x, h.y + h.size);
    ctx.bezierCurveTo(h.x + h.size, h.y + h.size / 3, h.x + h.size / 2, h.y - h.size / 2, h.x, h.y);
    ctx.fill();
    h.y -= h.speed;
    if (h.y < -10) h.y = canvas.height + 10;
  });
  requestAnimationFrame(drawHearts);
}
drawHearts();
