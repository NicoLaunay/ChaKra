export const DAMAGE_TYPES = {
  PHYSICAL: { displayName: 'Physique' },
  MAGICAL:  { displayName: 'Magique' },
  FIRE:     { displayName: 'Feu' },
  ICE:      { displayName: 'Glace' },
  ACID:     { displayName: 'Acide' },
} as const

export type DamageType = keyof typeof DAMAGE_TYPES
// => 'PHYSICAL' | 'MAGICAL' | 'FIRE' | 'ICE' | 'ACID'
