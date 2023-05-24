function repeatStr (n, str) {
    let startString = '';
    for (i = 0; i < n; i++)
      startString += str;
    return startString;
  }

// or use repeat() function

function repeatStr (n, s) {
  return s.repeat(n);
}