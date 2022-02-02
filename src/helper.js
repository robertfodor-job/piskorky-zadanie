export const winningCond = cells => {
  const winningCond = [
    //rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // col
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diag
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCond.length; i++) {
    const [a, b, c] = winningCond[i];

    if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c])
      return cells[a];
  }
  return;
};

export const drawCond = (cell, arrayLength = 9) => {
  for (let i = 0; i < arrayLength; i++) {
    if (cell[i] === null) {
      return false;
    }
  }
  return true;
};
