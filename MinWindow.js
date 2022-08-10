
var minWindow = function (s, t) {

  if (t === '') {
    return '';
  }

  let countT = {};
  let window = {};

  for (const c of t) {
    countT[c] = countT[c] ? 1 + countT[c] : 1;
  }

  let have = 0;
  let need = countT.length;

  let res = [-1, -1];
  let resLen = null;
  let l = 0;

  for (const r in s) {
    let c = s[r];
    window[c] = window[c] ? window[c] + 1 : 1;
    if (countT[c] && window[c] === countT) {
      have++;
    }

    while (have === need) {
      if (resLen === null || r - l + 1 < resLen) {
        res = [l, r];
        resLen = r - l + 1;
      }
      window[s[l]].splice(0, 1);
      if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
        have -= 1;
      }
      l += 1;
    }
  }
  l = res;
  r = res;
  console.log(res);
  return resLen !== null ? s.slice(l, r + 1) : ''




};


const s = "ADOBECODEBANC", t = "ABC"
console.log(minWindow(s, t));