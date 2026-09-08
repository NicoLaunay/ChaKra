import type { Skill } from './skill'

export interface Path {
  readonly id: number
  readonly name: string
  readonly skills: readonly Skill[]
}
