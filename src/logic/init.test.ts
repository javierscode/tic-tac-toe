import { initializeBoard } from './init'

describe('initializeBoard', () => {
  describe('when called', () => {
    it('should return a 3x3 board', () => {
      const board = initializeBoard()

      expect(board.length).toBe(3)
      expect(board[0].length).toBe(3)
      expect(board[1].length).toBe(3)
      expect(board[2].length).toBe(3)
    })

    it('should return a board with 9 empty cells', () => {
      const board = initializeBoard()

      expect(board[0][0]).toBe(null)
      expect(board[0][1]).toBe(null)
      expect(board[0][2]).toBe(null)
      expect(board[1][0]).toBe(null)
      expect(board[1][1]).toBe(null)
      expect(board[1][2]).toBe(null)
    })
  })
})
