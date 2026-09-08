export const STATS = {
  STRENGTH:     { displayName: 'Force',        trigram: 'FOR' },
  DEXTERITY:    { displayName: 'Dextérité',    trigram: 'DEX' },
  CONSTITUTION: { displayName: 'Constitution', trigram: 'CON' },
  INTELLIGENCE: { displayName: 'Intelligence', trigram: 'INT' },
  WISDOM:       { displayName: 'Sagesse',      trigram: 'SAG' },
  CHARISMA:     { displayName: 'Charisme',     trigram: 'CHA' },
} as const

export type Stat = keyof typeof STATS
