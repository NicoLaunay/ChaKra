import { describe, it, expect } from 'vitest'
import { formatDamage } from './damage'

it('formate un jet de dégâts', () => {
  expect(
    formatDamage({ diceType: 'D6', nbDice: 2, modifier: 3, type: 'FIRE' }),
  ).toBe('2d6+3 Feu')
})
