const ratioOfTwoNumbers = require("./utilities/ratio/index.js");
const factorialOfNumber = require("./utilities/factorial/index.js");
function ratioAndFactorial(num1, num2, num3) {
  const rat = ratioOfTwoNumbers(num1, num2);
  const fact = factorialOfNumber(num3);
  return { ratio: rat, factorial: fact };
}
module.exports = ratioAndFactorial;
