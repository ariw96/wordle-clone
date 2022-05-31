import React from 'react'
import {useState,createContext,useEffect} from 'react'
import axios from 'axios'

export const GameContext = createContext()


export const GameProvider = props=>{
    const defultBoard = [
		["a", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "a", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
		["", "", "", "", ""],
	];
	const [boardState, setBoardState] = useState(defultBoard);
	const [curLetterPosition, setCurLetterPosition] = useState(0)
	const [curWordPosition, setCurWordPosition] = useState(0)
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
      
        	<GameContext.Provider
            value={{
                boardState,
                setBoardState,
                curWordPosition,
                curLetterPosition,
                setCurLetterPosition,
                setCurWordPosition,
            }}
        >
         {props.children}
        </GameContext.Provider>
    )
}
