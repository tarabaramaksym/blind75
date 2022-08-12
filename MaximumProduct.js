const maxProduct = (nums) => {
  let product = 0;
  let maxProduct = nums[0];
  let negative = nums.reduce((a, b) => (b < 0 ? ++a : a), 0);

  for (let i = 0; i < nums.length; i++) {
    if (
      product === 0 ||
      (nums[i] > 0 && product < 0 && (negative % 2 == 0 || negative === 0))
    ) {
      product = nums[i];
    } else {
      product *= nums[i];
    }

    if (nums[i] < 0) {
      negative--;
    }

    maxProduct = Math.max(maxProduct, product);
  }
  return maxProduct;
};

console.log(maxProduct([2, -5, -2, -4, 3]));
