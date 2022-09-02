import { maxRecursion } from '../MaxRecursion'

describe('Test maxRecursion function', () => {
  const positiveArray = [1, 2, 4, 5]

  const negativeArray = [-1, -2, -4, -5]

  const positiveAndNegativeArray = [1, 2, 4, 5, -1, -2, -4, -5]

  const zeroArray = [0, 0, 0, 0]

  const emptyArray = []

  it('Testing with positive arrays', () => {
    expect(maxRecursion(positiveArray, 0, positiveArray.length - 1)).toBe(5)
  })

  it('Testing with negative arrays', () => {
    expect(maxRecursion(negativeArray, 0, negativeArray.length - 1)).toBe(-1)
  })

  it('Testing with positive and negative arrays', () => {
    expect(
      maxRecursion(
        positiveAndNegativeArray,
        0,
        positiveAndNegativeArray.length - 1
      )
    ).toBe(5)
  })

  it('Testing with zero arrays', () => {
    expect(maxRecursion(zeroArray, 0, zeroArray.length - 1)).toBe(0)
  })

  it('Testing with empty arrays', () => {
    expect(maxRecursion(emptyArray, 0, emptyArray.length - 1)).toBe(undefined)
  })
})
