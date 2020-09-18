import '@testing-library/jest-dom'
import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe('Testing 08-imp-exp', () => {

  test("getHeroeById return hero for id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find(h => h.id === id );
    expect(heroe).toEqual(heroeData)
  });
  
  test("getHeroeById return undefined if heroe not found", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("getHeroesByOwner return array with DC heroes ", () => {
    const owner = 'DC';
    const arrayHeroeDC = getHeroesByOwner(owner);
    const arrayHeroeDataDC = heroes.filter((heroe) => heroe.owner === owner);
    expect(arrayHeroeDC).toEqual(arrayHeroeDataDC)
  });

  test("getHeroesByOwner return length array = 2, Marvel ", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
  });
});
