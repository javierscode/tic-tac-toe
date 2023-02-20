import { useReducer } from 'react'

import { initializeGame } from './logic/init'
import { makeMove, resetGame } from './reducers/tic-tac-toe.actions'
import { ticTacToeReducer } from './reducers/tic-tac-toe.reducer'

const INITIAL_STATE = initializeGame()

function App() {
  const [{ board, turn, winner, isGameOver }, dispatch] = useReducer(
    ticTacToeReducer,
    INITIAL_STATE
  )

  const handleCellClick = (row: number, col: number) => dispatch(makeMove(row, col))

  const handleReset = () => dispatch(resetGame())

  return (
    <div className='App'>
      <h1>Tic Tac Toe</h1>
      <h2>Turn: {turn}</h2>
      <div className='board'>
        {board.map((row, rowIndex) => (
          <div className='row' key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div
                className='cell'
                key={colIndex}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {winner !== null && <h2>Winner: {winner}</h2>}
      {isGameOver && !winner && <h2>Game Over</h2>}
      {isGameOver && <button onClick={handleReset}>Reset</button>}
    </div>
  )
}

export default App
