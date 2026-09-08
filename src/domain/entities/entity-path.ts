import type { Path } from './path'

export interface EntityPath {
  readonly path: Path
  readonly levelReached: number
}
