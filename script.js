const container = document.querySelector('.container');
const newGridBtn = document.getElementById('new-grid');
const normalBtn = document.getElementById('normal');
const randomBtn = document.getElementById('random-mode');
const modeButtons = document.querySelectorAll('.mode-btn');

let currentMode = 'normal'; 

function createGrid(size) {
  container.innerHTML = '';
  for (let row = 0; row < size; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (let col = 0; col < size; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseenter', () => {
        if (currentMode === 'normal') {
          square.style.backgroundColor = 'black';
        } else if (currentMode === 'random') {
          square.style.backgroundColor = getRandomColor();
        }
      });
      rowDiv.appendChild(square);
    }
    container.appendChild(rowDiv);
  }
}


function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

newGridBtn.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (1-100):');
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  createGrid(newSize);
});

modeButtons.forEach(button => {
  button.addEventListener('click', () => {
    modeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    if (button.id === 'normal') {
      currentMode = 'normal';
    } else if (button.id === 'random-mode') {
      currentMode = 'random';
    }
  });
});

createGrid(16);
