var setZeroes = function (matrix) {

  let iCoords = {};
  let jCoords = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        iCoords[i] = true;
        jCoords[j] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (iCoords[i] || jCoords[j]) {
        matrix[i][j] = 0;
      }
    }
  }

};

let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];

setZeroes(matrix);

console.log(matrix);