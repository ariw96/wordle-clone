import React from "react";
import { useState } from "react";
import GeussedLetter from "./GeussedLetter";

function Guessboard() {

	return (
		<div className="guess-board">
			<div className="row-of-word">
				<GeussedLetter letterPosition={0} attemptValue={0} />
				<GeussedLetter letterPosition={1} attemptValue={0} />
				<GeussedLetter letterPosition={2} attemptValue={0} />
				<GeussedLetter letterPosition={3} attemptValue={0} />
				<GeussedLetter letterPosition={4} attemptValue={0} />
			</div>
			<div className="row-of-word">
				<GeussedLetter letterPosition={0} attemptValue={1} />
				<GeussedLetter letterPosition={1} attemptValue={1} />
				<GeussedLetter letterPosition={2} attemptValue={1} />
				<GeussedLetter letterPosition={3} attemptValue={1} />
				<GeussedLetter letterPosition={4} attemptValue={1} />
			</div>
			<div className="row-of-word">
				<GeussedLetter letterPosition={0} attemptValue={2} />
				<GeussedLetter letterPosition={1} attemptValue={2} />
				<GeussedLetter letterPosition={2} attemptValue={2} />
				<GeussedLetter letterPosition={3} attemptValue={2} />
				<GeussedLetter letterPosition={4} attemptValue={2} />
			</div>
			<div className="row-of-word">
				<GeussedLetter letterPosition={0} attemptValue={3} />
				<GeussedLetter letterPosition={1} attemptValue={3} />
				<GeussedLetter letterPosition={2} attemptValue={3} />
				<GeussedLetter letterPosition={3} attemptValue={3} />
				<GeussedLetter letterPosition={4} attemptValue={3} />
			</div>
			<div className="row-of-word">
				<GeussedLetter letterPosition={0} attemptValue={4} />
				<GeussedLetter letterPosition={1} attemptValue={4} />
				<GeussedLetter letterPosition={2} attemptValue={4} />
				<GeussedLetter letterPosition={3} attemptValue={4} />
				<GeussedLetter letterPosition={4} attemptValue={4} />
			</div>
			<div className="row-of-word">
				<GeussedLetter letterPosition={0} attemptValue={5} />
				<GeussedLetter letterPosition={1} attemptValue={5} />
				<GeussedLetter letterPosition={2} attemptValue={5} />
				<GeussedLetter letterPosition={3} attemptValue={5} />
				<GeussedLetter letterPosition={4} attemptValue={5} />
			</div>
		</div>
	);
}

export default Guessboard;
