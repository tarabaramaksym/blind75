
var merge = function (intervals) {

  intervals.sort((a, b) => (a[0] - b[0]))
  let merged = [];
  for (let i = 0; i < intervals.length; i++) {

    let bottom = intervals[i][0];
    let top = intervals[i][1];

    while (i + 1 < intervals.length && bottom <= intervals[i + 1][1] && top >= intervals[i + 1][0]) {
      top = intervals[i + 1][1];


      i++;
    }

    merged.push([bottom, top]);
  }
  return merged;
}

console.log(merge([[1, 4], [0, 4]]))