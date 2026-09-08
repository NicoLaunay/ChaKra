import type { RacialAbility } from './racial-ability'

export interface Race {
  readonly id: number
  readonly name: string
  readonly strengthModifier: number
  readonly dexterityModifier: number
  readonly constitutionModifier: number
  readonly intelligenceModifier: number
  readonly wisdomModifier: number
  readonly charismaModifier: number
  readonly abilities: readonly RacialAbility[]
}
