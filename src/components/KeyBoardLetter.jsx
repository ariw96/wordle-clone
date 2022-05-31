import React from "react";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function KeyBoardLetter({ letter }) {
	const {
		boardState,
		setBoardState,
		curLetterPosition,
		curWordPosition,
		setCurLetterPosition,
		setCurWordPosition,
	} = useContext(GameContext);
	const displayLetter = () => {
		if (letter === "Ent") {
			if (curLetterPosition > 4) {
				setCurWordPosition(curWordPosition + 1);
				setCurLetterPosition(0);
			}
			return;
		}
		if (letter === "Del") {
			if (curLetterPosition === 0) return;
			const newBoardState = [...boardState];
			newBoardState[curWordPosition][curLetterPosition-1] = "";
			setCurLetterPosition(curLetterPosition - 1);
			setBoardState(newBoardState);
			return
		}

		const newBoardState = [...boardState];
		newBoardState[curWordPosition][curLetterPosition] = letter;
		setBoardState(newBoardState);
		setCurLetterPosition(curLetterPosition + 1);
	};
	return (
		<div className="key" onClick={displayLetter}>
			{letter}
		</div>
	);
}

export default KeyBoardLetter;
