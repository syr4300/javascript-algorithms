 /*
 * @function maxRecursion
 * @description This algorithm will find the maximum value of a array of numbers.
 *
 * @param {Integer[]} arr Array of numbers
 * @param {Integer} left Index of the first element
 * @param {Integer} right Index of the last element
 *
 * @return {Integer} Maximum value of the array
 */

function maxRecursion (arr, left, right) {
  const len = arr.length
  if (len === 0 || !arr) {
    return undefined
  }
  if (left >= len || left < -len || right >= len || right < -len) {
    throw new Error('Index out of range')
  }
  if (left === right) {
    return arr[left]
  }
  // n >> m is equivalent to floor(n / pow(2, m)), floor(n / 2) in this case, which is the mid index
  const mid = (left + right) >> 1
  const leftMax = maxRecursion(arr, left, mid)
  const rightMax = maxRecursion(arr, mid + 1, right)
  // Return the maximum
  return Math.max(leftMax, rightMax)
}
export { maxRecursion }
