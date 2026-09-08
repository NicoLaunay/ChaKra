export const ENTITY_TYPES = {
  LIVING: { displayName: 'Vivante' },
  HUMANOID: { displayName: 'Humanoïde' },
  VEGETATIVE: { displayName: 'Végétative' },
  NON_LIVING: { displayName: 'Non-vivante' },
} as const

export type EntityType = keyof typeof ENTITY_TYPES
