module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (A) {
    let intervals = {};
    for (let i = 0; i < A; i++);
  },
};

function solve(A) {
  if (A === []) {
    return 0;
  }
  A = A.sort((a, b) => a[0] - b[0]);

  let c = 1;
  let inEndTime = A[0][1];
  let inBeginTime = A[0][0];
  for (let i = 1; i < A.length - 1; i++) {
    if (inEndTime > A[i][1]) {
      c++;
    } else {
      inEndTime = A[i][1];
    }
  }
  return c;
}

let res = solve([
  [0, 60],
  [0, 30],
  [20, 50],
]);

console.log(res);
