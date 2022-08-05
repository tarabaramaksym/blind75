var maxArea = function (height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) {
      i++;
    }
    else {
      j--;
    }
  }
  return max;
};



console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));