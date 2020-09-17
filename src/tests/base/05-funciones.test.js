import '@testing-library/jest-dom';
import { getUser, getUserActive } from "../../base/05-funciones";

describe('Testing 05-funciones', () => {
  test("the fn getUser return obj", () => {
    const user = {
      uid: "ABC123",
      username: "Rome",
    };
    const _getUser = getUser();
    expect(_getUser).toEqual(user);
  });

  test("the fn getUsuarioActivo return obj, receives params", () => {
    const name = 'Rome'
    const _getUserActive = getUserActive(name);
    const _user = {
      uid: "ABC567",
      username: name,
    };
    expect(_getUserActive).toEqual(_user);
  });
});
