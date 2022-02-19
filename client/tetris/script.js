const lTetromino = 'firstShape';
const zTetromino = 'secindShape';
const oTetromino = 'thirdShape';
const iTetromino = 'fourthShape';
const tTetromino = 'fifthShape';
const tetrominos = [lTetromino,zTetromino,oTetromino,iTetromino,tTetromino];
console.log(tetrominos[5]);
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const width = 10
  let squares = Array.from(document.querySelectorAll('grid div'))
  const ScoreDisplay = document.querySelector('#score')
  const StartBtn = document.querySelector('#start-button')
});
