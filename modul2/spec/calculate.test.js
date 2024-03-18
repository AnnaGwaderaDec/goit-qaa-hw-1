const calculateArea = require('../calculate.js');

describe('calculate', () => {
    it('Calculates the area of a rectangle of length 5 and width 4', () => {
        expect(calculateArea(5, 4)).toBe(20);
    });

    it('Calculates the area of a rectangle of length 3 and width 7', () => {
        expect(calculateArea(3, 7)).toBe(21);
    });

    it('Calculates the area of a rectangle of length 10 and width 10', () => {
      expect(calculateArea(10, 10)).toBe(100);
  });

});
