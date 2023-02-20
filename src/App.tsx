import { useState } from 'react'

import { BoardEntity, Game, Mark } from './entities'
import { hasMarkWon, hasTheGameEnded } from './logic/game'
import { initializeGame } from './logic/init'

function App() {
  const [{ board, turn, winner, isGameOver }, setGame] = useState<Game>(initializeGame)
  const setBoard = (board: BoardEntity) => setGame(prevGame => ({ ...prevGame, board }))
  const changeTurn = () =>
    setGame(prevGame => ({ ...prevGame, turn: prevGame.turn === Mark.X ? Mark.O : Mark.X }))
  const setWinner = (winner: Mark) => setGame(prevGame => ({ ...prevGame, winner }))
  const setGameOver = () => setGame(prevGame => ({ ...prevGame, isGameOver: true }))

  const handleCellClick = (rowIndex: number, cellIndex: number) => () => {
    if (board[rowIndex][cellIndex] !== null) return
    if (winner !== null) return
    const newBoard = [...board]
    newBoard[rowIndex][cellIndex] = turn
    setBoard(newBoard)
    if (hasMarkWon(newBoard, turn)) {
      setWinner(turn)
      setGameOver()
    } else if (hasTheGameEnded(newBoard)) {
      setGameOver()
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
