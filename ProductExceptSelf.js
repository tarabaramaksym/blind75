var productExceptSelf = function (nums) {
  let output = new Array(nums.length);
  output[0] = 1;
  let post = 1;
  for (let i = 0, j = nums.length - 1; j >= 0; ) {
    if (i < nums.length - 1) {
      output[i + 1] = output[i] * nums[i];
      i++;
    } else {
      output[j] = output[j] * post;
      post = nums[j] * post;
      j--;
    }
  }
  return output;
};

productExceptSelf([1, 2, 3, 4]);
