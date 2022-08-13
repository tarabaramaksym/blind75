var containsDuplicate = function (nums) {
  let map = {};
  for (const num of nums) {
    if (map[num]) {
      return true;
    }
    map[num] = true;
  }
  return false;
};
containsDuplicate([1, 3, 4, 5, 5, 5, 1, 2]);
