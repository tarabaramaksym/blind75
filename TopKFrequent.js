var topKFrequent = function (nums, k) {
  let count = [];
  let positions = {};
  for (let i = 0; i < nums.length; i++) {
    if (positions[nums[i]] !== undefined) {
      count[positions[nums[i]]].c++;
    } else {
      positions[nums[i]] = count.length;
      count.push({ val: nums[i], c: 1 });
    }
  }

  console.log(count);
  count.sort((a, b) => b.c - a.c);
  console.log(count);
  return count.slice(0, k).map((n) => n.val);
};

let res = topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(res);
