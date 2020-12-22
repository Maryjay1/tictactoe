import React, { useState } from 'react';
import Board from './Board';
import CalculateWinner from './helpers';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [xIsNext, setXisNext] = useState(true);
  const winner = CalculateWinner(board);

  const handleClick = () => {
    const boardCopy = [...board];
  };

  const jumpTo = () => {};

  const renderMoves = () => {};
  return <Board sqaures={board} onClick={handleClick} />;
};

export default Game;
