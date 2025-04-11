import { describe, it, assert } from 'vitest';
import climbStairs from '../src/70-climbing-stairs';

describe("70-climbing-stairs", function () {
  it("should return 0", () => {
    const result = climbStairs(1);

    assert.equal(result, 0);
  })
})