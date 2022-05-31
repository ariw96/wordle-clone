import React from "react";
import Game from "./components/Game";
import { createContext } from "react";
import "./App.css";
import Guessboard from "./components/Guessboard";
import Keyboard from "./components/Keyboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
export const GameContext = createContext();

function App() {
	const defultBoard = [
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
	];
	const [guessBoard, setGuessBoard] = useState(defultBoard);
	return (
		<>
			<h1>wordle</h1>
			<GameContext.Provider value={{}}>
			<Guessboard />
			<Keyboard />
			</GameContext.Provider>
		</>
	);
}
export default App;
