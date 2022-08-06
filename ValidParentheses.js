

var isValid = function (s) {

  let brackets = [];
  let bracketTypes = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {

    if (bracketTypes[s[i]]) {
      brackets.push(s[i]);
    }

    else {
      let bracket = brackets.pop();
      if (bracketTypes[bracket] !== s[i]) {
        return false;
      }
    }
  }
  return brackets.length === 0;

};


console.log(isValid(")"));