import { evaluate } from 'mathjs'

const percent = (n, perc) => (n * perc) / 100

const foo = {
  b: percent(100, 5)
}

describe('Math', () => {
  test('is expression correct', () => {
    expect(evaluate('100 - b', foo)).toBe(95)
  })
})
