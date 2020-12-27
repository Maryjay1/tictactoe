import React, { useState } from 'react';
import Board from './Board';
import CalculateWinner from './helpers';

const styles = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [xIsNext, setXisNext] = useState(true);
  const winner = CalculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}> Start Game</button>
    );
  };
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? 'Winner: ' + winner
            : 'Next player: ' + (xIsNext ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
