import React from 'react'
import {useState,createContext,useEffect} from 'react'
import axios from 'axios'

export const GameContext = createContext()


export const GameProvider = props=>{
    const defultBoard = [
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
	];
	const [boardState, setBoardState] = useState(defultBoard);
	const [curLetterPosition, setCurLetterPosition] = useState(0)
	const [curWordPosition, setCurWordPosition] = useState(0)
    const correctWord = "RIGHT"
    const enterWord = ()=>{
        if(curLetterPosition===5){
            setCurWordPosition(curWordPosition+1)
            setCurLetterPosition(0)
        }
    }
    const deleteLetter = ()=>{
        if(curLetterPosition===0)return
        const newBoardState = [...boardState];
        newBoardState[curWordPosition][curLetterPosition-1] = "";     
        setBoardState(newBoardState);
        setCurLetterPosition(curLetterPosition - 1);
    }
    const addLetter = (letter)=>{
        const newBoardState = [...boardState];
        newBoardState[curWordPosition][curLetterPosition] = letter;
		setBoardState(newBoardState);
		setCurLetterPosition(curLetterPosition + 1);
    }

//     const api = "https://nameless-cove-68474.herokuapp.com/shoes";
// 	const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

	
// 	useEffect(() => {
// 		const getProducts = async () => {
// 			setLoading(true);
// 			try {
			
// 				const response = await axios.get(api);
// 					setData(response.data.shoes);
// 					compoundMounted = false;
// 					console.log(response.data.shoes);
				
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		};
		
// 		getProducts();
// 	}, []);
    return(
      
        	<GameContext.Provider   //value prop is the value of the context provider to be used by all the children components
            value={{
                boardState,
                setBoardState,
                curWordPosition,
                curLetterPosition,
                setCurLetterPosition,
                setCurWordPosition,
                enterWord,
                deleteLetter,
                addLetter,
                correctWord,
            }}
        >
         {props.children}
        </GameContext.Provider>
    )
}
