const name   = 'Turiano';
const lastname = 'Romero';

// const nameCompleto = name + ' ' + lastname;
const fullName = `${ name } ${ lastname }`;

// console.log( fullName );


export const getGreeting = (name = 'Jesus') => {
  return `Hello ${name}`;
}

// console.log( `Este es un texto: ${ getGreeting( name ) }  ` );