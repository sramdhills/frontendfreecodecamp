const rps = (p1, p2) => {
      
    var rules = {rock: 3, paper: 1, scissors: 2};
    const result = rules[p1] - rules[p2]
    if(result === 0){
        return "Draw!";
    }else if (result === 1 || result === -2){
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
  };
  
  