export const SEXES = {
  FEMALE: { displayName: 'Féminin' },
  MALE: { displayName: 'Masculin' },
  HERMAPHRODITE: { displayName: 'Hermaphrodite' },
  SEXLESS: { displayName: 'Asexué' },
  NON_BINARY: { displayName: 'Non binaire' },
} as const

export type Sex = keyof typeof SEXES
