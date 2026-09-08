import type { DiceType } from '../combat/dice-type'
import type { Weapon } from '../combat/weapon'
import type { Armor } from '../combat/armor'
import type { Path } from './path'

export interface Profile {
  readonly id: number
  readonly name: string
  readonly lifeDice: DiceType
  readonly paths: readonly Path[]
  readonly starterWeapons: readonly Weapon[]
  readonly starterArmors: readonly Armor[]
}
