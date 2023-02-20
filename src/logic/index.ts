import { Board } from '../entities/board.entity'
import { Cell } from '../entities/cell.entity'

export function initializeBoard(): Board {
  const board: Board = Array.from({ length: 3 }, (_, i) =>
    Array.from({ length: 3 }, (_, j) => {
      const cell: Cell = {
        id: 3 * i + j,
        value: null,
      }
      return cell
    })
  )
  return board
}
