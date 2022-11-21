function twoSum(nums: number[], target: number): number[] {
  let firstIndex = 0;
  let secondIndex = 0;

  for (let outer = 0; outer < nums.length; outer++) {
    secondIndex = 0;
    for (let inner = 0; inner < nums.length; inner++) {
      if(firstIndex != secondIndex) {
        const sum = nums[firstIndex] + nums[secondIndex];
        if(sum == target) {
          return [firstIndex, secondIndex]
        }
      }
      secondIndex++;
    }

    firstIndex++;
  }

  return [0, 0]
};

export default twoSum;