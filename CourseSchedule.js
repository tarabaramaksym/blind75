var canFinish = function (numCourses, prerequisites) {
  let map = {};
  prerequisites.forEach((element) => {
    if (!map[element[0]]) {
      map[element[0]] = [];
    }
    map[element[0]].push(element[1]);
  });

  let visitSet = {};

  const dfs = (course) => {
    if (visitSet[course]) {
      return false;
    }
    if (map[course] === []) {
      return true;
    }

    visitSet[course] = true;
    for (let i = 0; map[course] && i < map[course].length; i++) {
      if (!dfs(map[course][i])) {
        return false;
      }
    }
    visitSet[course] = false;
    map[course] = [];
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (map[i] && !dfs(i)) {
      return false;
    }
  }
  return true;
};

const res = canFinish(2, [[1, 0]]);

console.log(res);
