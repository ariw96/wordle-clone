import React from 'react'
import { GameContext } from './GameContext'
import { useContext } from 'react'
function GeussBoardLetter({ numberWord,letterPosition}) {
    const {boardState}= useContext(GameContext)
    const curLetter=boardState[numberWord][letterPosition]
    
  return (
    <div>{curLetter}</div>
  )
}

export default GeussBoardLetter