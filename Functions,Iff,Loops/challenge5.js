class SmallestIntegerFinder {
    findSmallestInt(array) {
      
      let leastNumber;
      for (let i = 0; i < array.length; i++) {
        const arrNumber = array[i];
      
        if (i === 0){
          leastNumber = arrNumber;
        }
        if(arrNumber < leastNumber){
          leastNumber = arrNumber;
        }
      }
        return leastNumber;
        
    }
    
  }
