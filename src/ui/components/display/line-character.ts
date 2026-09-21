import type { PlayerCharacter } from '@/domain'

export interface LineCharacter {
  icon: string
  player: string
  name: string
  profile: string
  race: string
  level: number
}

export class LineCharacterBuilder {
  private icon = '../assets/app-logo-small.png'
  private player = 'Joueur Anonyme'
  private name = 'Personnage Anonyme'
  private profile = 'Guerrier'
  private race = 'Humain'
  private level = 1

  withIcon(icon: string): this {
    this.icon = icon
    return this
  }

  withPlayer(player: string): this {
    this.player = player
    return this
  }

  withName(name: string): this {
    this.name = name
    return this
  }

  withProfile(profile: string): this {
    this.profile = profile
    return this
  }

  withRace(race: string): this {
    this.race = race
    return this
  }

  withLevel(level: number): this {
    this.level = level
    return this
  }

  build(): LineCharacter {
    return {
      icon: this.icon,
      player: this.player,
      name: this.name,
      profile: this.profile,
      race: this.race,
      level: this.level,
    }
  }
}

export function toLineCharacter(character: PlayerCharacter): LineCharacter {
  return new LineCharacterBuilder()
    .withName(character.entity.name)
    .withPlayer(character.player.name)
    .withProfile(character.profile.name)
    .withRace(character.entity.race?.name || '-')
    .withLevel(character.entity.level)
    .build()
}
