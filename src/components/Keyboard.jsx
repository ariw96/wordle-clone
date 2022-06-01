import React, { useCallback, useEffect } from "react";
import KeyBoardLetter from "./KeyBoardLetter";
import { GameContext } from "./GameContext";
import { useContext } from "react";

function KeyBoard() {
	const { addLetter, deleteLetter, enterWord, keyBoardState} = useContext(GameContext); //useContext(GameContext) returns an object with the properties of the GameContext object
	//keyboard component for the game
	

	const handleKeyPress = useCallback((e) => {
		//useCallback to prevent memory leak and prevent rerendering for every key press to good performance
		if (e.key === "Enter") {
			enterWord();  //enterWord is a function in the GameContext object
			return;
		} else if (e.key === "Backspace") {
			deleteLetter();
			return;
		} else {
			keyBoardState[0].forEach((item) => { //instead checking each key press, we check the rows arrars and add the letter to the boardState if it matches the key pressed
				if (e.key.toLowerCase() === item.letter.toLowerCase()) { //toLowerCase() to make sure the key is lowercase
					addLetter(item.letter);
				}
			});
			keyBoardState[1].forEach((item) => {
				if (e.key.toLowerCase() === item.letter.toLowerCase()) {
					addLetter(item.letter);
				}
			});
			keyBoardState[2].forEach((item) => {
				if (e.key.toLowerCase() === item.letter.toLowerCase()) {
					addLetter(item.letter);
				}
			});
		}
	});

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress); //add event listener to the document to listen for key presses
		return () => {
			document.removeEventListener("keydown", handleKeyPress); //clean up the event listener when the component is unmounted
		};
	}, [handleKeyPress]);
	return (
		<div className="keyboard" onKeyDown={handleKeyPress}>
			<div className="row1">
				{keyBoardState[0].map((item, index) => {
					//map the row1 array to the keyboard letter component each letter has a keycode and a letter
					return <KeyBoardLetter key={index} letter={item.letter} id={item.colorId}/>; // each row represents a row of the keyboard
				})}
			</div>
			<div className="row2">
				{keyBoardState[1].map((item, index) => {
					return <KeyBoardLetter key={index} letter={item.letter} id={item.colorId}/>;
				})}
			</div>
			<div className="row3">
				{keyBoardState[2].map((item, index) => {
					return <KeyBoardLetter key={index} letter={item.letter} id={item.colorId}/>;
				})}
			</div>
		</div>
	);
}

export default KeyBoard;
