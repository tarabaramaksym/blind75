var rob = function (nums) {
  let rob1 = 0;
  let rob2 = 0;

  for (const n of nums) {
    let tmp = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = tmp;
  }
  return rob2;
};

console.log(rob([2, 1, 1, 2]));
