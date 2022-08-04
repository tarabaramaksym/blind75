const str = "cbbd";

const lengthOfLongestSubstring = function (s) {

  let longest = 0;
  let str = '';
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    let sameSymbol = str.indexOf(s[i]);
    if (sameSymbol !== -1) {
      str = str.substr(sameSymbol + 1);
    }
    str = str + s[i];
    longest = Math.max(str.length, longest);
  };
  return longest;
}


console.log(lengthOfLongestSubstring(str));