import { returnArray } from '../../base/07-deses-arr';

describe('Testing archive 07-deses-arr', () => {
  test("the fn returnArray return a number and string ", () => {
     
    const [letters, numbers] = returnArray(); // ["ABC", 123]

    expect(letters).toBe("ABC");
    expect(typeof letters ).toBe("string");

    expect(numbers).toBe(123);
    expect(typeof numbers).toBe("number");
  });
  
});
