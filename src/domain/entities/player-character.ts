import type { Entity } from './entity'
import type { Player } from './player'
import type { Profile } from './profile'

export interface PlayerCharacter {
  readonly entity: Entity
  readonly player: Player
  readonly profile: Profile

  readonly pcMax: number
  readonly pc: number
  readonly prMax: number
  readonly pr: number
  readonly pmMax: number
  readonly pm: number
}
