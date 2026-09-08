export const ENTITY_SIZES = {
  TINY: { displayName: 'Minuscule'},
  VERY_SMALL: { displayName: 'Très petite'},
  SMALL: { displayName: 'Petite'},
  MEDIUM: { displayName: 'Moyenne'},
  BIG: { displayName: 'Grande'},
  HUGE: { displayName: 'Énorme'},
  COLOSSAL: { displayName: 'Colossale'},
} as const

export type EntitySize = keyof typeof ENTITY_SIZES
