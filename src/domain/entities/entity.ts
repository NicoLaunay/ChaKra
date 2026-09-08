import type { EntityType } from './entity-type'
import type { EntitySize } from './entity-size'
import type { Sex } from './sex'
import type { Race } from './race'
import type { EntityPath } from './entity-path'
import type { Weapon } from '../combat/weapon'
import type { Armor } from '../combat/armor'

export interface Entity {
  readonly name: string
  readonly level: number
  readonly type: EntityType
  readonly size: EntitySize

  readonly age: number | null
  readonly weight: number | null
  readonly sex: Sex
  readonly race: Race

  readonly copperCoinsNb: number
  readonly silverCoinsNb: number
  readonly goldCoinsNb: number
  readonly platinumCoinsNb: number
  readonly items: readonly string[]

  readonly strength: number
  readonly dexterity: number
  readonly constitution: number
  readonly intelligence: number
  readonly wisdom: number
  readonly charisma: number

  readonly pvMax: number
  readonly pv: number

  readonly weapons: readonly Weapon[]
  readonly armors: readonly Armor[]

  readonly paths: readonly EntityPath[]
}
