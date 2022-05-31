import React from 'react'
import { GameContext } from './GameContext'
import { useContext } from 'react'
function GeussBoardLetter({ wordNum,letterPosition}) {
    const {boardState,correctWord,curWordPosition}= useContext(GameContext)
    const curLetter=boardState[wordNum][letterPosition]//get the letter from the boardState
    const correct = correctWord[letterPosition]===curLetter
    const almost = correctWord.includes(curLetter)&&!correct&&curLetter!==""
    const wrong = !correctWord.includes(curLetter)&&!correct&&curLetter!==""
    const empty = curLetter===""
    const letterId = curWordPosition>wordNum &&
   (correct?"correct":almost?"almost":wrong?"wrong":"empty")
  return (
    <div className='letter' id={letterId}>{curLetter}</div>
  )
}

export default GeussBoardLetter