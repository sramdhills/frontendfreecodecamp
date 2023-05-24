function century(year) {
    let result = 0
    let century = year / 100
    result = Math.ceil(century)
    return result;
  }