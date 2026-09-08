import type { Stat } from "../entities/stat";
import type { Damage } from "./damage";

export interface Attack {
  name: string,
  attackStat: Stat,
  damageThrows: Damage[],
  description: string,
}


