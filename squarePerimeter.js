
function squarePerimeter(longueur) {
    let squareF = { perimeter: longueur*4, area: longueur*longueur}
    
   return squareF;
}
let square = squarePerimeter(4);
console.log("perimeter :", square.perimeter);
console.log("area :", square.area);

module.exports = squarePerimeter;
