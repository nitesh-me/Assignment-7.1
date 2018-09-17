// javascript code to convert temperature from celcius to fahrenheit  and vice versa

var temperatureInCelsius= 40;
var celsiusToFahrenheit;
var temperatureInFahrenheit =104;
var fahrenheitToCelcius;
celsiusToFahrenheit = (temperatureInCelsius *9)/5 +32;
fahrenheitToCelcius = ((temperatureInFahrenheit-32)*5)/9;

console.log('Temperature of '+ temperatureInCelsius +' celsius, will be '+ temperatureInFahrenheit +' fahrenheit');
console.log('Temperature of '+temperatureInFahrenheit +' fahrenheit, will be '+ fahrenheitToCelcius +' celsius');
