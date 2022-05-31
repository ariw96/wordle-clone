import React from "react";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function KeyBoardLetter({ letter }) {
	const {
		addLetter,
		deleteLetter,
		enterWord,
	} = useContext(GameContext);
	const displayLetter = () => {
		if (letter === "Ent") {
			enterWord();
		}
		else if (letter === "Del") {
			deleteLetter();
		} else {
			addLetter(letter);
		}
	};
	return (
		<div className="key" onClick={displayLetter}>
			{letter}
		</div>
	);
}

export default KeyBoardLetter;
