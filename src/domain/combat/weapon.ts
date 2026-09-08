import type { Attack } from './attack'

export interface Weapon {
  readonly id: number
  readonly name: string
  readonly attacks: Attack[]
  readonly description: string
}
