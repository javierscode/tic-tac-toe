import { initializeBoard } from '.'

describe('initializeBoard', () => {
  describe('when called', () => {
    it('should return a 3x3 board', () => {
      const board = initializeBoard()

      expect(board.length).toBe(3)
      expect(board[0].length).toBe(3)
      expect(board[1].length).toBe(3)
      expect(board[2].length).toBe(3)
    })

    it('should return a board with 9 cells, numerated and empty', () => {
      const board = initializeBoard()

      expect(board[0][0].id).toBe(0)
      expect(board[0][0].value).toBe(null)
      expect(board[0][1].id).toBe(1)
      expect(board[0][1].value).toBe(null)
      expect(board[0][2].id).toBe(2)
      expect(board[0][2].value).toBe(null)
      expect(board[1][0].id).toBe(3)
      expect(board[1][0].value).toBe(null)
      expect(board[1][1].id).toBe(4)
      expect(board[1][1].value).toBe(null)
      expect(board[1][2].id).toBe(5)
      expect(board[1][2].value).toBe(null)
    })
  })
})
