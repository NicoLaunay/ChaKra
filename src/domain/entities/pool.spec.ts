import { expect, it } from "vitest"
import { toPositiveInteger } from "../positive-integer"
import { Pool } from "./pool"

it("Augmente le remplissage de la jauge", () => {
  const pv: Pool = Pool.create(toPositiveInteger(10), toPositiveInteger(5))
  const goalPool: Pool = Pool.create(toPositiveInteger(10), toPositiveInteger(8))
  pv.recover(toPositiveInteger(3))
  expect(
    pv.equals(goalPool)
  ).toBe(true)
})

it("Diminue le remplissage de la jauge", () => {
  const pv: Pool = Pool.create(toPositiveInteger(10), toPositiveInteger(5))
  const goalPool: Pool = Pool.create(toPositiveInteger(10), toPositiveInteger(2))
  pv.lose(toPositiveInteger(3))
  expect(
    pv.equals(goalPool)
  ).toBe(true)
})
