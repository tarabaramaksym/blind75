var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let m1 = {};
  let m2 = {};

  for (let i = 0; i < s.length; i++) {
    m1[s[i]] = !m1[s[i]] ? 1 : m1[s[i]] + 1;
    m2[t[i]] = !m2[t[i]] ? 1 : m2[t[i]] + 1;
  }
  console.log(m1);
  console.log(m2);
  for (let i = 0; i < s.length; i++) {
    if (m1[s[i]] != m2[s[i]] || m1[t[i]] != m2[t[i]]) {
      return false;
    }
  }
  return true;
};

isAnagram("anagram", "naagram");
