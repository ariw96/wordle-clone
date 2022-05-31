import React from "react";
import GeussBoardLetter from "./GeussBoardLetter";

function GuessBoard() {

	return (
		<div className="guess-board">
			<div className="row-of-word">
				<GeussBoardLetter letterPosition={0} numberWord={0} />
				<GeussBoardLetter letterPosition={1} numberWord={0} />
				<GeussBoardLetter letterPosition={2} numberWord={0} />
				<GeussBoardLetter letterPosition={3} numberWord={0} />
				<GeussBoardLetter letterPosition={4} numberWord={0} />
			</div>
			<div className="row-of-word">
				<GeussBoardLetter letterPosition={0} numberWord={1} />
				<GeussBoardLetter letterPosition={1} numberWord={1} />
				<GeussBoardLetter letterPosition={2} numberWord={1} />
				<GeussBoardLetter letterPosition={3} numberWord={1} />
				<GeussBoardLetter letterPosition={4} numberWord={1} />
			</div>
			<div className="row-of-word">
				<GeussBoardLetter letterPosition={0} numberWord={2} />
				<GeussBoardLetter letterPosition={1} numberWord={2} />
				<GeussBoardLetter letterPosition={2} numberWord={2} />
				<GeussBoardLetter letterPosition={3} numberWord={2} />
				<GeussBoardLetter letterPosition={4} numberWord={2} />
			</div>
			<div className="row-of-word">
				<GeussBoardLetter letterPosition={0} numberWord={3} />
				<GeussBoardLetter letterPosition={1} numberWord={3} />
				<GeussBoardLetter letterPosition={2} numberWord={3} />
				<GeussBoardLetter letterPosition={3} numberWord={3} />
				<GeussBoardLetter letterPosition={4} numberWord={3} />
			</div>
			<div className="row-of-word">
				<GeussBoardLetter letterPosition={0} numberWord={4} />
				<GeussBoardLetter letterPosition={1} numberWord={4} />
				<GeussBoardLetter letterPosition={2} numberWord={4} />
				<GeussBoardLetter letterPosition={3} numberWord={4} />
				<GeussBoardLetter letterPosition={4} numberWord={4} />
			</div>
			<div className="row-of-word">
				<GeussBoardLetter letterPosition={0} numberWord={5} />
				<GeussBoardLetter letterPosition={1} numberWord={5} />
				<GeussBoardLetter letterPosition={2} numberWord={5} />
				<GeussBoardLetter letterPosition={3} numberWord={5} />
				<GeussBoardLetter letterPosition={4} numberWord={5} />
			</div>
		</div>
	);
}

export default GuessBoard;
