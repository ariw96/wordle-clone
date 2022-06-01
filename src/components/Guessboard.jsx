import React from "react";
import GeussBoardLetter from "./GeussBoardLetter";
import { useContext } from "react";
import { GameContext } from "./GameContext";
function GuessBoard() {
	const {word1,word2,word3,word4,word5,word0} = useContext(GameContext); //useContext(GameContext) returns an object with the properties of the GameContext object

//each div represents a row of the board
//each letter in the row represents a letter in the word that  being guessed
	return (
		<div className="guess-board">
			<div className="word0">  
				
				{word0.map((item, index) => {
					return <GeussBoardLetter  key={index} wordNum={0}  word={item} letterPos={index}  />;
				})}
			</div>
			<div className="word1">
				{word1.map((item, index) => {
					return <GeussBoardLetter key={index} wordNum={1}  word={item} letterPos={index}/>;
				})}
			</div>
			<div className="word2">
			{word2.map((item, index) => {
					return <GeussBoardLetter key={index} wordNum={2}  word={item} letterPos={index}  />;
				})}
			</div>
			<div className="word3">
			{word3.map((item, index) => {
					return <GeussBoardLetter key={index} wordNum={3}   word={item} letterPos={index}/>;
				})}
			</div>
			<div className="word4">
			{word4.map((item, index) => {
					return <GeussBoardLetter key={index} wordNum={4}  word={item} letterPos={index} />;
				})}
			</div>
			<div className="word5">
			{word5.map((item, index) => {
					return <GeussBoardLetter key={index} wordNum={5}  word={item}  letterPos={index}/>;
				})}
			</div>
		</div>
	);
}

export default GuessBoard;
