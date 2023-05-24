function noSpace(str){
    const arr = str.split(" ");
    let newArray = [];
    
    for (let i = 0; i < arr.length; i++){
      const trimString = arr[i].trim();
      newArray.push(trimString);
    }
    const finalString = newArray.join("");
    
    return finalString;
  }