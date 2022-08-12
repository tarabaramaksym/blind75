
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversed = s.split('').reverse().join('');
  return s == reversed;
};


isPalindrome("A man, a plan, a canal: Panama");