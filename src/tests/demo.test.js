describe('Testing in archive demo.test.js', () => {
  test("strings equeal", () => {
  
    // 1. Inicialización
    const message1 = 'Hello World';
  
    // 2. Estímulo
    const message2 = `Hello World`;
  
    // 3. Observar el comportamiento
    expect(message1).toBe(message2) // ===
  });
})

