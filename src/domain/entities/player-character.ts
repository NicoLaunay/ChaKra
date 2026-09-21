import { toPositiveInteger } from '../positive-integer'
import { EntityBuilder, type Entity } from './entity'
import type { Player } from './player'
import { Pool } from './pool'
import type { Profile } from './profile'

export interface PlayerCharacter {
  readonly entity: Entity
  readonly player: Player
  readonly profile: Profile

  readonly pc: Pool
  readonly pr: Pool
  readonly pm: Pool
}

export class PlayerCharacterBuilder implements PlayerCharacter {
  entity: Entity = new EntityBuilder().build()
  player: Player = { name: 'Unknown Player' }
  profile: Profile = {
    id: 0,
    name: 'void profile',
    lifeDice: 'D4',
    paths: [],
    starterWeapons: [],
    starterArmors: [],
  }
  pc: Pool = Pool.create(toPositiveInteger(10))
  pr: Pool = Pool.create(toPositiveInteger(10))
  pm: Pool = Pool.create(toPositiveInteger(0))

  build() {
    return {
      entity: this.entity,
      player: this.player,
      profile: this.profile,
      pc: this.pc,
      pr: this.pr,
      pm: this.pm,
    }
  }

  withPlayer(player: Player): this {
    this.player = player
    return this
  }

  withName(name: string): this {
    this.entity.name = name
    return this
  }
}
