import React from "react";

import { createContext, useState } from "react";
import "./App.css";
import GuessBoard from "./components/GuessBoard";
import KeyBoard from "./components/KeyBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { GameProvider } from "./components/GameContext";

function App() {
	return (
		<>
			<h1>wordle</h1>
			<GameProvider>
				<GuessBoard />
				<KeyBoard />
			</GameProvider>
		</>
	);
}
export default App;
