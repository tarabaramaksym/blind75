


let nums = [3, 5, 1, 2, 25, 4];

let target = 3;


const twoSum = (nums) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    console.log(another);
    if (map[another] > -1) {
      console.log(map);
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

}

console.log(twoSum(nums));

