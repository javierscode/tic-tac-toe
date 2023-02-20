import { BoardEntity, Mark } from '../entities'
import { BOARD_SIZE } from './constants'

export function checkLine(line: Array<Mark | null>, mark: Mark): boolean {
  return line.every(cell => cell === mark)
}

export function hasMarkWon(board: BoardEntity, mark: Mark): boolean {
  // check rows
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (checkLine(board[i], mark)) return true
  }
  // check columns
  for (let i = 0; i < BOARD_SIZE; i++) {
    const column = board.map(row => row[i])
    if (checkLine(column, mark)) return true
  }
  // check diagonals
  const firstDiagonal = board.map((row, i) => row[i])
  if (checkLine(firstDiagonal, mark)) return true
  const secondDiagonal = board.map((row, i) => row[BOARD_SIZE - 1 - i])
  if (checkLine(secondDiagonal, mark)) return true

  return false
}

export function hasTheGameEnded(board: BoardEntity): boolean {
  return board.every(row => row.every(cell => cell !== null))
}
