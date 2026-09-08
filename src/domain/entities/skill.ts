export interface Skill {
  readonly id: number
  readonly name: string
  readonly level: number
  readonly description: string
  readonly isLimited: boolean
  readonly isSpell: boolean
}
