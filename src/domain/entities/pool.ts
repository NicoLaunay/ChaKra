import { PoolOverflowError } from '../errors'
import { type PositiveInteger } from '../positive-integer'

export class Pool {
  readonly current: number
  readonly max: number

  // constructeur privé : la création passe par create()
  private constructor(current: number, max: number) {
    this.current = current
    this.max = max
  }

  static create(max: PositiveInteger, current?: PositiveInteger): Pool {
    const value = current ?? max
    if (value > max) {
      throw new PoolOverflowError(value, max)
    }
    return new Pool(value, max)
  }

  equals(other: Pool): boolean {
    return this.max === other.max && this.current === other.current
  }

  recover(pointsRecovered: PositiveInteger): Pool {
    return new Pool(Math.min(this.max, this.current + pointsRecovered), this.max)
  }

  lose(pointsLost: PositiveInteger): Pool {
    return new Pool(Math.max(0, this.current - pointsLost), this.max)
  }
}
