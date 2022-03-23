const container = document.getElementById('container');
const colors = ['#DAF7A6', '#4AF8A6', '#12E8F0','#EB2823','#581845' ];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}
for (let i = 0; i < SQUARES; i++) {
  
  
}

function setColor(el) {
  const color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(el) {
  el.style.background = "#1d1d1d"
  el.style.boxShadow = '0 0 2px #111'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
