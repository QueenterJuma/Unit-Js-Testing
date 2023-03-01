const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length
  }
  return "Conditions are not met!";
};

const reverseString = (string) => string.split('').reverse().join('');

class CalculatorClass  {
  sum(x, y) {
    return x + y;
  }
  subtraction(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  division(x, y) {
    return x / y;
  }
}

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export { stringLength, reverseString, CalculatorClass, capitalize };