import '@testing-library/jest-dom';
import getImagen from '../../base/11-async-await';

describe('Testing with async-await and fetch', () => {
  test("getImagen return url of image", async () => {
    const urlImg = await getImagen();
    // console.warn(urlImg);
    expect(urlImg.includes('https://')).toBe(true)
  });
});
