import {
  stringLength,
  reverseString,
  CalculatorClass,
  capitalize,
} from "./sring.js";
const calculatorClass = new CalculatorClass();
test("string is at least 1 and atmost 10 character long", () => {
  const string = 'abiroabiro'
  expect(stringLength(string)).toBeGreaterThanOrEqual(1);
  expect(stringLength(string)).toBeLessThanOrEqual(10);
});

test('reverse hello to be olleh', () => {
  const string = "hello";
  expect(reverseString(string)).toMatch("olleh");
});

describe("calculatorClass", () => {
  describe('sum', () => {
    test('sum', () => {
      expect(calculatorClass.sum(5,6)).toEqual(11);
    });
    test("sum", () => {
      expect(calculatorClass.sum(10,12)).toEqual(22);
    });
    test("sum", () => {
      expect(calculatorClass.sum(10,2)).toEqual(12);
    });
  });

  describe("subtraction", () => {
    test("subtraction", () => {
      expect(calculatorClass.subtraction(5,6)).toEqual(-1);
    });
    test("subtraction", () => {
      expect(calculatorClass.subtraction(10,8)).toEqual(2);
    });
    test("subtraction", () => {
      expect(calculatorClass.subtraction(5,3)).toEqual(2);
    });
  });

  describe("multiply", () => {
    test("multiply", () => {
      expect(calculatorClass.multiply(5,6)).toEqual(30);
    });
    test("multiply", () => {
      expect(calculatorClass.multiply(10,12)).toEqual(120);
    });
    test("multiply", () => {
      expect(calculatorClass.multiply(2,12)).toEqual(24);
    });
  });

  describe("division", () => {
    test("division", () => {
      expect(calculatorClass.division(12,6)).toEqual(2);
    });
    test("division", () => {
      expect(calculatorClass.division(10,2)).toEqual(5);
    });
    test("division", () => {
      expect(calculatorClass.division(8,4)).toEqual(2);
    });
  });

});

test('capitalise first letter in world', () => {
  const str = 'world';
  expect(capitalize(str)).toMatch(/World/);
});