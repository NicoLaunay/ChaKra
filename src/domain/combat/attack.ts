import type { Stat } from "../entities/stat";
import { formatDamage, type Damage } from "./damage";

export interface Attack {
  name: string,
  attackStat: Stat,
  damageThrows: Damage[],
  description: string,
}

export function formatAttackDamage(attack: Attack): string {
  let damages = ''

  attack.damageThrows.forEach((dmg, index) => {
    damages += index == 0 ? '' : ' + '
    damages += formatDamage(dmg)
  })

  return damages
}


