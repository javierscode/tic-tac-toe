export const enum TicTacToeActionTypes {
  RESET_GAME = 'RESET_GAME',
  MAKE_MOVE = 'MAKE_MOVE',
}

export interface ResetGameAction {
  type: TicTacToeActionTypes.RESET_GAME
}

export function resetGame(): ResetGameAction {
  return {
    type: TicTacToeActionTypes.RESET_GAME,
  }
}

export interface MakeMoveAction {
  type: TicTacToeActionTypes.MAKE_MOVE
  payload: {
    row: number
    col: number
  }
}

export function makeMove(row: number, col: number): MakeMoveAction {
  return {
    type: TicTacToeActionTypes.MAKE_MOVE,
    payload: {
      row,
      col,
    },
  }
}

export type TicTacToeActions = ResetGameAction | MakeMoveAction
