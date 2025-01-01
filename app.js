const gridDivs = document.querySelectorAll('.grid-box');
const resultDiv = document.querySelector('.result');
const resetBtn = document.querySelector('#reset');
const xMark = "❌";
const oMark = '𖣠';
let moves = 0;

resetBtn.addEventListener('click', resetAll);
document.body.onload(resetBtn.click());

function resetAll() {
  resetBtn.innerText = 'RESET';
  for (const grid of gridDivs) {
    grid.addEventListener('click', addMark);
    grid.classList.remove('win-div');
    grid.innerText = '';
  }
  moves = 0;
  resultDiv.innerText = '';
}

function addMark(event) {
  moves++;
  event.target.innerText = (moves % 2)? xMark: oMark;
  event.target.removeEventListener('click', addMark);
  gameLogic(event);
}

function gameLogic(event) {
  const mark = event.target.innerText;
  switch (event.target.id) {
    case 'grid-1': 
      grid1Marked(mark);
      break;
    case 'grid-2': 
      grid2Marked(mark);
      break;
    case 'grid-3': 
      grid3Marked(mark);
      break;
    case 'grid-4': 
      grid4Marked(mark);
      break;
    case 'grid-5': 
      grid5Marked(mark);
      break;
    case 'grid-6': 
      grid6Marked(mark);
      break;
    case 'grid-7': 
      grid7Marked(mark);
      break;
    case 'grid-8': 
      grid8Marked(mark);
      break;
    case 'grid-9': 
      grid9Marked(mark);
  }
}

function grid5Marked(mark) {
  const grid1 = document.querySelector('#grid-1');
  const grid2 = document.querySelector('#grid-2');
  const grid3 = document.querySelector('#grid-3');
  const grid4 = document.querySelector('#grid-4');
  const grid5 = document.querySelector('#grid-5');
  const grid6 = document.querySelector('#grid-6');
  const grid7 = document.querySelector('#grid-7');
  const grid8 = document.querySelector('#grid-8');
  const grid9 = document.querySelector('#grid-9');
  if (grid3.innerText == mark && grid7.innerText == mark)
    displayResult(mark, [grid5, grid7, grid3]);
  else if (grid4.innerText == mark && grid6.innerText == mark)
    displayResult(mark, [grid5, grid4, grid6]);
  else if (grid2.innerText == mark && grid8.innerText == mark)
    displayResult(mark, [grid2, grid5, grid8]);
  else if (grid1.innerText == mark && grid9.innerText == mark)
    displayResult(mark, [grid1, grid5, grid9]);
}

function grid1Marked(mark) {
  const grid1 = document.querySelector('#grid-1');
  const grid2 = document.querySelector('#grid-2');
  const grid3 = document.querySelector('#grid-3');
  const grid4 = document.querySelector('#grid-4');
  const grid5 = document.querySelector('#grid-5');
  const grid7 = document.querySelector('#grid-7');
  const grid9 = document.querySelector('#grid-9');
  if (grid3.innerText == mark && grid2.innerText == mark)
    displayResult(mark, [grid1, grid2, grid3]);
  else if (grid4.innerText == mark && grid7.innerText == mark)
    displayResult(mark, [grid1, grid4, grid7]);
  else if (grid5.innerText == mark && grid9.innerText == mark)
    displayResult(mark, [grid1, grid5, grid9]);
  else if (moves == 9)
    gameDraw();
}

function grid3Marked(mark) {
  const grid1 = document.querySelector('#grid-1');
  const grid2 = document.querySelector('#grid-2');
  const grid3 = document.querySelector('#grid-3');
  const grid5 = document.querySelector('#grid-5');
  const grid6 = document.querySelector('#grid-6');
  const grid7 = document.querySelector('#grid-7');
  const grid9 = document.querySelector('#grid-9');
  if (grid1.innerText == mark && grid2.innerText == mark)
    displayResult(mark, [grid1, grid2, grid3]);
  else if (grid5.innerText == mark && grid7.innerText == mark)
    displayResult(mark, [grid3, grid5, grid7]);
  else if (grid6.innerText == mark && grid9.innerText == mark)
    displayResult(mark, [grid3, grid6, grid9]);
  else if (moves == 9)
    gameDraw();
}

function grid7Marked(mark) {
  const grid1 = document.querySelector('#grid-1');
  const grid3 = document.querySelector('#grid-3');
  const grid5 = document.querySelector('#grid-5');
  const grid4 = document.querySelector('#grid-4');
  const grid7 = document.querySelector('#grid-7');
  const grid8 = document.querySelector('#grid-8');
  const grid9 = document.querySelector('#grid-9');
  if (grid1.innerText == mark && grid4.innerText == mark)
    displayResult(mark, [grid1, grid4, grid7]);
  else if (grid5.innerText == mark && grid3.innerText == mark)
    displayResult(mark, [grid3, grid5, grid7]);
  else if (grid8.innerText == mark && grid9.innerText == mark)
    displayResult(mark, [grid7, grid8, grid9]);
  else if (moves == 9)
    gameDraw();
}

function grid9Marked(mark) {
  const grid1 = document.querySelector('#grid-1');
  const grid3 = document.querySelector('#grid-3');
  const grid5 = document.querySelector('#grid-5');
  const grid6 = document.querySelector('#grid-6');
  const grid7 = document.querySelector('#grid-7');
  const grid8 = document.querySelector('#grid-8');
  const grid9 = document.querySelector('#grid-9');
  if (grid1.innerText == mark && grid5.innerText == mark)
    displayResult(mark, [grid1, grid5, grid9]);
  else if (grid6.innerText == mark && grid3.innerText == mark)
    displayResult(mark, [grid3, grid6, grid9]);
  else if (grid8.innerText == mark && grid7.innerText == mark)
    displayResult(mark, [grid7, grid8, grid9]);
  else if (moves == 9)
    gameDraw();
}

function grid2Marked(mark) {
  const grid1 = document.querySelector('#grid-1');
  const grid2 = document.querySelector('#grid-2');
  const grid3 = document.querySelector('#grid-3');
  const grid5 = document.querySelector('#grid-5');
  const grid8 = document.querySelector('#grid-8');
  if (grid1.innerText == mark && grid3.innerText == mark)
    displayResult(mark, [grid1, grid2, grid3]);
  else if (grid5.innerText == mark && grid8.innerText == mark)
    displayResult(mark, [grid2, grid5, grid8]);
  else if (moves == 9)
    gameDraw();
}

function grid4Marked(mark) {
  const grid1 = document.querySelector('#grid-1');
  const grid4 = document.querySelector('#grid-4');
  const grid5 = document.querySelector('#grid-5');
  const grid6 = document.querySelector('#grid-6');
  const grid7 = document.querySelector('#grid-7');
  if (grid1.innerText == mark && grid7.innerText == mark)
    displayResult(mark, [grid1, grid4, grid7]);
  else if (grid5.innerText == mark && grid6.innerText == mark)
    displayResult(mark, [grid4, grid5, grid6]);
  else if (moves == 9)
    gameDraw();
}

function grid6Marked(mark) {
  const grid3 = document.querySelector('#grid-3');
  const grid4 = document.querySelector('#grid-4');
  const grid5 = document.querySelector('#grid-5');
  const grid6 = document.querySelector('#grid-6');
  const grid9 = document.querySelector('#grid-9');
  if (grid3.innerText == mark && grid9.innerText == mark)
    displayResult(mark, [grid3, grid6, grid9]);
  else if (grid5.innerText == mark && grid4.innerText == mark)
    displayResult(mark, [grid4, grid5, grid6]);
  else if (moves == 9)
    gameDraw();
}

function grid8Marked(mark) {
  const grid2 = document.querySelector('#grid-2');
  const grid5 = document.querySelector('#grid-5');
  const grid7 = document.querySelector('#grid-7');
  const grid8 = document.querySelector('#grid-8');
  const grid9 = document.querySelector('#grid-9');
  if (grid2.innerText == mark && grid5.innerText == mark)
    displayResult(mark, [grid2, grid5, grid8]);
  else if (grid7.innerText == mark && grid9.innerText == mark)
    displayResult(mark, [grid7, grid8, grid9]);
  else if (moves == 9)
    gameDraw();
}

function displayResult(mark, winningGrids) {
  resultDiv.innerText = `${mark} Wins!`;
  for (const grid of winningGrids) {
    grid.classList.add('win-div');
  } 
  gameEnd();
}

function gameDraw() {
  resultDiv.innerHTML = 'Game Draw :(';
  gameEnd();
}

function gameEnd() {
  for (const grid of gridDivs) {
    grid.removeEventListener('click', addMark);
    resetBtn.innerText = 'Play Again';
  }
}
