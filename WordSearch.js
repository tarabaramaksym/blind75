



const searchProximity = (board, word, indeces, i, j) => {

  if (!word) {
    return true;
  }

  const search = word[0];

  let proximity = [
    { i: i - 1, j },
    { i: i + 1, j },
    { i, j: j - 1 },
    { i, j: j + 1 }
  ]

  for (let i = 0; i < proximity.length; i++) {
    const prox = proximity[i];

    if (board[prox.i] && board[prox.i][prox.j] && !indeces[`${prox.i} ${prox.j}`] && board[prox.i][prox.j] === search) {
      indeces[`${prox.i} ${prox.j}`] = true;
      if (searchProximity(board, word.substr(1), indeces, prox.i, prox.j)) {
        return true;
      }
      indeces[`${prox.i} ${prox.j}`] = false;
    }
  }
  indeces = {};
  return false;
}

var exist = function (board, word) {

  word = word;
  const search = word[0];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === search) {

        let indeces = {};
        indeces[`${i} ${j}`] = true;

        let res = searchProximity(board, word.substr(1), indeces, i, j);
        if (res) {
          return true;
        }
        indeces[`${i} ${j}`] = false;
      }
    }
  }

  return false;

};


const board =
  [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCE";

console.log(exist(board, word));