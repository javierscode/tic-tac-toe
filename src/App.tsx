import { useState } from 'react'

import { BoardEntity, Mark } from './entities'
import { hasMarkWon, hasTheGameEnded } from './logic/game'
import { initializeBoard } from './logic/init'

function App() {
  const [board, setBoard] = useState<BoardEntity>(initializeBoard)
  const [turn, setTurn] = useState<Mark>(Mark.X)
  const [winner, setWinner] = useState<Mark | null>(null)
  const [isGameOver, setIsGameOver] = useState<boolean>(false)

  const changeTurn = () => setTurn(prevTurn => (prevTurn === Mark.X ? Mark.O : Mark.X))

  const handleCellClick = (rowIndex: number, cellIndex: number) => () => {
    if (board[rowIndex][cellIndex] !== null) return
    if (winner !== null) return
    const newBoard = [...board]
    newBoard[rowIndex][cellIndex] = turn
    setBoard(newBoard)
    if (hasMarkWon(newBoard, turn)) {
      setWinner(turn)
      setIsGameOver(true)
    } else if (hasTheGameEnded(newBoard)) {
      setIsGameOver(true)
    } else {
      changeTurn()
    }
  }

  return (
    <div className='App'>
      <h1>Tic Tac Toe</h1>
      <h2>Turn: {turn}</h2>
      <div className='board'>
        {board.map((row, rowIndex) => (
          <div className='row' key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div className='cell' key={cellIndex} onClick={handleCellClick(rowIndex, cellIndex)}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {winner !== null && <h2>Winner: {winner}</h2>}
      {isGameOver && !winner && <h2>Game Over</h2>}
    </div>
  )
}

export default App
