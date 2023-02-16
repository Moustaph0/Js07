
function squarePerimeter(longueur) {
    let square = { perimeter: longueur*4, aria: longueur*longueur}
    
    console.log("perimeter :", square.perimeter);
    console.log("area :", square.aria);
}

squarePerimeter(6);

module.exports = squarePerimeter;
