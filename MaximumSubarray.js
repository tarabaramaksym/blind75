var maxSubArray = function (nums) {
  let sum = 0;
  let maxSum;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(sum, maxSum === undefined ? sum : maxSum);
    if (sum <= 0) {
      sum = 0;
    }
  }
  return maxSum;
};

console.log(maxSubArray([-1]));

