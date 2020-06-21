/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
  // Your code here
  array.forEach((pointer) => console.log(pointer));
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
  return temperatures.map((faren) => (faren - 32) * (5 / 9));
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
  return temperatures.filter((number) => number > threshhold);
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = (temperatures, threshhold) => {
  // let tempExceeding = temperatures.filter((faren) => faren > threshhold);
  // let tempInCelc = tempExceeding.map((temps) => ((temps - 32) * 5) / 9);

  // tempInCelc.forEach((temps) => console.log(temps)); this is how i had solved it
  logger(toCelsius(hottestDays(temperatures, threshhold)));
};

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
