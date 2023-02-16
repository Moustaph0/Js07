

function celsiusToFahrenheit(celsius) 
{
  let cTemp = celsius;
  let Fahrenheit = (cTemp * 1.8) + 32;
    console.log(Fahrenheit);
}

celsiusToFahrenheit(30);

module.exports = celsiusToFahrenheit;
