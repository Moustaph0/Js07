function golfScore(par, coup) {
    let score_names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bongey","Go Home!"];
    if(coup == 1) { // this is always a hole in 1
      return score_names[0]; // hole in one
    }
    if(coup === par) {
      return score_names[3]; // on par
    }
    if(coup <= par - 2) {
      return score_names[1]; // eagle
    }
    if(coup == par - 1) {
      return score_names[2]; // birdie
    }
    if(coup >= par + 3) {
      return score_names[6]; // go home
    }
    if(coup >= par + 2) {
      return score_names[5]; // double bogie
    }
    if(coup >= par + 1) {
      return score_names[4]; // bogie
    }
    
  }
  
  console.log(golfScore(4,1));