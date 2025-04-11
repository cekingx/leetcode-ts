import { describe, it, assert } from 'vitest';
import { climbStairs, climbStairsIter } from '../src/70-climbing-stairs';

describe("70-climbing-stairs", function () {
  describe("Recursion", () => {
    it("should return value for 1 step", () => {
      const result = climbStairs(1);
      assert.equal(result, 1);
    })

    it("should return value for 5 step", () => {
      const result = climbStairs(5);
      assert.equal(result, 8)
    })

    it("should return value for 44 step", () => {
      const result = climbStairs(44);
      assert.equal(result, 1134903170)
    })
  })

  describe("Iteration", () => {
    it("should return value for 1 step", () => {
      const result = climbStairsIter(1);
      assert.equal(result, 1)
    })

    it("should return value for 5 step", () => {
      const result = climbStairs(5);
      assert.equal(result, 8)
    })

    it("should return value for 44 step", () => {
      const result = climbStairs(44);
      assert.equal(result, 1134903170)
    })
  })
})