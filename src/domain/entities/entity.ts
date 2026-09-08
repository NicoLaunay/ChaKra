import type { EntityType } from './entity-type'
import type { EntitySize } from './entity-size'
import type { Sex } from './sex'
import type { Race } from './race'
import type { EntityPath } from './entity-path'
import type { Weapon } from '../combat/weapon'
import type { Armor } from '../combat/armor'
import { Pool } from './pool'
import { toPositiveInteger } from '../positive-integer'
import type { StatBlock } from './stat-block'
import type { Purse } from '../inventory/purse'

export interface Entity {
  name: string
  level: number
  type: EntityType
  size: EntitySize

  age: number | null
  weight: number | null
  sex: Sex
  race: Race | null

  purse: Purse
  items: string[]

  stats: StatBlock
  pv: Pool

  weapons: Weapon[]
  armors: Armor[]

  paths: EntityPath[]
}

export class EntityBuilder implements Entity {
  name: string = 'Unknown Entity'
  level: number = 1
  type: EntityType = 'LIVING'
  size: EntitySize = 'MEDIUM'
  age: number | null = null
  weight: number | null = null
  sex: Sex = 'FEMALE'
  race: Race | null = null
  purse: Purse = {
    copperCoins: 0,
    silverCoins: 0,
    goldCoins: 0,
    platinumCoins: 0
  }
  items: string[] = []
  stats: StatBlock = {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10
  }
  pv: Pool = Pool.create(toPositiveInteger(10))
  weapons: Weapon[] = []
  armors: Armor[] = []
  paths: EntityPath[] = []

  build(): Entity {
    return {
      name: this.name,
      level: this.level,
      type: this.type,
      size: this.size,
      age: this.age,
      weight: this.weight,
      sex: this.sex,
      race: this.race,
      purse: this.purse,
      items: this.items,
      stats: this.stats,
      pv: this.pv,
      weapons: this.weapons,
      armors: this.armors,
      paths: this.paths,
    }
  }

  withName(newName: string): EntityBuilder {
    this.name = newName
    return this
  }

  withLevel(newLevel: number): EntityBuilder {
    this.level = newLevel
    return this
  }

  withType(newType: EntityType): EntityBuilder {
    this.type = newType
    return this
  }

  withSize(newSize: EntitySize): EntityBuilder {
    this.size = newSize
    return this
  }

  withAge(newAge: number | null): EntityBuilder {
    this.age = newAge
    return this
  }

  withWeight(newWeight: number | null): EntityBuilder {
    this.weight = newWeight
    return this
  }

  withSex(newSex: Sex): EntityBuilder {
    this.sex = newSex
    return this
  }

  withRace(newRace: Race | null): EntityBuilder {
    this.race = newRace
    return this
  }

  withPurse(newPurse: Purse): EntityBuilder {
    this.purse = newPurse
    return this
  }

  withItems(newItems: string[]): EntityBuilder {
    this.items = newItems
    return this
  }

  withStats(newStats: StatBlock): EntityBuilder {
    this.stats = newStats
    return this
  }

  withPv(newPv: Pool): EntityBuilder {
    this.pv = newPv
    return this
  }

  withWeapons(newWeapons: Weapon[]): EntityBuilder {
    this.weapons = newWeapons
    return this
  }

  withArmors(newArmors: Armor[]): EntityBuilder {
    this.armors = newArmors
    return this
  }

  withPaths(newPaths: EntityPath[]): EntityBuilder {
    this.paths = newPaths
    return this
  }

}
