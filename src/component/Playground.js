import { useState } from 'react';
import Cell from './Cell';
import { winningCond, drawCond } from '../helper';

const fillArray = new Array(9).fill(null);

const initState = {
  cellArray: fillArray,
  playerX: true,
  gameIsDone: false,
};

const Playground = () => {
  const [value, setValue] = useState(initState);

  const handleClick = index => {
    const cells = [...value.cellArray];
    if (cells[index] || winningCond(cells) || drawCond(cells)) {
      return;
    }
    cells[index] = value.playerX ? 'X' : 'O';
    setValue(value => ({
      ...value,
      cellArray: cells,
      playerX: !value.playerX,
    }));
    if (winningCond(cells) || drawCond(cells)) {
      return setValue(value => ({ ...value, gameIsDone: true }));
    }
  };

  let condition;
  if (winningCond(value.cellArray)) {
    condition = 'Winner is ' + winningCond(value.cellArray);
  } else if (drawCond(value.cellArray)) {
    condition = 'Draw';
  } else {
    condition = 'Player ' + (value.playerX ? 'X' : 'O') + ' goes next.';
  }

  const cellButton = index => {
    return (
      <Cell value={value.cellArray[index]} onClick={() => handleClick(index)} />
    );
  };

  return (
    <>
      <div className="center">
        <div className="row">
          {cellButton(0)}
          {cellButton(1)}
          {cellButton(2)}
        </div>
        <div className="row">
          {cellButton(3)}
          {cellButton(4)}
          {cellButton(5)}
        </div>
        <div className="row">
          {cellButton(6)}
          {cellButton(7)}
          {cellButton(8)}
        </div>
        <div style={{ margin: '15px 0 0 10px' }}>{condition}</div>
        {value.gameIsDone ? (
          <div className="reset">
            <button
              onClick={() => {
                setValue(() => initState);
              }}
            >
              Reset❔
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Playground;
