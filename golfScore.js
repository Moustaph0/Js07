function golfScore(par, strokes) {
    let score_names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bongey","Go Home!"];
    if(strokes == 1) { // this is always a hole in 1
      return score_names[0]; // hole in one
   }
  if(strokes === par) {
    return score_names[3]; // on par
  }
  if(strokes <= par - 2) {
    return score_names[1]; // eagle
  }
  if(strokes == par - 1) {
    return score_names[2]; // birdie
  }
  if(strokes >= par + 3) {
    return score_names[6]; // go home
  }
  if(strokes >= par + 2) {
    return score_names[5]; // double bogie
  }
  if(strokes >= par + 1) {
    return score_names[4]; // bogie
  }
    
  }
  
  console.log(golfScore(4,1));

module.exports = console.log(golfScore);
