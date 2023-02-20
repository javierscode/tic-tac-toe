import { BoardEntity } from '../entities'
import { BOARD_SIZE } from './constants'

export function initializeBoard(): BoardEntity {
  const board: BoardEntity = Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => null)
  )
  return board
}
