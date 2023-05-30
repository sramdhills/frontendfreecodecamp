function filter_list(numArr) {
    // Return a new array with the strings filtered out
    return numArr.filter(arrItem => typeof arrItem === 'number' && arrItem >= 0);
  }
  
