import React from "react";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function KeyBoardLetter({ letter }) {
	const { boardState, setBoardState, curLetterPosition, curWordPosition,setCurLetterPosition,setCurWordPosition } =
		useContext(GameContext);
	const displayLetter = () => {
    const newBoardState = [...boardState]
    newBoardState[curWordPosition][curLetterPosition] = letter
    setBoardState(newBoardState)
	 setCurLetterPosition(curLetterPosition + 1)
	if (curLetterPosition === 4) {
		setCurWordPosition(curWordPosition + 1)
		setCurLetterPosition(0)
	}
  };
	return (
		<div className="key" onClick={displayLetter}>
			{letter}
		</div>
	);
}

export default KeyBoardLetter;
