import '@testing-library/jest-dom'
import { getGreeting } from "../../base/02-template-string";

describe("Testing 02-template-string", () => {
  test("test in fn getGreeting retun Hello Turiano", () => {
    const name = 'Turiano'
    const greeting = getGreeting(name);
    expect(greeting).toBe(`Hello ${name}`);
  });

  test("test in fn getGreeting retun Hello Jesus, if there is no argument", () => {
    const greeting = getGreeting();
    expect(greeting).toBe(`Hello Jesus`);
  });
});
