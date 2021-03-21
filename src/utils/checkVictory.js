const rowWon = [];
const colWon = [];
const diagonalWon = [];

// Check row victory
const checkWinRow = (winTable) => {
  for (let r = 0; r < winTable.length; r++) {
    let count = 0;
    for (let c = 0; c < winTable[r].length; c++) {
      if (winTable[r][c] === 1) count += 1;
    }
    if (count === 5 && !rowWon.includes(r)) {
      rowWon.push(r);
      return true;
    }
  }
};

// Check col victory
const checkWinCol = (winTable) => {
  for (let c = 0; c < 5; c++) {
    let countCol = 0;
    for (let r = 0; r < winTable.length; r++) {
      if (winTable[r][c] === 1) countCol += 1;
    }
    if (countCol === 5 && !colWon.includes(c)) {
      colWon.push(c);
      return true;
    }
  }
};

// Check right diagonal victory
const checkRightDiagonal = (winTable) => {
  let countDiagonal = 0;
  for (let r = 0; r < winTable.length; r++) {
    for (let c = 0; c < winTable[r].length; c++) {
      if (c === r && winTable[r][c] === 1) countDiagonal += 1;
    }
  }
  if (countDiagonal === 5 && !diagonalWon.includes('right')) {
    diagonalWon.push('right');
    return true;
  }
};

// Check left diagonal victory
const checkLeftDiagonal = (winTable) => {
  let countLeftDiagonal = 0;
  for (let r = winTable.length - 1; r >= 0; r--) {
    for (let c = 0; c < winTable[r].length; c++) {
      if (c === winTable[r].length - 1 - r && winTable[r][c] === 1)
        countLeftDiagonal += 1;
    }
  }
  if (countLeftDiagonal === 5 && !diagonalWon.includes('left')) {
    diagonalWon.push('left');
    return true;
  }
};

export default function checkVictory(bingoTable) {
  const winTable = [];
  // Create win table
  const rowLength = bingoTable.length;
  for (let row = 0; row < rowLength; row++) {
    winTable.push([]);
    const colLength = bingoTable[row].length;
    for (let col = 0; col < colLength; col++) {
      let cell = bingoTable[row][col];
      if (cell.on) {
        winTable[row].push(1);
      } else {
        winTable[row].push(0);
      }
    }
  }
  // Check victory type
  if (
    checkWinRow(winTable) ||
    checkWinCol(winTable) ||
    checkRightDiagonal(winTable) ||
    checkLeftDiagonal(winTable)
  ) {
    return true;
  } else {
    return false;
  }
}
