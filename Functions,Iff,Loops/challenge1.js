function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
    let Count = 0;
    arrayOfSheep = [true, false, true, true, false, true];
    for(let i = 0; i < arrayOfSheep.length; i++){
        if(arrayOfSheep[i]) Count+=1
    }
    return Count
}
console.log(countSheeps());
