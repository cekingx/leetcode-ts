import { assert, describe, it } from "vitest";
import { merge } from "../src/88-merge-sorted-array";

describe('88-merge-sorted-array', () => {
  it("should merge", () => {
    const nums1 = [1,2,3,0,0,0]
    const nums2 = [2,5,6]

    merge(nums1, 6, nums2, 3)
    assert.deepEqual(nums1, [1,2,2,3,5,6])
  })

  it("should merge", () => {
    const nums1 = [1]
    const nums2: number[] = []

    merge(nums1, 1, nums2, 0)
    assert.deepEqual(nums1, [1])
  })

  it("should merge", () => {
    const nums1 = [0]
    const nums2 = [1]

    merge(nums1, 0, nums2, 1)
    assert.deepEqual(nums1, [1])
  })

  it("should merge", () => {
    const nums1 = [4,5,6,0,0,0]
    const nums2 = [1,2,3]

    merge(nums1, 6, nums2, 3)
    assert.deepEqual(nums1, [1,2,3,4,5,6])
  })
})