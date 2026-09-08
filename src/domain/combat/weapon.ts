import type { Stat } from '../entities/stat'
import type { Damage } from './damage'

// NOTE : je n'avais pas ton Weapon.kt d'origine -> version minimale à confirmer.
// J'y ai fusionné Attack (attackStat + dégâts), comme convenu : une griffe et une
// épée sont deux armes, et une arme porte son profil d'attaque.
export interface Weapon {
  readonly id: number
  readonly name: string
  readonly attackStat: Stat
  readonly damages: readonly Damage[]
  readonly description: string
}
