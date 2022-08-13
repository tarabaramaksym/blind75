var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    mid = left + right;
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

console.log(findMin([4, 3, 2, 1]));
