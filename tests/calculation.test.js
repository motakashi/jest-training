const Calculation = require('./../src/calculation.js');

describe('Calculationクラスのテスト',() => {

  test('adds 1 + 2 to equal 3', () => {
    calculation = new Calculation();
    expect(calculation.sum(1, 2)).toBe(3);
  });

  test('adds 0 + -1 to equal -1', () => {
    calculation = new Calculation();
    expect(calculation.sum(0, -1)).toBe(-1);
  });

});
