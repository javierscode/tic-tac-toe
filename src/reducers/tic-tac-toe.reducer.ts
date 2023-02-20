import { Game, Mark } from '../entities'
import { hasMarkWon, hasTheGameEnded } from '../logic/game'
import { initializeGame } from '../logic/init'
import { TicTacToeActions, TicTacToeActionTypes } from './tic-tac-toe.actions'

export function ticTacToeReducer(state: Game, actions: TicTacToeActions): Game {
  switch (actions.type) {
    case TicTacToeActionTypes.RESET_GAME: {
      return initializeGame()
    }
    case TicTacToeActionTypes.MAKE_MOVE: {
      const { row, col } = actions.payload

      if (state.board[row][col] !== null) return state
      if (state.winner !== null) return state

      const board = [...state.board]
      board[row][col] = state.turn

      let winner: Mark | null = state.winner
      let isGameOver = state.isGameOver
      let turn: Mark = state.turn

      if (hasMarkWon(board, state.turn)) {
        winner = state.turn
        isGameOver = true
      } else if (hasTheGameEnded(board)) {
        isGameOver = true
      } else {
        turn = state.turn === Mark.X ? Mark.O : Mark.X
      }

      return {
        ...state,
        board,
        turn,
        winner,
        isGameOver,
      }
    }
    default:
      return state
  }
}
