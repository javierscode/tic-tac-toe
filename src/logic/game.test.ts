import { BoardEntity, Mark } from '../entities'
import { checkLine, hasMarkWon } from './game'

describe('checkLine', () => {
  describe('when called with a line of 3 cells and a mark', () => {
    it('should return true if all cells have the same mark', () => {
      const markToCheck = Mark.X
      const line: Mark[] = [Mark.X, Mark.X, Mark.X]

      expect(checkLine(line, markToCheck)).toBe(true)
    })

    it('should return false if all cells do not have the same mark', () => {
      const markToCheck = Mark.O
      const line: Mark[] = [Mark.X, Mark.X, Mark.O]
      expect(checkLine(line, markToCheck)).toBe(false)
    })
  })
})

describe('hasMarkWon', () => {
  describe('when called with a board and a mark', () => {
    it('should return true if the mark has won', () => {
      const markToCheck = Mark.X
      const board: BoardEntity = [
        [Mark.X, Mark.X, Mark.X],
        [Mark.O, Mark.O, null],
        [null, null, null],
      ]
      expect(hasMarkWon(board, markToCheck)).toBe(true)
    })
    it('should return false if the mark has not won', () => {
      const markToCheck = Mark.O
      const board: BoardEntity = [
        [Mark.X, null, null],
        [Mark.O, Mark.O, null],
        [null, null, null],
      ]
      expect(hasMarkWon(board, markToCheck)).toBe(false)
    })
  })
})
