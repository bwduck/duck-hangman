import { useEffect, useRef, useState } from 'react';
import { drop, remove } from 'ramda';
import { arrayWithIndex, getRandomInt } from '../utils';
import { PUZZLES } from '../constants';

const useKeyPress = (callback: Function, keysAllowed: string[]) => {
  const handleEvent = (e: KeyboardEvent) => {
    if (keysAllowed.includes(e.key)) {
      callback(e.key);
    }
  };
  useEffect(() => {
    window.document.addEventListener('keyup', handleEvent);
    return () => {
      window.document.removeEventListener('keyup', handleEvent);
    };
  });
};

interface Puzzle {
  question: string;
  answer: string;
  congrats: string;
}

type usePuzzleReturn = [Puzzle, () => void];

const usePuzzle = (): usePuzzleReturn => {
  const puzzle = useRef(PUZZLES[0]);
  const [puzzlesLeft, setPuzzlesLeft] = useState(
    drop(1, [...arrayWithIndex(PUZZLES.length)])
  );

  const newPuzzle = () => {
    const next = getRandomInt(puzzlesLeft.length);
    puzzle.current = PUZZLES[puzzlesLeft[next]];
    if (puzzlesLeft.length > 1) {
      setPuzzlesLeft(remove(next, 1, puzzlesLeft));
    } else {
      setPuzzlesLeft([...arrayWithIndex(PUZZLES.length)]);
    }
  };

  return [puzzle.current, newPuzzle];
};

export { useKeyPress, usePuzzle };
