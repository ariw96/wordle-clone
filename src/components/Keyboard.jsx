import React from 'react'
import KeyBoardLetter from './KeyBoardLetter'

function KeyBoard() {
    const row1 = [{letter: 'Q'}, {letter: 'W'}, {letter: 'E'}, {letter: 'R'}, {letter: 'T'}, {letter: 'Y'}, {letter: 'U'}, {letter: 'I'}, {letter: 'O'}, {letter: 'P'}]
    const row2 = [{letter: 'A'}, {letter: 'S'}, {letter: 'D'}, {letter: 'F'}, {letter: 'G'}, {letter: 'H'}, {letter: 'J'}, {letter: 'K'}, {letter: 'L'}]
    const row3 = [{letter:"Del"},{letter: 'Z'}, {letter: 'X'}, {letter: 'C'}, {letter: 'V'}, {letter: 'B'}, {letter: 'N'}, {letter: 'M'}, {letter: 'Ent '}]
  return (
    <div className="keyboard">
        <div className="row1">
            {row1.map((letter, index) => {
                return (
                    <KeyBoardLetter key={index} letter={letter.letter} />
                    )
                })}
        </div>
        <div className="row2">
            {row2.map((letter, index) => {
                return (
                    <KeyBoardLetter key={index} letter={letter.letter} />
                    )
                }
                )}
        </div>
        <div className="row3">
            {row3.map((letter, index) => {
                return (
                    <KeyBoardLetter key={index} letter={letter.letter} />
                    )
            }
            )}
        </div>
    </div>

 
  )
}

export default KeyBoard