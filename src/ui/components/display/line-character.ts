export interface LineCharacter {
  icon: string
  name: string
  profile: string
  race: string
  level: number
}

export class LineCharacterBuilder implements LineCharacter {
  icon: string = '../assets/app-logo-small.png'
  name: string = 'Personnage Anonyme'
  profile: string = 'Guerrier'
  race: string = 'Humain'
  level: number = 1

  build(): LineCharacter {
    return {
      icon: this.icon,
      name: this.name,
      profile: this.profile,
      race: this.race,
      level: this.level,
    }
  }
}
