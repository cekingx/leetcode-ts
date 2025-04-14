/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n == 0) {
    return;
  }

  if (m == 0 && n == 1) {
    nums1[0] = nums2[0]
  }

  let nums1Pointer = nums1.length - n;
  let nums2Pointer = 0;
  for(let i = nums1Pointer; i <= nums1.length; i++) {
    if (nums2Pointer > n-1) {
      break;
    }

    nums1[i] = nums2[nums2Pointer]
    for (let j = i; j > 0; j--) {
      if (nums1[j] < nums1[j-1]) {
        const temp = nums1[j-1]
        nums1[j-1] = nums1[j]
        nums1[j] = temp
      }
    }
    nums2Pointer++
  }
};

export { merge }