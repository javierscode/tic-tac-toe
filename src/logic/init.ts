import { BoardEntity, Game, Mark } from '../entities'
import { BOARD_SIZE } from './constants'

export function initializeBoard(): BoardEntity {
  const board: BoardEntity = Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => null)
  )
  return board
}

export function initializeGame(firstTurn = Mark.X): Game {
  return {
    board: initializeBoard(),
    turn: firstTurn,
    winner: null,
    isGameOver: false,
  }
}
