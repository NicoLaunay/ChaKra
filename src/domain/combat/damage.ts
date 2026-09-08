import { DAMAGE_TYPES, type DamageType } from './damage-type'
import type { DiceType } from './dice-type'

export interface Damage {
  readonly diceType: DiceType
  readonly nbDice: number
  readonly modifier: number
  readonly type: DamageType
}

// ------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------

export function formatDamage(d: Damage): string {
  const dice = `${d.nbDice}${d.diceType.toLowerCase()}`          // "2d6"
  const mod =
    d.modifier === 0 ? '' : d.modifier > 0 ? `+${d.modifier}` : `${d.modifier}`
  return `${dice}${mod} ${DAMAGE_TYPES[d.type].displayName}`     // "2d6+3 Feu"
}
