

function celsiusToFahrenheit(celsius) 
{
  let Temp = celsius;
  let FahrenheitF = (Temp * 1.8) + 32;
    return FahrenheitF;
}


let Fahrenheit = celsiusToFahrenheit(30);
console.log(Fahrenheit);

module.exports = celsiusToFahrenheit;
