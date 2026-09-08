export const DICE_TYPES = {
  D4: {displayName: 'd4'},
  D6: {displayName: 'd6'},
  D8: {displayName: 'd8'},
  D10: {displayName: 'd10'},
  D12: {displayName: 'd12'},
  D20: {displayName: 'd20'},
  D100: {displayName: 'd100'},
}

export type DiceType = keyof typeof DICE_TYPES
