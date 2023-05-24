var humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears === 1){
      return [humanYears, 15, 15];
    }
    
    if (humanYears === 2){
      return [humanYears, 24, 24];
    }
    
    const excessYears = humanYears - 2;
    const extraCatYears = excessYears * 4;
    const extraDogYears = excessYears * 5;
    
    
    return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
  }
  