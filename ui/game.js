const container = document.getElementById('container');

const dots = 10000;

for (let i = 0; i < dots; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('mouseenter', () => (dot.style.background = '#fff'));
  dot.addEventListener(
    'mouseleave',
    () => (dot.style.background = 'rgb(50, 50, 131)')
  );

  container.appendChild(dot);
}

