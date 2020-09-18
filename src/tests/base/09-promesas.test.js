import '@testing-library/jest-dom'
import heroes from '../../data/heroes';
import { getHeroeByIdAsync } from '../../base/09-promesas';

describe('Testing promise archive 09-promesas', () => {

  test("getHeroeByIdAsync return heroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toBe(heroes[0])
        done()
      });
  });

  test("getHeroeByIdAsync return error not found heroe", (done) => {
    const id = 10;
    const msgErr = "No se pudo encontrar el héroe";
    getHeroeByIdAsync(id)
      .catch((error) => {
        expect(error).toBe(msgErr);
        done();
      });
  });
});
