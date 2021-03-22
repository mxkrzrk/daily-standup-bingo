const rowWon = [];
const colWon = [];
const diagonalWon = [];

const checkWinRow = (winTable) => {
  // Check row victory
  for (let r = 0; r < winTable.length; r++) {
    let count = 0;
    for (let c = 0; c < winTable[r].length; c++) {
      if (winTable[r][c].on) {
        count += 1;
      }
    }
    if (count === 5 && !rowWon.includes(r)) {
      // Store row won
      rowWon.push(r);
      // Update win table
      winTable[r] = winTable[r].map((cell) => ({ ...cell, won: true }));
      return true;
    }
  }
};

const checkWinCol = (winTable) => {
  // Check col victory
  for (let c = 0; c < 5; c++) {
    let countCol = 0;
    for (let r = 0; r < winTable.length; r++) {
      if (winTable[r][c].on) {
        countCol += 1;
      }
    }
    if (countCol === 5 && !colWon.includes(c)) {
      // Store col won
      colWon.push(c);
      // Update win table
      winTable.forEach((row, indexRow) =>
        row.forEach((cell, indexCol) =>
          indexCol === c ? (winTable[indexRow][indexCol].won = true) : null
        )
      );
      return true;
    }
  }
};

const checkRightDiagonal = (winTable) => {
  // Check right diagonal victory
  let countDiagonal = 0;
  for (let r = 0; r < winTable.length; r++) {
    for (let c = 0; c < winTable[r].length; c++) {
      if (c === r && winTable[r][c].on) {
        countDiagonal += 1;
      }
    }
  }
  if (countDiagonal === 5 && !diagonalWon.includes('right')) {
    // Store diagonal type won
    diagonalWon.push('right');
    // Update win table
    winTable.forEach((row, indexRow) =>
      row.forEach((cell, indexCol) =>
        indexCol === indexRow ? (winTable[indexRow][indexCol].won = true) : null
      )
    );
    return true;
  }
};

const checkLeftDiagonal = (winTable) => {
  // Check left diagonal victory
  let countLeftDiagonal = 0;
  for (let r = winTable.length - 1; r >= 0; r--) {
    for (let c = 0; c < winTable[r].length; c++) {
      if (c === winTable[r].length - 1 - r && winTable[r][c].on) {
        countLeftDiagonal += 1;
      }
    }
  }
  if (countLeftDiagonal === 5 && !diagonalWon.includes('left')) {
    // Store diagonal type won
    diagonalWon.push('left');
    // Update win table
    winTable.forEach((row, indexRow) =>
      row.forEach((cell, indexCol) =>
        indexCol === row.length - 1 - indexRow
          ? (winTable[indexRow][indexCol].won = true)
          : null
      )
    );
    return true;
  }
};

export default function checkVictory(bingoTable) {
  // Create win table
  const winTable = bingoTable.slice();
  // Check victory type
  if (
    checkWinRow(winTable) ||
    checkWinCol(winTable) ||
    checkRightDiagonal(winTable) ||
    checkLeftDiagonal(winTable)
  ) {
    return { win: true, winTable };
  } else {
    return { win: false };
  }
}
