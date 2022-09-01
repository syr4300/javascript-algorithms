import { selectMedian } from '../SelectMedian'

test('should return the median of an array of numbers:', () => {
  const medianValue = selectMedian([1, 3, 6, 4, 5])
  expect(medianValue).toBe(4)
})

test('should return the median of an array of numbers:', () => {
  const medianValue = selectMedian([8, 9, 1, 3, 5, 10, 11])
  expect(medianValue).toBe(8)
})

test('should return the median of an array of numbers:', () => {
  const medianValue = selectMedian([15, 18, 3, 9, 13, 5])
  expect(medianValue).toBe(11)
})

test('should return the median of an array of numbers:', () => {
  const medianValue = selectMedian([1, 3, 3, 4, 6, 8])
  expect(medianValue).toBe(3.5)
})
