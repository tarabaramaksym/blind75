/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let map = new Map(nums.map((n) => [n, true]));
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(i)) {
      return i;
    }
  }
  return nums.length;
};

missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
