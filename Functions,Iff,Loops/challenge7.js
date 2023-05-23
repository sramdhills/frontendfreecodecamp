function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let sum = 0;
    const count = marks.length
    
    for(i = 0; i < count; i++){
      sum = sum + marks[i]
      }
    return Math.floor(sum / count);
      
  }