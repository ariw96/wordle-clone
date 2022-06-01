import React from "react";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const GameContext = createContext();

export const GameProvider = (props) => {
	const word0 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word1 = [
		{ letter: "a", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word2 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word3 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word4 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];
	const word5 = [
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
		{ letter: "", colorId: "" },
	];

	const defultBoard = [word0, word1, word2, word3, word4, word5];
	const row1 = [
		{ letter: "Q", colorId: "", clicked: false },
		{ letter: "W", colorId: "", clicked: false },
		{ letter: "E", colorId: "", clicked: false },
		{ letter: "R", colorId: "", clicked: false },
		{ letter: "T", colorId: "", clicked: false },
		{ letter: "Y", colorId: "", clicked: false },
		{ letter: "U", colorId: "", clicked: false },
		{ letter: "I", colorId: "", clicked: false },
		{ letter: "O", colorId: "", clicked: false },
		{ letter: "P", colorId: "", clicked: false },
	];
	const row2 = [
		{ letter: "A", colorId: "", clicked: false },
		{ letter: "S", colorId: "", clicked: false },
		{ letter: "D", colorId: "", clicked: false },
		{ letter: "F", colorId: "", clicked: false },
		{ letter: "G", colorId: "", clicked: false },
		{ letter: "H", colorId: "", clicked: false },
		{ letter: "J", colorId: "", clicked: false },
		{ letter: "K", colorId: "", clicked: false },
		{ letter: "L", colorId: "", clicked: false },
	];
	const row3 = [
		{ letter: "Del" },
		{ letter: "Z", colorId: "", clicked: false },
		{ letter: "X", colorId: "", clicked: false },
		{ letter: "C", colorId: "", clicked: false },
		{ letter: "V", colorId: "", clicked: false },
		{ letter: "B", colorId: "", clicked: false },
		{ letter: "N", colorId: "", clicked: false },
		{ letter: "M", colorId: "", clicked: false },
		{ letter: "Ent" },
	];
	const keyBoard = [row1, row2, row3];
	const [keyBoardState, setKeyBoardState] = useState(keyBoard);
	const [currentWord, setCurrentWord] = useState(word0);
	const [boardState, setBoardState] = useState(defultBoard);
	const [curLetterPosition, setCurLetterPosition] = useState(0);
	const [curWordPosition, setCurWordPosition] = useState(0);
	const [lettersHasBeenGuessed, setLettersHasBeenGuessed] = useState([]);
	const correctWord = "RIghT";

	const enterWord = () => {
		if (curLetterPosition > 4) {
           
            console.log(lettersHasBeenGuessed);
			const newBoard = boardState.map((word, index) => {
				if (index === curWordPosition) {
					const correctArray = correctWord.toLowerCase().split("");
					return word.map((letter, index) => {
						if (
							letter.letter.toLowerCase() === correctWord[index].toLowerCase()
						) {
							correctArray[index] = "";
							return { ...letter, colorId: "correct" };
						} else if (
							correctWord.toLowerCase().includes(letter.letter.toLowerCase()) &&
							correctArray.includes(letter.letter.toLowerCase())
						) {
							return { ...letter, colorId: "almost" };
						} else {
							return { ...letter, colorId: "wrong" };
						}
					});
				}
				return word;
			});
			setBoardState(newBoard);
			const newKeyBoard = keyBoardState.map((row, index) => {
                return row.map((element, index) => {
                    if(lettersHasBeenGuessed.toLowerCase().includes(element.letter.toLowerCase())){
                    if (element.letter === correctWord[index]) {
                        return { ...element, colorId: "correct" };
					} else if (correctWord.includes(element.letter)) {
                        return { ...element, colorId: "almost" };
					} else {
                        return { ...element, colorId: "wrong" };
					}}
                    return element;
				});
			});
			setKeyBoardState(newKeyBoard);
		}
        
		setCurWordPosition(curWordPosition + 1);
		setCurLetterPosition(0);
		setCurrentWord(boardState[curWordPosition]);
	};
	const deleteLetter = () => {
        if (curLetterPosition === 0) return;
		const newBoardState = [...boardState];
		newBoardState[curWordPosition][curLetterPosition - 1].letter = "";
		setBoardState(newBoardState);
		setCurLetterPosition(curLetterPosition - 1);
	};
	const addLetter = (letter) => {
        setLettersHasBeenGuessed(boardState.map(word => word.map(letter => letter.letter)).join(""));
		const newBoardState = [...boardState];
		newBoardState[curWordPosition][curLetterPosition].letter = letter;
		setBoardState(newBoardState);
		setCurLetterPosition(curLetterPosition + 1);
	};

	return (
		<GameContext.Provider //value prop is the value of the context provider to be used by all the children components
			value={{
				boardState,
				setBoardState,
				curWordPosition,
				curLetterPosition,
				setCurLetterPosition,
				setCurWordPosition,
				keyBoardState,
				enterWord,
				deleteLetter,
				addLetter,
				correctWord,
				setCurrentWord,
				row1,
				row2,
				row3,
				word1,
				word2,
				word3,
				word4,
				word5,
				word0,
				currentWord,
			}}
		>
			{props.children}
		</GameContext.Provider>
	);
};
