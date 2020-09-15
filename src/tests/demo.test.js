test('First test', () => {
  const isActive = true

  if(!isActive) {
    console.log('Está activo')
  } else {
    throw new Error("No está activo");
  }
})
