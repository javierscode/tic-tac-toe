export const enum Mark {
  X = 'X',
  O = 'O',
}

export type BoardEntity = Array<Array<Mark | null>>

export type Game = {
  board: BoardEntity
  turn: Mark
  winner: Mark | null
}
