import type { EntityType } from './entity-type'
import type { EntitySize } from './entity-size'
import type { Sex } from './sex'
import type { Race } from './race'
import type { EntityPath } from './entity-path'
import type { Weapon } from '../combat/weapon'
import type { Armor } from '../combat/armor'

export interface Entity {
  name: string
  level: number
  type: EntityType
  size: EntitySize

  age: number | null
  weight: number | null
  sex: Sex
  race: Race

  copperCoinsNb: number
  silverCoinsNb: number
  goldCoinsNb: number
  platinumCoinsNb: number
  items: string[]

  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number

  pvMax: number
  pv: number

  weapons: Weapon[]
  armors: Armor[]

  paths: EntityPath[]
}
