import { PoolOverflowError } from "../errors";
import { type PositiveInteger } from "../positive-integer";

export class Pool {
  private max: number = 0
  private current: number = 0

  // private constructor: creation has to use the create method
  private constructor(current: number, max: number) {
    this.current = current;
    this.max = max;
  }

  static create(max: PositiveInteger, current?: PositiveInteger): Pool {
    // control on current value
    if (!current) {
      current = max
    }
    if (current > max) {
        throw new PoolOverflowError(current, max)
    }

    return new Pool(current, max);
  }

  equals(pool2: Pool): boolean {
    return this.max == pool2.max && this.current == pool2.current
  }

  recover(pointsRecovered: PositiveInteger) {
    if (this.current + pointsRecovered >= this.max) {
      this.current = this.max
      return
    }
    this.current += pointsRecovered
  }

  lose(pointsLost: PositiveInteger) {
    if (this.current - pointsLost <= 0) {
      this.current = 0
      return
    }
    this.current -= pointsLost
  }
}
